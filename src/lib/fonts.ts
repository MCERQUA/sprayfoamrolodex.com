import { Fraunces, Karla } from "next/font/google";

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
