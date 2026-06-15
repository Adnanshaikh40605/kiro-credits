"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/Button";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-secondary px-8 py-16 text-center sm:px-16 lg:py-24"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">
              Ready to Grow Faster with AI?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Join businesses using Korvexa to automate customer engagement and
              accelerate growth.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="primary" size="lg">
                Start Free Trial
                <ArrowRight size={18} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/30"
              >
                <Play size={16} />
                Book Demo
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/50">
              Free 14-day trial · No credit card required · Setup in minutes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
