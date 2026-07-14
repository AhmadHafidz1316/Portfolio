import { motion } from "motion/react";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
}

export default function BlurText({
  text,
  className = "",
  delay = 0,
  duration = 0.8,
  stagger = 0.05,
}: BlurTextProps) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, filter: "blur(12px)", y: 10 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: duration,
        ease: [0.16, 1, 0.3, 1], // Custom ease-out cubic
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-5% 0px" }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block mr-2"
        >
          {word === "" ? "\u00A0" : word}
        </motion.span>
      ))}
    </motion.span>
  );
}
