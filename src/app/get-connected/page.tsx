import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ConnectForm } from "@/components/forms/ConnectForm";
import { TrustBar } from "@/components/shared/TrustBar";
import { FadeIn } from "@/components/animations/FadeIn";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Talk to CCA",
  description: "Connect with Contractors Choice Agency about starting or scaling your spray foam business — free, no obligation.",
};

const steps = [
  "Tell us where you are — thinking about starting, just starting out, or scaling up.",
  "A CCA team member follows up within one business day to talk through your specific situation.",
  "No pressure, no obligation — just a real conversation grounded in contractor-side experience.",
];

export default function GetConnectedPage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />

      <section className="pt-36 pb-10 md:pt-44 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Free, No-Obligation</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold">Talk to CCA</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Now that you&apos;ve read the real numbers and tradeoffs, tell us where you are and
              we&apos;ll help you think through the next step.
            </p>
          </FadeIn>
        </div>
        <TrustBar />
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <FadeIn direction="left">
              <h2 className="text-2xl font-heading font-bold">What Happens Next</h2>
              <ol className="mt-6 space-y-6">
                {steps.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-heading font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-muted-foreground leading-relaxed pt-1">{step}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-sm text-muted-foreground">
                Prefer to skip the form? Call{" "}
                <a href={`tel:${site.phoneDigits}`} className="text-primary font-semibold">{site.phone}</a>{" "}
                directly.
              </p>
            </FadeIn>
          </div>
          <div className="lg:col-span-3">
            <FadeIn direction="right" delay={0.1}>
              <ConnectForm />
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
