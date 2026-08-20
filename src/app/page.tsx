import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TopicsGrid } from "@/components/sections/TopicsGrid";
import { WhyThisMatters } from "@/components/sections/WhyThisMatters";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Stats } from "@/components/sections/Stats";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/lib/site";

const homeFAQs = [
  {
    question: "Does this site sell rigs, chemicals, or equipment?",
    answer:
      "No. We don't sell equipment and don't take referral compensation from any manufacturer or distributor. This is an independent reference guide, not a storefront.",
  },
  {
    question: "How much does it really cost to start a spray foam business?",
    answer:
      "It depends heavily on trailer vs. truck-mount, new vs. used equipment, and whether you're doing residential or commercial work — but real ranges exist, and we cover them honestly on the startup-costs topic page instead of a single rounded-up marketing number.",
  },
  {
    question: "Should I buy a trailer rig or a truck-mounted rig?",
    answer:
      "It depends on your service radius, job types, and budget — both are real, common configurations. The rig topic page covers the actual tradeoffs instead of pushing one answer.",
  },
  {
    question: "Where do spray foam contractors actually buy chemicals?",
    answer:
      "Mostly through regional distributors rather than directly from manufacturers like BASF or Huntsman/Icynene-Lapolla, especially at smaller volumes — covered in detail on the chemical suppliers topic page.",
  },
  {
    question: "What PPE do I actually need for spray foam application?",
    answer:
      "Respiratory protection appropriate to the specific job (supplied-air or a properly rated respirator for isocyanate exposure), not generic construction PPE — covered specifically on the PPE topic page.",
  },
  {
    question: "Is this an insurance sales site?",
    answer:
      "No. This is a practical equipment and business-startup reference. If you want to talk to Contractors Choice Agency about your specific situation, that's a separate, no-obligation conversation you can start anytime.",
  },
];

export default function HomePage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />

      <Hero
        title="Your Reference Guide to Starting and Running a Spray Foam Business"
        subtitle="Rigs, proportioners, real startup costs, chemical suppliers, PPE, and training — explained honestly, with nothing to sell you. Backed by Contractors Choice Agency's 20+ years of contractor experience."
        image="/images/hero-rig-lineup.jpg"
        imageAlt="Spray foam rig and equipment lineup for a contractor evaluating what to buy"
      />

      <TopicsGrid />
      <WhyThisMatters />
      <ProcessSteps />
      <Stats />
      <TrustSignals />

      <FAQ
        title="Starting a Spray Foam Business, Answered"
        subtitle="Real questions people ask before buying equipment."
        faqs={homeFAQs}
      />

      <CTA />
      <Footer />
    </main>
  );
}
