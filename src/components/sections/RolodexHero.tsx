"use client";
import { ArrowRight, UserPlus } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { FadeIn } from "@/components/animations/FadeIn";
import { LETTER_PAIR_GROUPS } from "@/lib/directory";

/**
 * Hero for the homepage-as-directory. The horizontal drum illustration is a pure-CSS
 * reconstruction of the physical Rolodex Josh photographed (task 2026-11-13-482 reference
 * image): paired-letter blue tabs (A-B, C-D, ... W-Z) along the top of a lined-paper roller,
 * chrome cylindrical end-caps with a center knob, and dark gunmetal V-shaped feet.
 * Not a photo, so it's illustrative chrome, never real listing data.
 */
export function RolodexHero() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-rolodex-frame pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn className="max-w-2xl">
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

        {/* Horizontal drum illustration — plain flex centering, no transforms (a
            transform-based vertical offset here previously created a stacking context
            that hid the drum behind the text block above it). */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring", damping: 20, stiffness: 100 }}
          className="relative mt-16 md:mt-20 mx-auto w-full max-w-5xl overflow-x-auto"
          aria-hidden="true"
        >
          <div className="relative min-w-[640px] flex items-center pb-10 px-1">
            {/* Left chrome end-cap + knob + gunmetal foot */}
            <div className="relative shrink-0 w-16 h-16 z-20">
              <div className="absolute inset-0 rounded-full border-4 border-rolodex-frame shadow-xl" style={{ background: "radial-gradient(circle at 35% 30%, #fff 0%, hsl(var(--rolodex-chrome)) 45%, hsl(var(--rolodex-frame)) 100%)" }}>
                <span className="absolute inset-0 m-auto w-5 h-5 rounded-full bg-rolodex-frame/80 border-2 border-white/40" />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-14 h-10" style={{ background: "linear-gradient(180deg, hsl(var(--rolodex-chrome)) 0%, hsl(var(--rolodex-frame)) 70%)", border: "1px solid hsl(var(--rolodex-chrome) / 0.4)", borderTop: "none", clipPath: "polygon(10% 100%, 50% 10%, 90% 100%)" }} />
            </div>

            {/* Drum body — lined-paper roller */}
            <div
              className="relative flex-1 h-24 -mx-2 rounded-full border border-black/10 shadow-2xl overflow-hidden bg-rolodex-card z-10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, hsl(var(--border)/0.7) 0 1px, transparent 1px 8px)",
              }}
            >
              {/* Paired-letter blue tabs along the top */}
              <div className="absolute inset-x-0 top-0 flex h-8">
                {LETTER_PAIR_GROUPS.map((g) => (
                  <div
                    key={g.label}
                    className="flex-1 flex items-center justify-center bg-rolodex-tab text-rolodex-tab-foreground text-[0.65rem] font-bold border-r border-white/20 last:border-r-0"
                  >
                    {g.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Right chrome end-cap + knob + gunmetal foot */}
            <div className="relative shrink-0 w-16 h-16 z-20">
              <div className="absolute inset-0 rounded-full border-4 border-rolodex-frame shadow-xl" style={{ background: "radial-gradient(circle at 65% 30%, #fff 0%, hsl(var(--rolodex-chrome)) 45%, hsl(var(--rolodex-frame)) 100%)" }}>
                <span className="absolute inset-0 m-auto w-5 h-5 rounded-full bg-rolodex-frame/80 border-2 border-white/40" />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-14 h-10" style={{ background: "linear-gradient(180deg, hsl(var(--rolodex-chrome)) 0%, hsl(var(--rolodex-frame)) 70%)", border: "1px solid hsl(var(--rolodex-chrome) / 0.4)", borderTop: "none", clipPath: "polygon(10% 100%, 50% 10%, 90% 100%)" }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
