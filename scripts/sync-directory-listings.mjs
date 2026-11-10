#!/usr/bin/env node
// Pulls directory-listing submissions for sprayfoamrolodex.com from the leads API and
// regenerates src/content/directory-listings.json. Run this, then commit + push to
// republish new self-listings on the live /directory page (static export has no
// server runtime, so this file IS the data source baked into the build).
//
// Usage: node scripts/sync-directory-listings.mjs
// Needs network access to the leads API host (same one DataForSEO/zapier proxy through
// on Josh's Mac: http://100.99.44.88:6350). Not required for a normal `pnpm build`.

const LEADS_API = "http://100.99.44.88:6350/api/leads?tenant=josh&limit=1000";
const SITE = "sprayfoamrolodex.com";
const FORM_NAME = "directory-listing";

async function main() {
  const res = await fetch(LEADS_API);
  if (!res.ok) throw new Error(`leads API returned ${res.status}`);
  const data = await res.json();
  const leads = data.leads || [];

  const listings = leads
    .filter((l) => l.source_site === SITE)
    .filter((l) => (l.form_type || l.extra_fields?.form_name) === FORM_NAME || l.service_type === undefined)
    .filter((l) => !(l.name || "").trim().toUpperCase().startsWith("DO NOT ACTION"))
    .map((l) => ({
      name: l.name || "",
      company: l.company || undefined,
      city: l.extra_fields?.city || l.address?.split(",")[0]?.trim() || "",
      state: l.extra_fields?.state || "",
      specialty: l.service_type || l.extra_fields?.specialty || "Other",
      email: l.email || undefined,
      phone: l.phone || undefined,
      website: l.extra_fields?.website || undefined,
      listed_at: l.created_at || new Date().toISOString(),
    }))
    .filter((l) => l.name && l.city && l.state);

  const fs = await import("fs");
  const path = await import("path");
  const outPath = path.join(import.meta.dirname, "..", "src", "content", "directory-listings.json");
  fs.writeFileSync(outPath, JSON.stringify(listings, null, 2) + "\n");
  console.log(`Wrote ${listings.length} listing(s) to ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
