import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              New: AI-assisted drafts
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold tracking-tight md:text-7xl">
              Write content that{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                actually converts
              </span>
              .
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Quillstone is the marketing blog platform built for teams who want
              to ship great posts, grow organic traffic, and turn readers into
              customers — without wrestling with clunky tools.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="#contact">
                  Request a demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#features">See how it works</a>
              </Button>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              No credit card required · Free 14-day trial
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-primary/20 to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80"
                alt="Writer drafting a marketing blog post on a laptop"
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
