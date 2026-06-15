import { Phone, MessageCircle } from "lucide-react";
import { CALL_URL, CONTACT_PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/contact";

const footerLinks = {
  Product: ["Features", "AI Agents", "Automation", "Campaigns", "CRM", "Analytics", "Pricing"],
  Company: ["About", "Careers", "Blog", "Press", "Partners"],
  Resources: ["Documentation", "Help Center", "API Reference", "Community", "Status"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
};

const contactLinks = [
  { icon: MessageCircle, href: WHATSAPP_URL, label: "WhatsApp" },
  { icon: Phone, href: CALL_URL, label: "Call" },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-canvas pt-12 pb-8 sm:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:grid-cols-6">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-primary">
                <span className="text-sm font-bold text-white">K</span>
              </div>
              <span className="text-lg font-semibold tracking-tight text-ink">Korvexa</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-mute">
              The AI operating system for customer growth. Automate conversations,
              qualify leads, and scale engagement.
            </p>
            <a
              href={CALL_URL}
              className="mt-4 inline-block text-sm font-medium text-ink transition-colors hover:text-primary"
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
            <div className="mt-4 flex gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "WhatsApp" ? "_blank" : undefined}
                  rel={link.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-hairline text-ink-mute transition-colors hover:border-primary/30 hover:text-primary"
                >
                  <link.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-ink">{category}</h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-ink-mute transition-colors hover:text-ink"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-8 text-center sm:mt-16 sm:flex-row sm:text-left">
          <p className="text-xs text-ink-mute">
            &copy; {new Date().getFullYear()} Korvexa. All rights reserved.
          </p>
          <p className="text-xs text-ink-mute">
            Built for businesses that grow with AI.
          </p>
        </div>
      </div>
    </footer>
  );
}
