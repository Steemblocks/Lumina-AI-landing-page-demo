"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Cpu,
  MessageSquare,
  BarChart3,
  Users,
} from "lucide-react";

const features = [
  {
    icon: <Zap className="text-white" size={24} />,
    gradient: "from-blue-500 to-cyan-500",
    title: "Instant Automation",
    description:
      "Transform manual tasks into automated workflows with our intuitive AI engine.",
  },
  {
    icon: <Shield className="text-white" size={24} />,
    gradient: "from-indigo-500 to-purple-500",
    title: "Enterprise Security",
    description:
      "Your data is encrypted and private. We adhere to the highest security standards.",
  },
  {
    icon: <Cpu className="text-white" size={24} />,
    gradient: "from-purple-500 to-pink-500",
    title: "Advanced AI Models",
    description:
      "Powered by the latest LLMs tailored specifically for your business context.",
  },
  {
    icon: <MessageSquare className="text-white" size={24} />,
    gradient: "from-pink-500 to-rose-500",
    title: "Contextual Chat",
    description:
      "An AI assistant that knows your project history and team documentation.",
  },
  {
    icon: <BarChart3 className="text-white" size={24} />,
    gradient: "from-orange-500 to-red-500",
    title: "Deep Analytics",
    description:
      "Get real-time insights into team productivity and project health.",
  },
  {
    icon: <Users className="text-white" size={24} />,
    gradient: "from-teal-500 to-emerald-500",
    title: "Team Collaboration",
    description:
      "Built for teams to sync seamlessly across time zones and departments.",
  },
];

const Features = () => {
  return (
    <section id="features" className="section-spacing relative z-20">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-5"
          >
            Powerful Features for <br />{" "}
            <span className="text-primary">Modern Teams</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-text-secondary"
          >
            Lumina AI combines the best of productivity tools with cutting-edge
            artificial intelligence to give you an unfair advantage.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl relative group overflow-hidden"
            >
              {/* Hover Glow */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500 rounded-full -mr-10 -mt-10`}
              />

              <div
                className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10`}
              >
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-white relative z-10">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed relative z-10 font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
