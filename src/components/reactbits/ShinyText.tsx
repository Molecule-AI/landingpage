"use client";
import React from "react";

interface ShinyTextProps {
  text: string;
  className?: string;
  speed?: string;
}

export default function ShinyText({
  text,
  className = "",
  speed = "3s",
}: ShinyTextProps) {
  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        backgroundImage:
          "linear-gradient(120deg, rgba(127,232,214,0) 40%, rgba(127,232,214,0.8) 50%, rgba(127,232,214,0) 60%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "inherit",
        animation: `shiny-sweep ${speed} linear infinite`,
      }}
    >
      {text}
      <style>{`
        @keyframes shiny-sweep {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </span>
  );
}
