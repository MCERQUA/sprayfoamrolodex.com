"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { Phone, Mail, Globe, MapPin, BadgeCheck } from "lucide-react";
import { getLetter, type DirectoryListing } from "@/lib/directory";

interface DirectoryGridProps {
  listings: DirectoryListing[];
}

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split("");

export function DirectoryGrid({ listings }: DirectoryGridProps) {
  const [activeLetter, setActiveLetter] = useState<string>("ALL");

  const lettersInUse = useMemo(() => new Set(listings.map(getLetter)), [listings]);

  const filtered = useMemo(() => {
    if (activeLetter === "ALL") return listings;
    return listings.filter((l) => getLetter(l) === activeLetter);
  }, [listings, activeLetter]);

  return (
    <div>
      {/* Blue A-Z tab dividers — the Rolodex's own browsing mechanism, not a generic filter UI */}
      <div className="flex flex-wrap gap-1 mb-10 justify-center sm:justify-start">
        <button
          onClick={() => setActiveLetter("ALL")}
          className={`px-3 py-2 text-xs font-bold rounded-t-md transition-colors cursor-pointer ${
            activeLetter === "ALL"
              ? "bg-rolodex-tab text-rolodex-tab-foreground"
              : "bg-rolodex-tab/20 text-rolodex-tab hover:bg-rolodex-tab/30"
          }`}
        >
          ALL
        </button>
        {ALPHABET.map((letter) => {
          const inUse = lettersInUse.has(letter);
          return (
            <button
              key={letter}
              disabled={!inUse}
              onClick={() => setActiveLetter(letter)}
              className={`w-8 py-2 text-xs font-bold rounded-t-md transition-colors ${
                activeLetter === letter
                  ? "bg-rolodex-tab text-rolodex-tab-foreground cursor-pointer"
                  : inUse
                  ? "bg-rolodex-tab/20 text-rolodex-tab hover:bg-rolodex-tab/30 cursor-pointer"
                  : "bg-muted text-muted-foreground/40 cursor-not-allowed"
              }`}
            >
              {letter}
            </button>
          );
        })}
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
                {l.city}, {l.state}
              </div>

              <div className="mt-auto pt-3 border-t border-border/60 flex flex-col gap-1.5">
                {l.phone && (
                  <a href={`tel:${l.phone.replace(/\D/g, "")}`} className="flex items-center gap-2 text-sm hover:text-rolodex-tab transition-colors">
                    <Phone className="w-3.5 h-3.5 text-rolodex-tab" /> {l.phone}
                  </a>
                )}
                {l.email && (
                  <a href={`mailto:${l.email}`} className="flex items-center gap-2 text-sm hover:text-rolodex-tab transition-colors">
                    <Mail className="w-3.5 h-3.5 text-rolodex-tab" /> {l.email}
                  </a>
                )}
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
