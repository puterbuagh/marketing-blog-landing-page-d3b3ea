import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "We replaced three tools with this platform and cut our content production time in half. The analytics alone paid for it in the first month.",
    name: "Sarah Chen",
    role: "Head of Content, Northwind",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    quote:
      "Finally a blog tool built for marketers, not developers. Our editorial calendar has never been this organized — and our SEO is climbing fast.",
    name: "Marcus Holloway",
    role: "VP Marketing, Lumen Labs",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    quote:
      "The collaboration features changed how our remote team works. Drafts, reviews, approvals — all in one place. I can't imagine going back.",
    name: "Priya Raman",
    role: "Content Director, Fieldnote",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-16 bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Loved by marketers
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Trusted by content teams worldwide
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of marketing teams shipping better content every
            week.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
