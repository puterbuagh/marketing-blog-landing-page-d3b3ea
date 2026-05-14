import Image from "next/image";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    category: "Content Strategy",
    title: "The 2025 Playbook for B2B Content That Actually Converts",
    excerpt:
      "Stop publishing for the sake of publishing. Here's how leading teams tie every post to a measurable business outcome.",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&q=80",
    readTime: "8 min read",
  },
  {
    category: "SEO",
    title: "Topical Authority: The Quiet SEO Strategy Winning in 2025",
    excerpt:
      "Google's algorithm rewards depth, not breadth. Learn how to build content clusters that dominate your niche.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    readTime: "6 min read",
  },
  {
    category: "Growth",
    title: "How We 4x'd Organic Traffic in 90 Days (Without Backlinks)",
    excerpt:
      "A teardown of the exact framework one SaaS team used to turn a stagnant blog into their #1 acquisition channel.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
    readTime: "11 min read",
  },
];

export function BlogPreview() {
  return (
    <section id="blog" className="scroll-mt-16 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              From the blog
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Marketing insights, weekly
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Practical guides, teardowns, and frameworks from operators
              shipping content every day.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            View all posts <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 font-medium text-primary">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  Read article <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
