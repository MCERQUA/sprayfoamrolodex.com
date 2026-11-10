"use client";
import { useMemo, useState } from "react";
import { Phone, Mail, Globe, MapPin, Wrench } from "lucide-react";
import type { DirectoryListing } from "@/lib/directory";

interface DirectoryGridProps {
  listings: DirectoryListing[];
  specialties: string[];
  states: string[];
}

export function DirectoryGrid({ listings, specialties, states }: DirectoryGridProps) {
  const [query, setQuery] = useState("");
  const [specialty, setSpecialty] = useState("all");
  const [state, setState] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return listings.filter((l) => {
      if (specialty !== "all" && l.specialty !== specialty) return false;
      if (state !== "all" && l.state !== state) return false;
      if (!q) return true;
      const hay = `${l.name} ${l.company ?? ""} ${l.city} ${l.state} ${l.specialty}`.toLowerCase();
      return hay.includes(q);
    });
  }, [listings, query, specialty, state]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, company, or city..."
          className="flex-grow px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm"
        />
        <select
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          className="px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
        >
          <option value="all">All Specialties</option>
          {specialties.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
        >
          <option value="all">All States</option>
          {states.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 px-6 bg-card border border-dashed border-border rounded-xl">
          {listings.length === 0 ? (
            <>
              <p className="text-lg font-heading font-semibold">No listings yet &mdash; be the first.</p>
              <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                This directory is brand new. Add your name or business below and you&apos;ll be the
                first entry other spray foam professionals see.
              </p>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">No listings match your search. Try clearing a filter.</p>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((l, i) => (
            <article key={`${l.name}-${l.listed_at}-${i}`} className="rounded-xl bg-card border border-border p-6 flex flex-col gap-3 hover:border-primary/40 transition-colors">
              <div>
                <h3 className="font-heading font-semibold text-lg">{l.name}</h3>
                {l.company && <p className="text-sm text-muted-foreground">{l.company}</p>}
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wide">
                <Wrench className="w-3.5 h-3.5" />
                {l.specialty}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                {l.city}, {l.state}
              </div>
              <div className="mt-auto pt-3 border-t border-border flex flex-col gap-1.5">
                {l.phone && (
                  <a href={`tel:${l.phone.replace(/\D/g, "")}`} className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                    <Phone className="w-3.5 h-3.5 text-primary" /> {l.phone}
                  </a>
                )}
                {l.email && (
                  <a href={`mailto:${l.email}`} className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                    <Mail className="w-3.5 h-3.5 text-primary" /> {l.email}
                  </a>
                )}
                {l.website && (
                  <a href={l.website} target="_blank" rel="noopener noreferrer nofollow" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                    <Globe className="w-3.5 h-3.5 text-primary" /> {l.website.replace(/^https?:\/\//, "")}
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
