"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  className?: string;
  chars?: string;
}

export default function DecryptedText({
  text,
  speed = 50,
  className = "",
  chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`",
}: DecryptedTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(
    text.replace(/[^\s]/g, () => chars[Math.floor(Math.random() * chars.length)])
  );
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    let revealed = 0;
    const letters = text.split("");

    const tick = () => {
      if (revealed >= letters.length) {
        setDisplay(text);
        return;
      }
      revealed++;
      setDisplay(
        letters
          .map((ch, i) => {
            if (i < revealed) return ch;
            if (ch === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      setTimeout(tick, speed);
    };

    // Initial scramble frames before revealing
    let scrambleCount = 0;
    const scramble = () => {
      if (scrambleCount >= 8) {
        tick();
        return;
      }
      scrambleCount++;
      setDisplay(
        letters
          .map((ch) =>
            ch === " " ? " " : chars[Math.floor(Math.random() * chars.length)]
          )
          .join("")
      );
      setTimeout(scramble, 60);
    };
    scramble();
  }, [text, speed, chars]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) animate();
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animate]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {display}
    </span>
  );
}
