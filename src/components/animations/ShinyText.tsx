import { CSSProperties } from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number; // speed in seconds
  className?: string;
}

export default function ShinyText({
  text,
  disabled = false,
  speed = 3,
  className = "",
}: ShinyTextProps) {
  // Use custom style to make it self-contained
  const animationStyle: CSSProperties = disabled
    ? {}
    : {
        backgroundImage:
          "linear-gradient(120deg, #94a3b8 30%, #f8fafc 50%, #94a3b8 70%)",
        backgroundSize: "200% auto",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        animation: `shinySweep ${speed}s linear infinite`,
        WebkitTextFillColor: "transparent",
      };

  return (
    <span className={`inline-block font-medium ${className}`} style={animationStyle}>
      {/* Inject custom keyframe stylesheet only once */}
      {!disabled && (
        <style>{`
          @keyframes shinySweep {
            0% {
              background-position: -100% center;
            }
            100% {
              background-position: 100% center;
            }
          }
        `}</style>
      )}
      {text}
    </span>
  );
}
