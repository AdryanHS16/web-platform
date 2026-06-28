import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { GridBackground } from "@/components/sections/GridBackground";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";
import { blogPosts, getBlogPost } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Post not found - Upreach" };
  }

  return {
    title: `${post.title} - Upreach`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <main>
      <article>
        <section className="relative overflow-hidden bg-dark text-white pt-28 pb-12 md:pt-36 md:pb-16">
          <GridBackground />

          <Container className="relative z-10">
            <ScrollReveal className="mx-auto max-w-[760px] text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-white/60 transition-colors hover:text-white"
              >
                <span aria-hidden="true">&larr;</span> Back to blog
              </Link>

              <span className="mt-6 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[13px] font-medium text-primary-1">
                {post.category}
              </span>

              <h1 className="mt-5 text-[32px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.12] tracking-[-0.02em] text-white">
                {post.title}
              </h1>

              <p className="mx-auto mt-6 max-w-[560px] text-[16px] md:text-[18px] leading-relaxed text-white/70">
                {post.excerpt}
              </p>

              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/15">
                  <Image
                    src={post.avatar}
                    alt={post.author}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>

                <div className="text-left">
                  <p className="text-[15px] font-semibold text-white">
                    {post.author}
                  </p>
                  <p className="text-[13px] text-white/55">
                    {post.date} &middot; {post.readingTime}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        <section className="bg-white pb-16 md:pb-20">
          <Container>
            <ScrollReveal className="relative mx-auto -mt-8 max-w-[960px] md:-mt-12">
              <div className="relative aspect-video overflow-hidden rounded-[24px] border border-black/5 bg-grey shadow-xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 960px"
                />
              </div>
            </ScrollReveal>

            <div className="mx-auto mt-12 max-w-[720px] md:mt-16">
              {post.content.map((section, index) => (
                <ScrollReveal
                  key={index}
                  className={index === 0 ? "" : "mt-10"}
                  amount={0.3}
                >
                  {section.heading && (
                    <h2 className="mb-4 text-[24px] md:text-[28px] font-semibold leading-tight tracking-[-0.01em] text-[#111111]">
                      {section.heading}
                    </h2>
                  )}

                  <div className="flex flex-col gap-5">
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-[17px] leading-[1.75] text-gray-600"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>

        {relatedPosts.length > 0 && (
          <section className="bg-grey/40 py-16 md:py-20">
            <Container>
              <ScrollReveal className="mb-10 text-center">
                <h2 className="text-[28px] md:text-[36px] font-semibold leading-tight tracking-[-0.02em] text-[#111111]">
                  Keep reading
                </h2>
              </ScrollReveal>

              <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
                {relatedPosts.map((item) => (
                  <article
                    key={item.slug}
                    className="group flex w-full flex-col gap-5"
                  >
                    <Link href={`/blog/${item.slug}`} className="block">
                      <div className="relative aspect-16/10 overflow-hidden rounded-[20px] border border-black/5 bg-grey">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />

                        <span className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-[#111111] shadow-sm">
                          {item.category}
                        </span>
                      </div>
                    </Link>

                    <div className="flex flex-col gap-2 px-1">
                      <Link href={`/blog/${item.slug}`}>
                        <h3 className="text-[18px] font-bold leading-snug tracking-tight text-[#111111] transition-colors duration-300 group-hover:text-[#3E8655] md:text-[20px]">
                          {item.title}
                        </h3>
                      </Link>

                      <p className="text-[15px] text-gray-500">{item.author}</p>
                    </div>
                  </article>
                ))}
              </div>
            </Container>
          </section>
        )}
      </article>

      <CTASection withTopSpacing />
      <Footer />
    </main>
  );
}
