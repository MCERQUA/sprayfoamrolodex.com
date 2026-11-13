import { Navbar } from "@/components/sections/Navbar";
import { RolodexHero } from "@/components/sections/RolodexHero";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { site } from "@/lib/site";
import { getDirectoryListings } from "@/lib/directory";
import { DirectoryGrid } from "@/components/directory/DirectoryGrid";
import { DirectoryListingForm } from "@/components/directory/DirectoryListingForm";

export default function HomePage() {
  const listings = getDirectoryListings();

  return (
    <main>
      <Navbar businessName={site.businessName} />

      <RolodexHero />

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <FadeIn>
            <DirectoryGrid listings={listings} />
          </FadeIn>
        </div>
      </section>

      <CTA />

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
