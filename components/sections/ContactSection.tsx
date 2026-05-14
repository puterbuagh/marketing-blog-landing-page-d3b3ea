import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, MessageSquare, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-16 py-24 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="flex flex-col justify-center">
            <span className="inline-flex items-center self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Get in touch
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Let&apos;s talk about your{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                content strategy
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tell us a bit about your team and goals. We&apos;ll get back to
              you within one business day with tailored recommendations and a
              walkthrough of the platform.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex gap-4">
                <div className="rounded-lg bg-primary/10 p-3 h-fit">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email us</p>
                  <p className="text-sm text-muted-foreground">
                    hello@yourblog.com — typical reply in under 24 hours.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="rounded-lg bg-primary/10 p-3 h-fit">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Live chat</p>
                  <p className="text-sm text-muted-foreground">
                    Available Monday to Friday, 9am – 6pm in your timezone.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="rounded-lg bg-primary/10 p-3 h-fit">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Fast onboarding</p>
                  <p className="text-sm text-muted-foreground">
                    Most teams publish their first post within 48 hours.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
