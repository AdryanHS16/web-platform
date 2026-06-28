export interface BlogSection {
  heading?: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  role: string;
  avatar: string;
  date: string;
  readingTime: string;
  image: string;
  content: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "creating-content-that-converts-writing-with-purpose",
    category: "Content Creation",
    title: "Creating Content That Converts: Writing with Purpose",
    excerpt:
      "Great content is not about writing more, it is about writing with intent. Learn how to craft pieces that move readers to act.",
    author: "Matthew King",
    role: "Content Strategist",
    avatar: "https://i.pravatar.cc/150?img=12",
    date: "May 12, 2025",
    readingTime: "6 min read",
    image: "/img/work-image4.avif",
    content: [
      {
        paragraphs: [
          "Every piece of content you publish is competing for attention in an increasingly crowded feed. The brands that win are not the ones who publish the most, they are the ones who publish with purpose. Writing that converts starts with a clear understanding of who you are speaking to and what you want them to do next.",
        ],
      },
      {
        heading: "Start with the reader, not the product",
        paragraphs: [
          "The fastest way to lose a reader is to talk about yourself before you have earned their attention. Strong content leads with the reader's problem, frames it in language they recognize, and only then introduces your solution as the natural next step.",
          "When you anchor your message in a real pain point, your audience feels understood, and trust is the foundation of every conversion.",
        ],
      },
      {
        heading: "Give every piece a single job",
        paragraphs: [
          "A blog post that tries to do everything ends up doing nothing. Decide on one outcome before you write the first line, whether that is a newsletter signup, a demo request, or a share, and let that goal shape your structure, tone, and call to action.",
        ],
      },
      {
        heading: "Edit for clarity, then for momentum",
        paragraphs: [
          "Your first draft is for getting ideas down. Your second draft is for the reader. Cut filler, shorten sentences, and make sure each paragraph earns the next. Content that flows keeps people reading, and people who keep reading are far more likely to act.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
