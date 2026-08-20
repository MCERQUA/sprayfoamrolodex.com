import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.businessName}.`,
};

export default function PrivacyPage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />
      <section className="pt-36 pb-24 md:pt-44">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-heading font-bold mb-8">Privacy Policy</h1>
          <div className="post-prose">
            <p>Last updated: 2026-08-20</p>
            <h2>Information We Collect</h2>
            <p>
              When you submit a contact or Talk to CCA form on {site.businessName}, we collect the
              information you provide &mdash; including your name, phone number, email address,
              business stage, and any notes you include. We also record the referring source and
              landing page of your visit for internal marketing attribution.
            </p>
            <h2>How We Use Your Information</h2>
            <p>
              We use the information you submit to respond to your inquiry and, if requested,
              connect you with a Contractors Choice Agency team member. We do not sell your
              personal information to third parties.
            </p>
            <h2>Contact</h2>
            <p>Questions about this policy can be directed to {site.email} or {site.phone}.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
