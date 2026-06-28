import Image from "next/image";
import Link from "next/link";
import { BlogHero } from "@/components/sections/BlogHero";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";
import { blogPosts, type BlogPost } from "@/data/blog";

export const metadata = {
  title: "Blog - Upreach",
  description:
    "Expert marketing insights, industry trends, and actionable strategies to scale and grow your business.",
};

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex w-full flex-col gap-5">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-16/10 overflow-hidden rounded-[20px] border border-black/5 bg-grey">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <span className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-[#111111] shadow-sm">
            {post.category}
          </span>
        </div>
      </Link>

      <div className="flex flex-col gap-2 px-1">
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-[20px] font-bold leading-snug tracking-tight text-[#111111] transition-colors duration-300 group-hover:text-[#3E8655] md:text-[22px]">
            {post.title}
          </h2>
        </Link>

        <p className="text-[15px] text-gray-500">{post.author}</p>
      </div>
    </article>
  );
}

export default function BlogPage() {
  return (
    <main>
      <BlogHero />

      <BlogGrid>
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </BlogGrid>

      <CTASection />
      <Footer />
    </main>
  );
}
