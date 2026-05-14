import { PenLine, BarChart3, Sparkles, Users, Search, Zap } from "lucide-react";

const features = [
  {
    icon: PenLine,
    title: "AI-Assisted Writing",
    description:
      "Draft posts faster with smart suggestions, tone presets, and on-brand templates built for marketers.",
  },
  {
    icon: Search,
    title: "SEO Built In",
    description:
      "Keyword research, meta previews, and on-page scoring help every post rank without leaving the editor.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Track reads, conversions, and revenue per post with dashboards your whole team can understand.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Comments, approvals, and editorial calendars keep writers, editors, and marketers in sync.",
  },
  {
    icon: Zap,
    title: "One-Click Publishing",
    description:
      "Push posts to your site, newsletter, and social channels at the same time with native integrations.",
  },
  {
    icon: Sparkles,
    title: "Content Repurposing",
    description:
      "Turn one long-form post into tweets, LinkedIn updates, and email snippets in seconds.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-16 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Features
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Everything your content team needs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A modern publishing platform that helps marketing teams ship better
            content, faster — and actually measure the impact.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-md"
              >
                <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
