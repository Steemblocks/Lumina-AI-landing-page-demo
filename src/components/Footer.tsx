"use client";

import React from "react";
import Link from "next/link";
import {
  Twitter,
  Github,
  Linkedin,
  Instagram,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-20 border-t border-white/5 bg-[#020010] pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="inline-block mb-8"
              suppressHydrationWarning
            >
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Lumina
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-7 mb-8">
              Empowering teams to achieve more with intelligent automation and
              data-driven insights. The future of work is here.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white text-text-secondary transition-all duration-300 border border-white/5 hover:border-white/20"
                  suppressHydrationWarning
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-8">Product</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              {["Features", "Integrations", "Pricing", "Changelog", "Docs"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-primary transition-colors flex items-center gap-1 group"
                      suppressHydrationWarning
                    >
                      {item}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-8">Company</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              {["About Us", "Careers", "Blog", "Contact", "Privacy Policy"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-primary transition-colors"
                      suppressHydrationWarning
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-8">Stay Updated</h4>
            <p className="text-sm text-text-secondary mb-6">
              Subscribe to our newsletter for the latest updates and tips.
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-white placeholder:text-white/20"
                required
              />
              <button className="btn-primary py-3 text-sm font-semibold shadow-lg shadow-primary/25">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} Lumina AI only for Demo Purpose. All
            rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-text-secondary">
            <Link
              href="#"
              className="hover:text-white transition-colors"
              suppressHydrationWarning
            >
              Terms
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors"
              suppressHydrationWarning
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors"
              suppressHydrationWarning
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
