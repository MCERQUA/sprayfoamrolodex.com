import listingsData from "@/content/directory-listings.json";

export interface DirectoryListing {
  name: string;
  company?: string;
  state: string;
  specialty: string;
  credentials?: string;
  logoUrl?: string;
  website?: string;
  listed_at: string;
}

export function getDirectoryListings(): DirectoryListing[] {
  return (listingsData as DirectoryListing[]).slice().sort((a, b) =>
    (b.listed_at || "").localeCompare(a.listed_at || "")
  );
}

// Letter used for the A-Z Rolodex tabs: first letter of the person/contact name (Josh,
// 2026-11-11: "I'd like a similar look people can click on tabs and see ... name in
// alphabetical order" — he's thinking of people, matching the reference photo's primary
// card line being a person's name). Falls back to company when no name is given.
export function getLetter(l: DirectoryListing): string {
  const key = (l.name || l.company || "").trim();
  const ch = key.charAt(0).toUpperCase();
  return /[A-Z]/.test(ch) ? ch : "#";
}
