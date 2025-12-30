"use client";

import React from "react";
import { motion } from "framer-motion";

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Gradient Orbs */}

      {/* Primary Purple Orb - Top Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] -left-[5%] w-[600px] h-[600px]"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(112, 66, 248, 0.5) 0%, rgba(112, 66, 248, 0.2) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </motion.div>

      {/* Cyan Orb - Top Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.15, 1],
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -top-[5%] -right-[10%] w-[500px] h-[500px]"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, rgba(0, 198, 255, 0.4) 0%, rgba(0, 198, 255, 0.15) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </motion.div>

      {/* Pink/Magenta Orb - Bottom Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          x: [0, -30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -bottom-[15%] -right-[5%] w-[700px] h-[700px]"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255, 0, 128, 0.35) 0%, rgba(255, 0, 128, 0.1) 40%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </motion.div>

      {/* Secondary Purple Orb - Bottom Left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.25, 0.4, 0.25],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute -bottom-[10%] -left-[10%] w-[550px] h-[550px]"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at 40% 60%, rgba(92, 46, 224, 0.4) 0%, rgba(92, 46, 224, 0.15) 40%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </motion.div>

      {/* Floating Geometric Shapes with CSS */}

      {/* Rotating Ring - Top Right Area */}
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{
          opacity: 0.6,
          rotate: 360,
        }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          opacity: { duration: 2 },
        }}
        className="absolute top-[15%] right-[10%] w-32 h-32 md:w-48 md:h-48"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            border: "2px solid rgba(112, 66, 248, 0.3)",
            boxShadow:
              "0 0 40px rgba(112, 66, 248, 0.2), inset 0 0 30px rgba(112, 66, 248, 0.1)",
          }}
        />
      </motion.div>

      {/* Floating Diamond - Left Side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.5,
          y: [0, -30, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] left-[5%] w-20 h-20 md:w-32 md:h-32"
      >
        <div
          className="w-full h-full rotate-45"
          style={{
            background:
              "linear-gradient(135deg, rgba(0, 198, 255, 0.2) 0%, rgba(112, 66, 248, 0.2) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 0 30px rgba(0, 198, 255, 0.15)",
          }}
        />
      </motion.div>

      {/* Glowing Circle - Middle Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[55%] right-[8%] w-24 h-24 md:w-36 md:h-36"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 0, 128, 0.3) 0%, transparent 70%)",
            boxShadow: "0 0 60px rgba(255, 0, 128, 0.2)",
          }}
        />
      </motion.div>

      {/* Small Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            y: [0, -20, 0],
            x: [0, i % 2 === 0 ? 10 : -10, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full"
          style={{
            top: `${20 + i * 12}%`,
            left: `${15 + i * 15}%`,
            background:
              i % 3 === 0
                ? "rgba(112, 66, 248, 0.6)"
                : i % 3 === 1
                ? "rgba(0, 198, 255, 0.6)"
                : "rgba(255, 0, 128, 0.6)",
            boxShadow: `0 0 15px ${
              i % 3 === 0
                ? "rgba(112, 66, 248, 0.4)"
                : i % 3 === 1
                ? "rgba(0, 198, 255, 0.4)"
                : "rgba(255, 0, 128, 0.4)"
            }`,
          }}
        />
      ))}

      {/* Subtle Lines/Rays */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-[50vh]"
        style={{
          background:
            "linear-gradient(180deg, rgba(112, 66, 248, 0.5) 0%, transparent 100%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute top-0 left-[30%] w-px h-[40vh]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 198, 255, 0.4) 0%, transparent 100%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 2 }}
        className="absolute top-0 right-[25%] w-px h-[35vh]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 0, 128, 0.4) 0%, transparent 100%)",
        }}
      />
    </div>
  );
};

export default FloatingShapes;
