import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { StickyMobileCTA } from "@/components/shared/StickyMobileCTA";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  title: {
    default: `${site.businessName} — Your Reference Guide to Starting and Running a Spray Foam Business`,
    template: `%s | ${site.businessName}`,
  },
  description:
    "A practical buyer's guide for people starting or scaling a spray foam insulation business — rigs, proportioners, real startup costs, chemical suppliers, PPE, and training, explained honestly.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.businessName,
    title: `${site.businessName} — Your Reference Guide to Starting and Running a Spray Foam Business`,
    description:
      "A practical buyer's guide for people starting or scaling a spray foam insulation business — rigs, proportioners, real costs, suppliers, PPE, and training.",
    images: [
      {
        url: "/images/hero-rig-lineup.jpg",
        width: 1200,
        height: 630,
        alt: site.businessName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.businessName} — Your Reference Guide to Starting and Running a Spray Foam Business`,
    description:
      "A practical buyer's guide for people starting or scaling a spray foam insulation business.",
    images: ["/images/hero-rig-lineup.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.businessName,
  description:
    "A practical reference resource for people starting or scaling a spray foam insulation business — equipment, real startup costs, suppliers, safety, and training — backed by Contractors Choice Agency.",
  url: site.url,
  telephone: site.phoneDigits,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  areaServed: "US",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <SmoothScroll>
          {children}
          <StickyMobileCTA />
        </SmoothScroll>
      </body>
    </html>
  );
}
