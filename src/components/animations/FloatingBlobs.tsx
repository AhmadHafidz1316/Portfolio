import { motion } from "motion/react";

export default function FloatingBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background radial overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-neutral-950/80" />

      {/* Blob 1 - Indigo/Blue */}
      <motion.div
        className="absolute w-[28rem] h-[28rem] rounded-full bg-blue-500/10 blur-[80px] -top-10 -left-10"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 2 - Purple/Violet */}
      <motion.div
        className="absolute w-[32rem] h-[32rem] rounded-full bg-violet-500/10 blur-[90px] top-1/3 -right-20"
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 80, -60, 0],
          scale: [1, 0.85, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 3 - Emerald/Cyan */}
      <motion.div
        className="absolute w-[24rem] h-[24rem] rounded-full bg-emerald-500/5 blur-[70px] bottom-10 left-1/4"
        animate={{
          x: [0, 60, -60, 0],
          y: [0, 40, -40, 0],
          scale: [1, 1.1, 0.85, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
