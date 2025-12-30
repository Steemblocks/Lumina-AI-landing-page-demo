"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for individuals exploring AI.",
    features: [
      "Access to basic AI models",
      "5 workflows per month",
      "Community support",
      "1GB storage",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "For professionals requiring power.",
    features: [
      "Advanced AI models (GPT-4)",
      "Unlimited workflows",
      "Priority email support",
      "100GB storage",
      "API Access",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Scalable solutions for large teams.",
    features: [
      "Custom AI model fine-tuning",
      "Dedicated account manager",
      "SSO & Advanced Security",
      "Unlimited storage",
      "SLA Guarantee",
    ],
    highlight: false,
  },
];

const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="section-spacing relative z-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base text-text-secondary mb-8">
            Choose the perfect plan for your needs. No hidden fees.
          </p>

          <div className="inline-flex items-center p-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm relative">
            <button
              onClick={() => setAnnual(false)}
              className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all relative z-10 ${
                !annual ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all relative z-10 ${
                annual ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              Yearly
            </button>

            {/* Sliding Background */}
            <div
              className={`absolute top-1 bottom-1 w-[50%] bg-primary rounded-full transition-all duration-300 ${
                annual ? "left-[49%]" : "left-1"
              }`}
            />
          </div>
          {annual && (
            <p className="text-sm text-accent mt-3 font-semibold tracking-wide">
              SAVE 20% WITH YEARLY BILLING
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col p-8 pt-10 rounded-2xl transition-all duration-300 ${
                plan.highlight
                  ? "bg-[#0f0a24] border-2 border-primary/60 shadow-2xl shadow-primary/20 scale-105 z-10"
                  : "glass-card bg-opacity-40 hover:bg-opacity-60"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-lg z-20">
                  <Sparkles size={12} /> Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {plan.name}
                </h3>
                <p className="text-text-secondary text-sm mb-6 h-10">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white tracking-tight">
                    {plan.price === "Custom"
                      ? "Custom"
                      : annual && plan.price !== "$0"
                      ? "$" + (parseInt(plan.price.slice(1)) * 0.8).toFixed(0)
                      : plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-sm text-text-secondary font-medium">
                      /mo
                    </span>
                  )}
                </div>
              </div>

              <div className="h-px bg-white/10 mb-8" />

              <ul className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.highlight
                          ? "bg-primary text-white"
                          : "bg-white/10 text-white/70"
                      }`}
                    >
                      <Check size={12} />
                    </div>
                    <span className="text-sm text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.highlight
                    ? "bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/25"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                }`}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
