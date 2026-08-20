import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const steps = [
  {
    number: "01",
    title: "Learn What You're Actually Choosing Between",
    text: "Read the rig, proportioner, and supplier topics before you talk to any single equipment vendor.",
  },
  {
    number: "02",
    title: "Get a Real Cost Picture",
    text: "Understand what a realistic startup budget actually looks like, itemized honestly, not a marketing lowball.",
  },
  {
    number: "03",
    title: "Know What Training and PPE You Need",
    text: "Understand the real safety-equipment and certification path before your first job, not after a close call.",
  },
  {
    number: "04",
    title: "Talk to CCA When You're Ready",
    text: "Tell us where you are in the process and we'll connect you with the right resources at Contractors Choice Agency.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">How to Use This Resource</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">From Research to Your First Job</h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="relative">
                <span className="text-5xl font-heading font-bold text-primary/20">{step.number}</span>
                <h3 className="mt-3 text-lg font-heading font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: step.text }} />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
