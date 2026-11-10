import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { site } from "@/lib/site";
import { getDirectoryListings, getSpecialties, getStates } from "@/lib/directory";
import { DirectoryGrid } from "@/components/directory/DirectoryGrid";
import { DirectoryListingForm } from "@/components/directory/DirectoryListingForm";

export const metadata: Metadata = {
  title: "Industry Directory",
  description:
    "A free directory of spray foam insulation professionals and businesses — browse by specialty and location, or add yourself at no cost.",
};

export default function DirectoryPage() {
  const listings = getDirectoryListings();
  const specialties = getSpecialties(listings);
  const states = getStates(listings);

  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />

      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Industry Directory</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold">
              Spray Foam Professionals, In One Place
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A free, searchable directory of installers, crews, equipment and chemical
              suppliers, trainers, and consultants in the spray foam industry. Add yourself at
              no cost &mdash; it takes about a minute.
            </p>
            <a
              href="#add-listing"
              className="mt-8 inline-flex items-center justify-center px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors cursor-pointer"
            >
              List Yourself Free
            </a>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <FadeIn>
            <DirectoryGrid listings={listings} specialties={specialties} states={states} />
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/40">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <FadeIn>
            <DirectoryListingForm />
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
