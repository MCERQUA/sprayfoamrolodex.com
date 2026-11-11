import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";

const companyLinks = [
  { label: "Directory", href: "/" },
  { label: "About", href: "/about" },
  { label: "Add Your Listing", href: "/#add-listing" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <Link href="/" className="text-xl font-heading font-bold text-white">
              {site.businessName}
            </Link>
            <p className="mt-4 text-sm text-ink-foreground/70 leading-relaxed max-w-xs">
              A free, old-school contact directory for the spray foam industry — installers,
              crews, suppliers, and trainers. Post your info and let people find you.
            </p>
            <div className="mt-6 space-y-3">
              <a href={`tel:${site.phoneDigits}`} className="flex items-center gap-2 text-sm text-ink-foreground/80 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-accent" />
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-sm text-ink-foreground/80 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-accent" />
                {site.email}
              </a>
              <p className="flex items-start gap-2 text-sm text-ink-foreground/80">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                {site.addressFull}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ink-foreground/70 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ink-foreground/70 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-foreground/60">
            &copy; {new Date().getFullYear()} {site.businessName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
