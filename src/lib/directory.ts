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

// Paired-letter tab groups (A-B, C-D, ... W-Z), matching the physical Rolodex reference
// photo Josh sent (task 2026-11-13-482): 12 bold-blue tabs instead of a flat A-Z-# row.
export const LETTER_PAIR_GROUPS: { label: string; letters: string[] }[] = [
  { label: "A-B", letters: ["A", "B"] },
  { label: "C-D", letters: ["C", "D"] },
  { label: "E-F", letters: ["E", "F"] },
  { label: "G-H", letters: ["G", "H"] },
  { label: "I-J", letters: ["I", "J"] },
  { label: "K-L", letters: ["K", "L"] },
  { label: "M-N", letters: ["M", "N"] },
  { label: "O-P", letters: ["O", "P"] },
  { label: "Q-R", letters: ["Q", "R"] },
  { label: "S-T", letters: ["S", "T"] },
  { label: "U-V", letters: ["U", "V"] },
  { label: "W-Z", letters: ["W", "X", "Y", "Z"] },
];

export function getLetterPair(l: DirectoryListing): string {
  const letter = getLetter(l);
  if (letter === "#") return "#";
  return LETTER_PAIR_GROUPS.find((g) => g.letters.includes(letter))?.label ?? "W-Z";
}
