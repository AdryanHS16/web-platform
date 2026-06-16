import Image from "next/image";
import Link from "next/link";
import { BlogHero } from "@/components/sections/BlogHero";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Blog - Upreach",
  description:
    "Expert marketing insights, industry trends, and actionable strategies to scale and grow your business.",
};

interface BlogPost {
  id: string;
  image: string;
  category: string;
  title: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "creating-content-that-converts",
    image: "/img/work-image4.avif",
    category: "Content Creation",
    title: "Creating Content That Converts: Writing with Purpose",
    author: "Sarah Mitchell",
  },
  {
    id: "customer-data-improve-behavior",
    image: "/img/work-image1.avif",
    category: "Marketing",
    title: "How to Use Customer Data to Improve Behavior",
    author: "James Chen",
  },
  {
    id: "seo-trends-2024",
    image: "/img/work-image2.avif",
    category: "Marketing",
    title: "SEO Trends 2024: What to Watch for Greater Visibility",
    author: "Emily Rodriguez",
  },
  {
    id: "consistency-new-currency",
    image: "/img/work-image3.avif",
    category: "Retention",
    title: "Why Consistency is the New Currency",
    author: "David Thompson",
  },
  {
    id: "grow-without-losing-focus",
    image: "/img/whyus-image.avif",
    category: "Strategy",
    title: "Strategies to Grow Without Losing Focus",
    author: "Lisa Park",
  },
  {
    id: "psychology-of-branding",
    image: "/img/work-image4.avif",
    category: "Branding",
    title: "The Psychology of Branding: Build Connections",
    author: "Michael Foster",
  },
];

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex w-full flex-col gap-5">
      <Link href={`/blog/${post.id}`} className="block">
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
        <Link href={`/blog/${post.id}`}>
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
          <BlogCard key={post.id} post={post} />
        ))}
      </BlogGrid>

      <CTASection />
      <Footer />
    </main>
  );
}
