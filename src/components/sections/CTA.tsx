"use client";
import { ArrowRight, Phone as PhoneIcon } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { MagneticHover } from "@/components/animations/MagneticHover";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

interface CTAProps {
  title?: string;
  description?: string;
  primaryCTA?: string;
  primaryHref?: string;
}

export function CTA({
  title = "Ready to Talk Through Your Plans?",
  description = "Whether you're just exploring or ready to buy a rig, talk to Contractors Choice Agency — free, no obligation, and grounded in real contractor experience.",
  primaryCTA = "Talk to CCA",
  primaryHref = "/get-connected",
}: CTAProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/cta-band.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-ink/85" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">{title}</h2>
          <p className="mt-4 text-lg text-white/85 max-w-xl mx-auto">{description}</p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticHover>
              <Link
                href={primaryHref}
                className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-lg cursor-pointer"
              >
                <PhoneIcon className="w-4 h-4" />
                {primaryCTA}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticHover>

            <a href={`tel:${site.phoneDigits}`} className="text-white/90 hover:text-white transition-colors font-medium cursor-pointer">
              Or call {site.phone}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
