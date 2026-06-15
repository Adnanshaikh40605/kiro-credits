"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/Button";
import { WHATSAPP_URL } from "@/lib/contact";

export function FinalCTA() {
  return (
    <section className="py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-xl bg-secondary px-5 py-12 text-center sm:rounded-2xl sm:px-8 sm:py-16 md:px-16 lg:py-24"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Ready to Grow Faster with AI?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-white/70 sm:mt-4 sm:text-lg">
              Join businesses using Korvexa to automate customer engagement and
              accelerate growth.
            </p>
            <div className="mx-auto mt-8 flex w-full max-w-sm flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Start Free Trial
                <ArrowRight size={18} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                href={WHATSAPP_URL}
                className="w-full border-white/20 bg-transparent text-white hover:border-white/30 hover:bg-white/10 sm:w-auto"
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
