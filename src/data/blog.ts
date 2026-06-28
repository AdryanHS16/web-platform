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
  {
    slug: "how-to-use-customer-data-to-improve-retention",
    category: "Retention",
    title: "How to Use Customer Data to Improve Retention",
    excerpt:
      "Acquiring a customer is only the beginning. Use the data you already have to keep them coming back and growing with you.",
    author: "Adam Brooks",
    role: "Growth Analyst",
    avatar: "https://i.pravatar.cc/150?img=13",
    date: "April 28, 2025",
    readingTime: "7 min read",
    image: "/img/work-image1.avif",
    content: [
      {
        paragraphs: [
          "It costs far more to win a new customer than to keep an existing one, yet most teams pour their energy into acquisition. The good news is that the data needed to improve retention is usually already sitting in your systems, waiting to be put to work.",
        ],
      },
      {
        heading: "Identify the signals that predict churn",
        paragraphs: [
          "Customers rarely leave without warning. Drops in usage, fewer logins, or unanswered emails are early signals. By tracking these behaviors, you can reach out before a customer disengages rather than after they are gone.",
        ],
      },
      {
        heading: "Segment by behavior, not just demographics",
        paragraphs: [
          "Two customers with identical profiles can have completely different needs. Grouping people by how they actually use your product lets you tailor messaging, offers, and support to what each segment values most.",
        ],
      },
      {
        heading: "Turn insights into timely action",
        paragraphs: [
          "Data only matters if it changes what you do. Build simple, repeatable workflows that trigger the right message at the right moment, a check-in after a quiet week, a tip when a feature goes unused, a thank you after a milestone.",
        ],
      },
    ],
  },
  {
    slug: "seo-trends-2025-what-to-watch-for-greater-visibility",
    category: "Marketing",
    title: "SEO Trends 2025: What to Watch for Greater Visibility",
    excerpt:
      "Search is changing fast. Here are the shifts that will define visibility in 2025 and how to stay ahead of them.",
    author: "Daniel Foster",
    role: "SEO Lead",
    avatar: "https://i.pravatar.cc/150?img=8",
    date: "April 10, 2025",
    readingTime: "8 min read",
    image: "/img/work-image2.avif",
    content: [
      {
        paragraphs: [
          "Search engines are evolving faster than ever, and the tactics that worked a few years ago are quickly losing ground. To stay visible in 2025, marketers need to focus on intent, experience, and trust rather than keywords alone.",
        ],
      },
      {
        heading: "Search intent beats keyword density",
        paragraphs: [
          "Modern search engines understand meaning, not just matching strings. Content that genuinely answers the question behind a query will outrank pages stuffed with the right phrases but missing real substance.",
        ],
      },
      {
        heading: "Experience is a ranking factor",
        paragraphs: [
          "Page speed, mobile usability, and a clean reading experience are no longer optional. A fast, accessible site keeps visitors engaged and sends strong quality signals to search engines.",
        ],
      },
      {
        heading: "Authority is built, not bought",
        paragraphs: [
          "Demonstrating expertise, citing credible sources, and earning genuine mentions across the web all reinforce your authority. In 2025, trust is the currency that turns rankings into lasting visibility.",
        ],
      },
    ],
  },
  {
    slug: "omnichannel-marketing-why-consistency-is-the-new-currency",
    category: "Marketing",
    title: "Why Consistency is the New Currency",
    excerpt:
      "Customers move across channels effortlessly. A consistent experience everywhere is what turns attention into loyalty.",
    author: "David Reilly",
    role: "Brand Marketing Manager",
    avatar: "https://i.pravatar.cc/150?img=33",
    date: "March 22, 2025",
    readingTime: "5 min read",
    image: "/img/work-image3.avif",
    content: [
      {
        paragraphs: [
          "Your customers do not think in channels, they think in experiences. They might discover you on social media, research on your blog, and buy on their phone, all in a single afternoon. Consistency across those touchpoints is what makes the journey feel seamless.",
        ],
      },
      {
        heading: "One brand, every touchpoint",
        paragraphs: [
          "When your tone, visuals, and promises stay consistent everywhere, customers build a clear mental picture of who you are. That clarity reduces friction and makes every interaction feel familiar and trustworthy.",
        ],
      },
      {
        heading: "Consistency compounds over time",
        paragraphs: [
          "A single great ad fades quickly. A consistent presence, repeated across channels and over months, compounds into recognition and preference. Reliability is what keeps you top of mind when the customer is finally ready to buy.",
        ],
      },
    ],
  },
  {
    slug: "scaling-smart-strategies-to-grow-without-losing-focus",
    category: "Business Growth",
    title: "Strategies to Grow Without Losing Focus",
    excerpt:
      "Growth can pull a team in a dozen directions. Here is how to scale while staying true to what made you successful.",
    author: "Jason Cole",
    role: "Head of Strategy",
    avatar: "https://i.pravatar.cc/150?img=15",
    date: "March 5, 2025",
    readingTime: "6 min read",
    image: "/img/whyus-image.avif",
    content: [
      {
        paragraphs: [
          "Scaling a business is exciting, but rapid growth has a way of scattering attention. New opportunities arrive faster than you can evaluate them, and the very focus that drove early success starts to slip away. Sustainable growth means scaling with discipline.",
        ],
      },
      {
        heading: "Protect your core before expanding",
        paragraphs: [
          "Before chasing new markets, make sure the thing you already do well stays excellent. A strong core gives you the stability and revenue to experiment elsewhere without putting the business at risk.",
        ],
      },
      {
        heading: "Say no to stay sharp",
        paragraphs: [
          "Every yes is a commitment of time and energy. The fastest-growing teams are often the most selective, choosing a few high-impact bets over many scattered ones. Focus is a strategy, not a limitation.",
        ],
      },
      {
        heading: "Build systems that scale with you",
        paragraphs: [
          "Manual processes that work for ten customers break at a thousand. Investing early in repeatable systems and clear ownership lets your team grow without drowning in complexity.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
