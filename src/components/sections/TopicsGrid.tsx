import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { topics } from "@/lib/site";

const topicImages: Record<string, string> = {
  "choosing-a-spray-foam-rig-trailer-vs-truck-mount": "/images/topic-rig-trailer.jpg",
  "spray-foam-proportioner-buying-guide": "/images/topic-proportioner.jpg",
  "what-it-actually-costs-to-start-a-spray-foam-business": "/images/topic-startup-costs.jpg",
  "spray-foam-chemical-suppliers-what-to-know-before-you-buy": "/images/topic-chemical-drums.jpg",
  "ppe-and-safety-equipment-every-spray-foam-rig-needs": "/images/topic-ppe.jpg",
  "spray-foam-training-and-certification-where-to-start": "/images/topic-training.jpg",
};

export function TopicsGrid() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">The Topics</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Everything You Need Before You Buy Anything
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Not a sales pitch for any one brand &mdash; the real considerations behind rigs,
            equipment, suppliers, and getting started right.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {topics.map((topic) => (
            <StaggerItem key={topic.slug}>
              <Link href={`/topics/${topic.slug}`} className="group block h-full">
                <article className="rounded-xl overflow-hidden bg-card border border-border group-hover:border-primary/40 transition-colors h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={topicImages[topic.slug]}
                      alt={topic.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-heading font-semibold group-hover:text-primary transition-colors">
                      {topic.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground flex-grow">{topic.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Read the guide
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
