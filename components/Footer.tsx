import { Globe, Mail, MessageCircle, Share2 } from "lucide-react";

const footerLinks = {
  Product: ["Features", "AI Agents", "Automation", "Campaigns", "CRM", "Analytics", "Pricing"],
  Company: ["About", "Careers", "Blog", "Press", "Partners"],
  Resources: ["Documentation", "Help Center", "API Reference", "Community", "Status"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
};

const socialLinks = [
  { icon: Share2, href: "#", label: "Social" },
  { icon: Globe, href: "#", label: "Website" },
  { icon: MessageCircle, href: "#", label: "Community" },
  { icon: Mail, href: "#", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-canvas pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
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
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-hairline text-ink-mute transition-colors hover:border-ink-mute-2 hover:text-ink"
                >
                  <social.icon size={16} />
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

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-8 sm:flex-row">
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
