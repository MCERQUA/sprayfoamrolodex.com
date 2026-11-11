"use client";
import { ArrowRight, UserPlus } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { FadeIn } from "@/components/animations/FadeIn";

/**
 * Hero for the homepage-as-directory. The right-side artwork is a pure-CSS card-stack /
 * rotating-frame metaphor for the physical Rolodex Josh photographed (black frame + side
 * knobs, cream cards, blue A-Z tab) — not a photo, so it's labeled as illustrative chrome,
 * never real listing data.
 */
export function RolodexHero() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-rolodex-frame pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <p className="text-sm font-semibold text-rolodex-tab-foreground/70 uppercase tracking-wider mb-3">
            Industry Directory
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold leading-tight text-white">
            Spray Foam Professionals, In One Place
          </h1>
          <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-xl">
            A free, old-school contact directory for installers, crews, suppliers, and trainers.
            Post your contact info so people can find you &mdash; it takes about a minute.
          </p>
          <a
            href="#add-listing"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-rolodex-tab text-rolodex-tab-foreground font-semibold rounded-xl hover:bg-rolodex-tab/90 transition-all shadow-lg cursor-pointer"
          >
            <UserPlus className="w-4 h-4" />
            List Yourself Free
            <ArrowRight className="w-4 h-4" />
          </a>
        </FadeIn>

        <motion.div
          initial={prefersReduced ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", damping: 20, stiffness: 100 }}
          className="relative mx-auto w-full max-w-sm aspect-square"
          aria-hidden="true"
        >
          {/* Black rotating-frame base */}
          <div className="absolute inset-x-6 bottom-8 top-16 bg-black/80 rounded-[2.5rem] shadow-2xl" />
          {/* Side knobs */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/90 border-4 border-black/60 shadow-lg" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/90 border-4 border-black/60 shadow-lg" />

          {/* Fanned card stack */}
          {[
            { rot: -8, y: 14, z: 1 },
            { rot: -3, y: 8, z: 2 },
            { rot: 4, y: 2, z: 3 },
          ].map((c, i) => (
            <div
              key={i}
              className="absolute inset-x-12 top-6 h-48 bg-rolodex-card rounded-lg shadow-xl border border-black/10"
              style={{ transform: `rotate(${c.rot}deg) translateY(${c.y}px)`, zIndex: c.z }}
            />
          ))}

          {/* Top card with blue A-Z tab + sample entry */}
          <div className="absolute inset-x-12 top-6 h-48 bg-rolodex-card rounded-lg shadow-2xl border border-black/10 z-10 p-5">
            <div className="absolute -top-3 left-5 px-3 py-1 bg-rolodex-tab text-rolodex-tab-foreground text-xs font-bold rounded-t-md">
              A
            </div>
            <p className="font-script text-2xl text-foreground/90">Your Name</p>
            <p className="text-xs text-secondary/80 font-medium mt-0.5">Your Business</p>
            <p className="text-xs text-muted-foreground mt-3">(555) 555-5555</p>
            <p className="text-xs text-muted-foreground">you@email.com</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
