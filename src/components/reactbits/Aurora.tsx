"use client";
import React from "react";

interface AuroraProps {
  className?: string;
  colors?: string[];
}

export default function Aurora({
  className = "",
  colors = [
    "rgba(127,232,214,0.3)",
    "rgba(94,227,207,0.2)",
    "rgba(58,166,144,0.25)",
    "rgba(34,209,238,0.15)",
  ],
}: AuroraProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <div className="aurora-container absolute inset-0">
        {colors.map((color, i) => (
          <div
            key={i}
            className="aurora-blob absolute rounded-full"
            style={{
              background: `radial-gradient(circle, ${color}, transparent 70%)`,
              width: `${40 + i * 15}%`,
              height: `${40 + i * 15}%`,
              top: `${-10 + i * 12}%`,
              left: `${10 + i * 18}%`,
              filter: "blur(80px)",
              animation: `aurora-float-${i} ${8 + i * 3}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes aurora-float-0 {
          0% { transform: translate(0%, 0%) scale(1); }
          100% { transform: translate(15%, 10%) scale(1.2); }
        }
        @keyframes aurora-float-1 {
          0% { transform: translate(0%, 0%) scale(1.1); }
          100% { transform: translate(-20%, 15%) scale(0.9); }
        }
        @keyframes aurora-float-2 {
          0% { transform: translate(0%, 0%) scale(0.9); }
          100% { transform: translate(10%, -20%) scale(1.3); }
        }
        @keyframes aurora-float-3 {
          0% { transform: translate(0%, 0%) scale(1); }
          100% { transform: translate(-15%, 5%) scale(1.1); }
        }
      `}</style>
    </div>
  );
}
