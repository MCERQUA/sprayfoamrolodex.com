import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/sections/CTA";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { site } from "@/lib/site";
import { Users, Tag, BadgeCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: `${site.businessName} is a free, old-school contact directory for the spray foam insulation industry.`,
};

const values = [
  {
    icon: Tag,
    title: "Free, No Catch",
    text: "Listing yourself costs nothing and never will. No paid placement, no featured-listing upsell.",
  },
  {
    icon: Users,
    title: "Open to the Whole Industry",
    text: "Installers, crews, equipment and chemical suppliers, and trainers &mdash; anyone in the spray foam trade can list themselves.",
  },
  {
    icon: BadgeCheck,
    title: "Your Info, Your Way",
    text: "Add your logo and any certifications or licenses you hold so people know who they're contacting before they call.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar businessName={site.businessName} />

      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-background">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <p className="text-sm font-semibold text-rolodex-tab uppercase tracking-wider mb-3">About</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              A Basic Rolodex for the Spray Foam Industry
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              {site.businessName} is exactly what it sounds like &mdash; an old-school contact
              directory, like the card file on a desk, for people in the spray foam insulation
              trade. Add your name or business and let other professionals and crews find you.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">How It Works</h2>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="p-8 rounded-xl bg-card border border-border h-full">
                  <div className="w-12 h-12 rounded-lg bg-rolodex-tab/10 flex items-center justify-center mb-5">
                    <value.icon className="w-6 h-6 text-rolodex-tab" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: value.text }} />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
