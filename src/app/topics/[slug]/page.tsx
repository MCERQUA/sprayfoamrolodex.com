import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { TrustBar } from "@/components/shared/TrustBar";
import { FadeIn } from "@/components/animations/FadeIn";
import { site, topics } from "@/lib/site";
import { topicContent } from "@/lib/topic-content";

export function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const topic = topics.find((t) => t.slug === slug);
  if (!topic) return {};
  return {
    title: topic.name,
    description: topic.summary,
  };
}

export default async function TopicDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = topics.find((t) => t.slug === slug);
  const content = topicContent[slug];
  if (!topic || !content) notFound();

  const otherTopics = topics.filter((t) => t.slug !== slug).slice(0, 3);

  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={content.heroImage} alt={content.heroImageAlt} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/65 to-ink/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 pt-36 pb-16 md:pt-48 md:pb-20 text-center">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">The Buyer's Guide</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-tight">
            {topic.name}
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">{topic.summary}</p>
        </div>
        <div className="relative z-10 bg-background/95 backdrop-blur-sm border-t border-border">
          <TrustBar />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <FadeIn>
            {content.intro.map((p, i) => (
              <p key={i} className="text-lg text-muted-foreground leading-relaxed mb-5">{p}</p>
            ))}
          </FadeIn>

          {content.sections.map((section, i) => (
            <FadeIn key={section.heading} delay={0.05 * (i + 1)} className="mt-10">
              <h2 className="text-2xl md:text-3xl font-heading font-bold">{section.heading}</h2>
              {section.paragraphs.map((p, j) => (
                <p key={j} className="mt-4 text-muted-foreground leading-relaxed">{p}</p>
              ))}
            </FadeIn>
          ))}

          <FadeIn delay={0.3} className="mt-12 p-6 rounded-xl bg-muted/50 border border-border">
            <h2 className="text-xl font-heading font-bold mb-4">Key Takeaways</h2>
            <ul className="space-y-3">
              {content.keyTakeaways.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <FAQ
        title={`${topic.shortName} FAQs`}
        subtitle="Real questions people ask before buying equipment or starting out."
        faqs={content.faqs}
      />

      <section className="py-16 md:py-20 bg-muted/40">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-heading font-bold mb-8 text-center">Related Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherTopics.map((t) => (
              <Link key={t.slug} href={`/topics/${t.slug}`} className="group p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors">
                <h3 className="font-heading font-semibold group-hover:text-primary transition-colors">{t.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.summary}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Read more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
