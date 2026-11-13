"use client";
import { useEffect, useRef, useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA",
  "ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK",
  "OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY",
];

const SPECIALTIES = [
  "Open-Cell Insulation",
  "Closed-Cell Insulation",
  "Roofing (SPF)",
  "Equipment / Rig Sales",
  "Chemical Supplier / Distributor",
  "Training / Certification",
  "Consulting",
  "Other",
];

export function DirectoryListingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const srcRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const p = new URLSearchParams(window.location.search);
      let src = p.get("utm_source") || p.get("ref") || "";
      if (!src && document.referrer) {
        try {
          src = new URL(document.referrer).hostname;
        } catch {
          src = document.referrer;
        }
      }
      if (srcRef.current) srcRef.current.value = src || "direct";
      if (urlRef.current) urlRef.current.value = window.location.href;
    } catch {
      /* noop */
    }
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      // multipart/form-data (not urlencoded) — required for the logo file field.
      // Letting fetch set its own Content-Type gives it the multipart boundary.
      const res = await fetch("/__forms.html", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to submit your listing. Please try again.");
      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div id="add-listing" className="rounded-xl bg-card border border-border p-10 text-center">
        <FadeIn>
          <CheckCircle className="w-14 h-14 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-heading font-bold">You&apos;re In the Queue</h3>
          <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">
            Thanks for adding yourself to the directory. New listings are reviewed and published
            in batches, so yours will appear here soon &mdash; no further action needed.
          </p>
        </FadeIn>
      </div>
    );
  }

  return (
    <div id="add-listing" className="rounded-xl bg-card border border-border p-6 md:p-10">
      <h3 className="text-2xl font-heading font-bold">List Yourself &mdash; Free</h3>
      <p className="mt-2 text-sm text-muted-foreground max-w-xl">
        Add yourself or your business to the directory at no cost. Give other spray foam
        professionals a way to find and contact you.
      </p>

      <form
        name="directory-listing"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="mt-8 space-y-6"
      >
        <input type="hidden" name="form-name" value="directory-listing" />
        <p className="hidden">
          <label>
            Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </p>
        <input type="hidden" name="traffic_source" id="__aeo_src_directory" ref={srcRef} defaultValue="" />
        <input type="hidden" name="landing_url" id="__aeo_url_directory" ref={urlRef} defaultValue="" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="dl-name" className="block text-sm font-medium mb-2">Your Name</label>
            <input id="dl-name" name="name" type="text" required placeholder="Jane Smith"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
          </div>
          <div>
            <label htmlFor="dl-company" className="block text-sm font-medium mb-2">Company (optional)</label>
            <input id="dl-company" name="company" type="text" placeholder="Smith Spray Foam LLC"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
          </div>
        </div>

        <div>
          <label htmlFor="dl-state" className="block text-sm font-medium mb-2">State</label>
          <select id="dl-state" name="state" required defaultValue=""
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
            <option value="" disabled>Select...</option>
            {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor="dl-specialty" className="block text-sm font-medium mb-2">Specialty</label>
          <select id="dl-specialty" name="specialty" required defaultValue=""
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
            <option value="" disabled>Select...</option>
            {SPECIALTIES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor="dl-website" className="block text-sm font-medium mb-2">Website (optional)</label>
          <input id="dl-website" name="website" type="url" placeholder="https://yourbusiness.com"
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
        </div>

        <div>
          <label htmlFor="dl-credentials" className="block text-sm font-medium mb-2">
            Certifications / Licenses (optional)
          </label>
          <input id="dl-credentials" name="credentials" type="text"
            placeholder="e.g. SPFA Certified, Licensed Contractor"
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
          <p className="mt-1.5 text-xs text-muted-foreground">
            Trade certifications or licenses only &mdash; not coaching, training programs, or courses.
          </p>
        </div>

        <div>
          <label htmlFor="dl-logo" className="block text-sm font-medium mb-2">Business Logo (optional)</label>
          <input id="dl-logo" name="logo" type="file" accept="image/*"
            className="w-full text-sm file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 file:cursor-pointer cursor-pointer bg-background border border-border rounded-lg px-4 py-2.5" />
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
        >
          {isSubmitting ? "Submitting..." : (<>Add Me to the Directory <Send className="w-4 h-4" /></>)}
        </button>
      </form>
    </div>
  );
}
