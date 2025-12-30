"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden z-10">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 backdrop-blur-md hover:bg-white/[0.06] transition-all cursor-pointer group"
          >
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent/20 text-accent">
              <Sparkles size={12} fill="currentColor" />
            </span>
            <span className="text-sm text-gray-300 font-medium">
              Introducing Lumina 2.0
            </span>
            <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </motion.div>

          {/* Heading - Redesigned with better hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              <span className="text-white">The AI Workspace</span>
              <br />
              <span className="text-primary">Built for Tomorrow</span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Lumina combines{" "}
            <span className="text-white font-medium">
              intelligent automation
            </span>{" "}
            with seamless collaboration to help teams work smarter, faster, and
            with unprecedented clarity.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16"
          >
            <button className="group relative px-6 py-3.5 bg-white text-black text-base font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </button>

            <button className="group px-6 py-3.5 bg-transparent border border-white/20 text-white text-base font-medium rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-3 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Play size={14} fill="currentColor" className="ml-0.5" />
              </div>
              Watch Demo
            </button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            {[
              { value: "5K+", label: "Teams" },
              { value: "99.9%", label: "Uptime" },
              { value: "4.9", label: "Rating" },
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Zap size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-text-secondary uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Hero Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -z-10 mix-blend-screen pointer-events-none" />
    </section>
  );
};

export default Hero;
