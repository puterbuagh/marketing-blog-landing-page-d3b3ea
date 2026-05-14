import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 md:px-16 md:py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/70" />
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />

          <div className="relative flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground max-w-2xl">
              Ready to grow your audience with content that converts?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl">
              Join thousands of marketing teams publishing smarter, faster, and
              with measurable impact.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="#contact">
                  Get started free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="#features">See features</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
