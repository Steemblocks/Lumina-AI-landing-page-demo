"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

const Logo = ({ size = "md", showText = true, className = "" }: LogoProps) => {
  const sizes = {
    sm: { icon: 28, text: "text-lg" },
    md: { icon: 36, text: "text-xl" },
    lg: { icon: 48, text: "text-3xl" },
  };

  const { icon, text } = sizes[size];

  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 group ${className}`}
      suppressHydrationWarning
    >
      {/* Animated Logo Mark */}
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div
          className="relative rounded-xl overflow-hidden"
          style={{ width: icon, height: icon }}
        >
          {/* Background with animated gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7042f8] via-[#9b6dff] to-[#00c6ff] opacity-100" />

          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
          />

          {/* Lumina "L" with modern design */}
          <svg
            viewBox="0 0 32 32"
            className="relative w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Main L shape */}
            <path
              d="M10 7V25H22"
              stroke="white"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Sparkle accent */}
            <circle cx="22" cy="10" r="2.5" fill="white" opacity="0.9" />
            <circle cx="24" cy="8" r="1" fill="white" opacity="0.6" />
          </svg>

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(112,66,248,0.5)]" />
        </div>

        {/* Outer glow ring on hover */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#7042f8] to-[#00c6ff] opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300 -z-10" />
      </motion.div>

      {/* Logo Text */}
      {showText && (
        <motion.span
          className={`${text} font-bold tracking-tight`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#a78bfa] transition-all duration-300">
            Lumina
          </span>
        </motion.span>
      )}
    </Link>
  );
};

export default Logo;
