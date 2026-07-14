import { motion } from "motion/react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export default function SplitText({
  text,
  className = "",
  delay = 0,
  stagger = 0.03,
}: SplitTextProps) {
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
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger * 0.5,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 150,
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          variants={wordVariants}
          className="inline-block mr-2 white-nowrap"
        >
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={charVariants}
              className="inline-block origin-bottom cursor-default"
            >
              {char}
            </motion.span>
          ))}
          {/* Add a space character to maintain normal sentence spacing */}
          <span className="inline-block">&nbsp;</span>
        </motion.span>
      ))}
    </motion.span>
  );
}
