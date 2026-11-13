"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { Globe, MapPin, BadgeCheck } from "lucide-react";
import { getLetterPair, LETTER_PAIR_GROUPS, type DirectoryListing } from "@/lib/directory";

interface DirectoryGridProps {
  listings: DirectoryListing[];
}

const TAB_LABELS = [...LETTER_PAIR_GROUPS.map((g) => g.label), "#"];

export function DirectoryGrid({ listings }: DirectoryGridProps) {
  const [activeLetter, setActiveLetter] = useState<string>("ALL");

  const filtered = useMemo(() => {
    if (activeLetter === "ALL") return listings;
    return listings.filter((l) => getLetterPair(l) === activeLetter);
  }, [listings, activeLetter]);

  return (
    <div>
      {/* Paired-letter tabs on a drum body — matching the physical Rolodex reference photo
          (task 2026-11-13-482): bold blue rounded tabs sitting on a horizontal roller with
          chrome end-caps, not a flat single-letter row. */}
      <div className="mb-10 overflow-x-auto pb-2">
        <div className="relative min-w-max rounded-full bg-rolodex-card border border-border/60 shadow-inner px-3 pt-3 pb-5 mx-2"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, hsl(var(--border)/0.6) 0 1px, transparent 1px 7px)",
          }}
        >
          {/* Chrome end-caps with center knob, mirroring the reference's hardware */}
          <span className="hidden sm:block absolute -left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-rolodex-frame/70 shadow-md" style={{ background: "radial-gradient(circle at 35% 30%, #fff 0%, hsl(var(--rolodex-chrome)) 45%, hsl(var(--rolodex-frame)) 100%)" }} aria-hidden="true" />
          <span className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-rolodex-frame/70 shadow-md" style={{ background: "radial-gradient(circle at 65% 30%, #fff 0%, hsl(var(--rolodex-chrome)) 45%, hsl(var(--rolodex-frame)) 100%)" }} aria-hidden="true" />

          <div className="flex flex-wrap gap-1 justify-center sm:justify-start relative z-10">
            <button
              onClick={() => setActiveLetter("ALL")}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer shadow-sm ${
                activeLetter === "ALL"
                  ? "bg-rolodex-tab text-rolodex-tab-foreground ring-2 ring-rolodex-frame/40"
                  : "bg-rolodex-tab text-rolodex-tab-foreground hover:bg-rolodex-tab/90"
              }`}
            >
              ALL
            </button>
            {TAB_LABELS.map((label) => {
              // Reference photo shows every tab bold blue regardless of how many cards
              // are filed under it - a sparsely-populated early directory shouldn't look
              // "broken" with most tabs grayed out. All tabs stay clickable; an empty
              // group just shows the existing "No listings start with that letter yet" state.
              return (
                <button
                  key={label}
                  onClick={() => setActiveLetter(label)}
                  className={`px-3 py-2 text-xs font-bold rounded-lg transition-colors shadow-sm cursor-pointer bg-rolodex-tab text-rolodex-tab-foreground hover:bg-rolodex-tab/90 ${
                    activeLetter === label ? "ring-2 ring-rolodex-frame/40" : ""
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 px-6 bg-rolodex-card border border-dashed border-border rounded-xl">
          {listings.length === 0 ? (
            <>
              <p className="text-lg font-heading font-semibold">No listings yet &mdash; be the first.</p>
              <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                This directory is brand new. Add your name or business below and you&apos;ll be the
                first card in the file.
              </p>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">No listings start with that letter yet.</p>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((l, i) => (
            <article
              key={`${l.name}-${l.listed_at}-${i}`}
              className="relative rounded-lg bg-rolodex-card border border-border/60 shadow-md p-6 flex flex-col gap-2.5 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(transparent, transparent 27px, hsl(var(--border)/0.5) 28px)",
              }}
            >
              {/* Top punch-holes, like a real index card */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 flex gap-8">
                <span className="w-2 h-2 rounded-full bg-background border border-border/60" />
                <span className="w-2 h-2 rounded-full bg-background border border-border/60" />
              </div>

              <div className="flex items-start gap-3 pt-3">
                {l.logoUrl ? (
                  <Image
                    src={l.logoUrl}
                    alt={`${l.company || l.name} logo`}
                    width={44}
                    height={44}
                    className="w-11 h-11 rounded-md object-cover border border-border/60 shrink-0 bg-white"
                    unoptimized
                  />
                ) : null}
                <div>
                  <h3 className="font-script text-2xl leading-tight text-foreground">{l.name}</h3>
                  {l.company && <p className="text-sm text-secondary font-medium">{l.company}</p>}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-rolodex-tab uppercase tracking-wide">
                {l.specialty}
              </div>

              {l.credentials && (
                <div className="flex items-start gap-1.5 text-xs text-muted-foreground">
                  <BadgeCheck className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  {l.credentials}
                </div>
              )}

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                {l.state}
              </div>

              <div className="mt-auto pt-3 border-t border-border/60 flex flex-col gap-1.5">
                {l.website && (
                  <a href={l.website} target="_blank" rel="noopener noreferrer nofollow" className="flex items-center gap-2 text-sm hover:text-rolodex-tab transition-colors">
                    <Globe className="w-3.5 h-3.5 text-rolodex-tab" /> {l.website.replace(/^https?:\/\//, "")}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
