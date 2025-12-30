"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Lead",
    company: "TechFlow",
    avatar: "/images/avatar-sarah.png",
    text: "Lumina has completely changed how our team collaborates. The AI insights are scary accurate and have helped us reduce planning time by 60%.",
    rating: 5,
  },
  {
    name: "Marcus Thorne",
    role: "CEO",
    company: "Visionary",
    avatar: "/images/avatar-marcus.png",
    text: "The automation workflows saved us over 20 hours a week on manual data entry. ROI was visible within the first month.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Design Director",
    company: "CreativeSync",
    avatar: "/images/avatar-elena.png",
    text: "Finally, an AI tool that actually understands context and doesn't just parrot generic advice. It feels like having a smart colleague.",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-spacing relative z-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8"
          >
            <Star size={14} className="text-yellow-400" fill="currentColor" />
            <span className="text-sm text-gray-400 font-medium">
              Trusted by 5,000+ Teams
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white">
            Loved by <span className="text-primary">Innovation Leaders</span>
          </h2>
          <p className="text-base text-text-secondary">
            See why industry pioneers choose Lumina to power their teams.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden h-full flex flex-col">
                {/* Quote Icon Background */}
                <div className="absolute -top-4 -right-4 w-24 h-24 text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                  <Quote size={96} strokeWidth={1} />
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Stars */}
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <Star
                        size={16}
                        className="text-yellow-400"
                        fill="currentColor"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-base text-gray-300 mb-6 relative z-10 flex-grow leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-primary/50 transition-all duration-300">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    {/* Online indicator */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0a0a1a]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-text-secondary">
                      {testimonial.role}{" "}
                      <span className="text-primary">
                        @ {testimonial.company}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50"
        >
          {["Forbes", "TechCrunch", "Wired", "FastCompany", "VentureBeat"].map(
            (company, i) => (
              <span
                key={i}
                className="text-xl md:text-2xl font-bold text-white/30 tracking-wider uppercase"
              >
                {company}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
