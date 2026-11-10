import listingsData from "@/content/directory-listings.json";

export interface DirectoryListing {
  name: string;
  company?: string;
  city: string;
  state: string;
  specialty: string;
  email?: string;
  phone?: string;
  website?: string;
  listed_at: string;
}

export function getDirectoryListings(): DirectoryListing[] {
  return (listingsData as DirectoryListing[]).slice().sort((a, b) =>
    (b.listed_at || "").localeCompare(a.listed_at || "")
  );
}

export function getSpecialties(listings: DirectoryListing[]): string[] {
  return Array.from(new Set(listings.map((l) => l.specialty).filter(Boolean))).sort();
}

export function getStates(listings: DirectoryListing[]): string[] {
  return Array.from(new Set(listings.map((l) => l.state).filter(Boolean))).sort();
}
