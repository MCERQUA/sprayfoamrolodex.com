import { Fraunces, Karla, Caveat } from "next/font/google";

// Font pairing locked by the Stitch design system (ai/research/design-system.md) —
// a warm, characterful serif headline face (evoking a reference guide / card catalog)
// paired with a clean geometric sans body, distinct from every other pairing in this batch.
export const bodyFont = Karla({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const headingFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  display: "swap",
});

// Rolodex card name/company line (2026-11-11) — matches the handwritten-script
// typography on Josh's physical Rolodex reference photo.
export const scriptFont = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["500", "600", "700"],
  display: "swap",
});
