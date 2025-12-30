"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <>
      <header
        className={`fixed top-4 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
          scrolled ? "py-0" : "py-2"
        }`}
      >
        <div
          className={`
          relative w-[95%] max-w-5xl rounded-full border transition-all duration-300
          ${
            scrolled
              ? "bg-[#030014]/60 backdrop-blur-xl border-white/10 px-6 py-3 shadow-2xl"
              : "bg-transparent border-transparent px-2 py-4"
          }
        `}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo size="md" />

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 bg-white/5 px-8 py-2 rounded-full border border-white/5 backdrop-blur-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-white/70 hover:text-white hover:scale-105 transition-all tracking-wide"
                  suppressHydrationWarning
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/login"
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                suppressHydrationWarning
              >
                Sign In
              </Link>
              <button className="bg-white hover:bg-white/90 text-black px-6 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-0.5">
                Start Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-50 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#030014]/95 backdrop-blur-xl pt-32 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl font-bold text-white/90 hover:text-primary transition-colors block"
                    suppressHydrationWarning
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="h-px bg-white/10 my-6" />
              <button className="btn-primary w-full py-4 text-lg justify-center shadow-lg shadow-primary/20">
                Get Started Now <ArrowRight size={20} className="ml-2" />
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
