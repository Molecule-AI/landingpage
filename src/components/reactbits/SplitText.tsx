"use client";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

interface SplitTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "chars";
}

export default function SplitText({
  text,
  delay = 40,
  className = "",
  animateBy = "chars",
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const units =
    animateBy === "words"
      ? text.split(" ").map((w) => w + "\u00A0")
      : text.split("");

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`} aria-label={text}>
      {units.map((char, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          initial={{ opacity: 0, y: 16, rotateX: -40 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, rotateX: 0 }
              : { opacity: 0, y: 16, rotateX: -40 }
          }
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: i * (delay / 1000),
          }}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
