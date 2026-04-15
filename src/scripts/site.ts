// Client-side animation + interaction orchestrator.
// Kept intentionally small — no framework, no dependencies.

const reduced =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------------- scroll-reveal fades ----------------
function initReveal() {
  const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!els.length) return;
  if (reduced) {
    els.forEach((el) => el.setAttribute("data-visible", ""));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-visible", "");
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "-40px 0px -40px 0px", threshold: 0.01 },
  );
  els.forEach((el) => io.observe(el));
}

// ---------------- rotating text ----------------
function initRotators() {
  const rotators = document.querySelectorAll<HTMLElement>("[data-rotate]");
  rotators.forEach((el) => {
    const raw = el.getAttribute("data-rotate") || "";
    const words = raw.split("|").filter(Boolean);
    if (words.length < 2) return;
    let i = 0;
    el.textContent = words[0];
    if (reduced) return;
    setInterval(() => {
      i = (i + 1) % words.length;
      el.classList.add("is-leaving");
      setTimeout(() => {
        el.textContent = words[i];
        el.classList.remove("is-leaving");
        el.classList.add("is-entering");
        setTimeout(() => el.classList.remove("is-entering"), 50);
      }, 280);
    }, 2800);
  });
}

// ---------------- use-case tabs ----------------
function initTabs() {
  const groups = document.querySelectorAll<HTMLElement>("[data-tabs]");
  groups.forEach((group) => {
    const tabs = group.querySelectorAll<HTMLButtonElement>("[data-tab]");
    const panels = group.querySelectorAll<HTMLElement>("[data-panel]");
    if (!tabs.length || !panels.length) return;
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const key = tab.getAttribute("data-tab");
        tabs.forEach((t) => {
          const active = t.getAttribute("data-tab") === key;
          t.setAttribute("aria-selected", active ? "true" : "false");
          if (active) t.setAttribute("data-active", "");
          else t.removeAttribute("data-active");
        });
        panels.forEach((p) => {
          const active = p.getAttribute("data-panel") === key;
          if (active) {
            p.removeAttribute("hidden");
            p.setAttribute("data-active", "");
          } else {
            p.setAttribute("hidden", "");
            p.removeAttribute("data-active");
          }
        });
      });
    });
  });
}

// ---------------- canvas hex shape grid ----------------
interface GridOpts {
  size?: number;
  speed?: number;
  border?: string;
  hoverFill?: string;
  hoverBorder?: string;
}

function initShapeGrid(
  canvas: HTMLCanvasElement,
  opts: GridOpts = {},
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const size = opts.size ?? 42;
  const speed = reduced ? 0 : opts.speed ?? 0.18;
  const border = opts.border ?? "rgba(127, 232, 214, 0.14)";
  const hoverBorder = opts.hoverBorder ?? "rgba(127, 232, 214, 0.85)";
  const hoverFill = opts.hoverFill ?? "rgba(127, 232, 214, 0.18)";

  let w = 0;
  let h = 0;
  let dpr = 1;
  let offset = 0;
  let mouseX = -9999;
  let mouseY = -9999;
  let raf = 0;

  const hexW = size * Math.sqrt(3);
  const hexH = size * 1.5;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    ctx!.setTransform(1, 0, 0, 1, 0, 0);
    ctx!.scale(dpr, dpr);
    w = rect.width;
    h = rect.height;
  }

  function hexPath(cx: number, cy: number, r: number) {
    ctx!.beginPath();
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 3) * i - Math.PI / 2;
      const x = cx + r * Math.cos(a);
      const y = cy + r * Math.sin(a);
      if (i === 0) ctx!.moveTo(x, y);
      else ctx!.lineTo(x, y);
    }
    ctx!.closePath();
  }

  function draw() {
    ctx!.clearRect(0, 0, w, h);
    offset += speed;
    const ox = offset % hexW;
    const oy = offset % (hexH * 2);

    const startRow = -2;
    const endRow = Math.ceil(h / hexH) + 2;
    const startCol = -2;
    const endCol = Math.ceil(w / hexW) + 2;

    for (let row = startRow; row <= endRow; row++) {
      for (let col = startCol; col <= endCol; col++) {
        const cx = col * hexW + (row % 2 === 0 ? 0 : hexW / 2) - ox;
        const cy = row * hexH - oy;
        if (cx < -hexW || cx > w + hexW) continue;
        if (cy < -hexH || cy > h + hexH) continue;

        const dx = cx - mouseX;
        const dy = cy - mouseY;
        const d2 = dx * dx + dy * dy;
        const hoverR = size * 1.6;
        const hover = d2 < hoverR * hoverR;
        const fade = hover ? 1 - Math.sqrt(d2) / hoverR : 0;

        hexPath(cx, cy, size * 0.88);
        if (fade > 0) {
          ctx!.fillStyle = hoverFill.replace(
            /rgba?\(([^)]+)\)/,
            (_, g) => `rgba(${g.split(",").slice(0, 3).join(",")},${(0.22 * fade).toFixed(3)})`,
          );
          ctx!.fill();
        }
        ctx!.strokeStyle = hover
          ? hoverBorder.replace(
              /rgba?\(([^)]+)\)/,
              (_, g) =>
                `rgba(${g.split(",").slice(0, 3).join(",")},${(0.18 + 0.6 * fade).toFixed(3)})`,
            )
          : border;
        ctx!.lineWidth = 1;
        ctx!.stroke();
      }
    }
    raf = requestAnimationFrame(draw);
  }

  const onMove = (e: PointerEvent) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  };
  const onLeave = () => {
    mouseX = -9999;
    mouseY = -9999;
  };

  window.addEventListener("pointermove", onMove, { passive: true });
  window.addEventListener("pointerleave", onLeave);
  window.addEventListener("resize", resize);

  resize();
  draw();

  // pause when not visible
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          if (!raf) draw();
        } else {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      }
    },
    { rootMargin: "100px" },
  );
  io.observe(canvas);
}

function initAllGrids() {
  document
    .querySelectorAll<HTMLCanvasElement>("canvas[data-hex-grid]")
    .forEach((c) => initShapeGrid(c));
}

// ---------------- boot ----------------
function boot() {
  initReveal();
  initRotators();
  initTabs();
  initAllGrids();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
