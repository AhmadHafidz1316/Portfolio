import React, { useRef, useState, MouseEvent } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

interface MagnetProps {
  children: React.ReactNode;
  range?: number; // Distance from button where magnetism starts to take effect
  strength?: number; // How much it pulls (higher is stronger)
  className?: string;
}

export default function Magnet({
  children,
  range = 80,
  strength = 0.35,
  className = "",
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Use framer-motion motion values and springs for smooth acceleration/deceleration physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 120, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Get center point of element
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate distance from cursor to center of element
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    const distance = Math.hypot(distanceX, distanceY);

    if (distance < range) {
      setIsHovered(true);
      // Move element towards mouse
      x.set(distanceX * strength);
      y.set(distanceY * strength);
    } else {
      handleMouseLeave();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className}`}
    >
      <motion.div
        style={{ x: springX, y: springY }}
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
