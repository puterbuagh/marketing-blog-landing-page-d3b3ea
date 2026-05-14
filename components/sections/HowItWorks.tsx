import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Plan your editorial calendar",
    description:
      "Brainstorm topics, assign writers, and map posts to campaigns. Built-in keyword tools surface what your audience is searching for right now.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80",
  },
  {
    number: "02",
    title: "Write, review, and approve",
    description:
      "Draft inside a distraction-free editor with AI assistance. Loop in editors and stakeholders with inline comments and clear approval flows.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
  },
  {
    number: "03",
    title: "Publish and measure impact",
    description:
      "Ship to every channel in one click, then track traffic, leads, and revenue per post so you know exactly what's working.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            How it works
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            From idea to published in three steps
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A simple, repeatable workflow that scales from solo creators to
            full content teams.
          </p>
        </div>

        <div className="mt-20 space-y-20">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div>
                <span className="text-sm font-bold tracking-widest text-primary">
                  STEP {step.number}
                </span>
                <h3 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  {step.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
