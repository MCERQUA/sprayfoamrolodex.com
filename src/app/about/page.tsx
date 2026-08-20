import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/sections/CTA";
import { Stats } from "@/components/sections/Stats";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { site } from "@/lib/site";
import { BookOpenCheck, ShieldCheck, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: `${site.businessName} is a practical buyer's-guide resource for starting or scaling a spray foam business, backed by Contractors Choice Agency.`,
};

const values = [
  {
    icon: DollarSign,
    title: "Real Numbers, Not Marketing Ranges",
    text: "Startup and equipment costs are covered as the real, itemized ranges they actually are &mdash; not a single flattering number.",
  },
  {
    icon: BookOpenCheck,
    title: "Tradeoffs, Not Brand Endorsements",
    text: "We explain what actually separates equipment classes and configurations &mdash; we don't sell equipment or take referral kickbacks from any manufacturer.",
  },
  {
    icon: ShieldCheck,
    title: "Backed by Former-Contractor Experience",
    text: "Written with 20+ years of Contractors Choice Agency's contractor-side experience behind it, not an equipment vendor's marketing department.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />

      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">About Us</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              A Reference Guide, Not a Sales Catalog
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Most content about starting a spray foam business comes from an equipment
              manufacturer or a distributor with an obvious incentive to point you toward their own
              product line. {site.businessName} exists to cover the real tradeoffs &mdash; rigs,
              proportioners, real startup costs, chemical suppliers, PPE, and training &mdash;
              honestly, without a specific brand to sell you.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              We&apos;re backed by Contractors Choice Agency, bringing over 20 years of
              former-contractor experience to every page. When you&apos;re ready to talk through
              your specific plans, you can connect with a real person at CCA &mdash; free, with no
              obligation.
            </p>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/about-credibility.jpg" alt={`${site.businessName} reference resource`} fill className="object-cover" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">How We Write</h2>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="p-8 rounded-xl bg-card border border-border h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: value.text }} />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <Stats />

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">Backed by a Nationwide Contractor Network</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Contractors Choice Agency works with spray foam contractors across the country today
              &mdash; the people you&apos;ll talk to have real experience with what it takes to
              start and grow this kind of business.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
