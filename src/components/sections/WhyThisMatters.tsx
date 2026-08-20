import { BookOpen, DollarSign, Wrench, Users } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const points = [
  {
    icon: DollarSign,
    title: "Real Numbers, Not Vague Ranges",
    text: "Rig cost, chemical cost, PPE, training &mdash; itemized as honestly as the real variables allow, not a single flattering &ldquo;starting at&rdquo; figure.",
  },
  {
    icon: Wrench,
    title: "Equipment Tradeoffs, Not Brand Pitches",
    text: "We explain what actually separates a proportioner class or a rig configuration &mdash; not which brand to buy.",
  },
  {
    icon: BookOpen,
    title: "Written for Someone Actually Starting Out",
    text: "Not a manufacturer spec sheet and not generic small-business advice &mdash; specific to what a new or growing spray foam operation needs to know.",
  },
  {
    icon: Users,
    title: "Backed by Former-Contractor Experience",
    text: "Written with 20+ years of Contractors Choice Agency's contractor-side experience behind it, not a single equipment vendor's marketing department.",
  },
];

export function WhyThisMatters() {
  return (
    <section className="py-24 md:py-32 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why This Resource Exists</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">A Reference, Not a Sales Pitch</h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {points.map((point) => (
            <StaggerItem key={point.title}>
              <div className="p-8 rounded-xl bg-card border border-border h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold">{point.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: point.text }} />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
