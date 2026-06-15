"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "AI Agents", href: "#ai-agents" },
  { label: "Automation", href: "#automation" },
  { label: "Campaigns", href: "#campaigns" },
  { label: "CRM", href: "#crm" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-hairline bg-canvas/90 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:h-[72px] lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-primary">
            <span className="text-sm font-bold text-white">K</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-ink">Korvexa</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-[6px] px-3 py-2 text-sm text-ink-mute transition-colors hover:bg-canvas-soft hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="md">
            Login
          </Button>
          <Button variant="primary" size="md">
            Start Free Trial
          </Button>
        </div>

        <button
          className="rounded-[6px] p-2 text-ink lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-hairline bg-canvas lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-[6px] px-3 py-2.5 text-sm text-ink-mute hover:bg-canvas-soft hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-hairline pt-4">
                <Button variant="ghost" size="md" className="w-full">
                  Login
                </Button>
                <Button variant="primary" size="md" className="w-full">
                  Start Free Trial
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
