"use client";
import { ArrowRight, UserPlus } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { MagneticHover } from "@/components/animations/MagneticHover";
import Link from "next/link";

interface CTAProps {
  title?: string;
  description?: string;
  primaryCTA?: string;
  primaryHref?: string;
}

export function CTA({
  title = "Post Your Contact Info So People Can Find You",
  description = "Free listing, takes about a minute. Add your name or business to the directory.",
  primaryCTA = "Add Your Listing",
  primaryHref = "/#add-listing",
}: CTAProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-rolodex-frame">
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">{title}</h2>
          <p className="mt-4 text-lg text-white/85 max-w-xl mx-auto">{description}</p>

          <div className="mt-8 flex items-center justify-center">
            <MagneticHover>
              <Link
                href={primaryHref}
                className="group flex items-center gap-2 px-8 py-4 bg-rolodex-tab text-rolodex-tab-foreground font-semibold rounded-xl hover:bg-rolodex-tab/90 transition-all shadow-lg cursor-pointer"
              >
                <UserPlus className="w-4 h-4" />
                {primaryCTA}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticHover>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
