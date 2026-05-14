"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What does your marketing platform actually do?",
    a: "We help marketing teams plan, write, and publish content that ranks and converts. From editorial calendars to SEO insights and lead capture forms, everything lives in one workspace.",
  },
  {
    q: "Do I need technical skills to get started?",
    a: "Not at all. Our editor is designed for marketers and writers. If you can use a word processor, you can publish a high-performing blog post in minutes.",
  },
  {
    q: "Can I migrate my existing blog content?",
    a: "Yes. We support imports from WordPress, Ghost, Medium, and most major CMS platforms. Our team can also assist with bulk migrations on Pro and Enterprise plans.",
  },
  {
    q: "How do you help with SEO?",
    a: "Every post is scored against your target keyword in real time. We surface readability tips, internal linking suggestions, and structured data automatically.",
  },
  {
    q: "Is there a free trial?",
    a: "Absolutely. Every plan starts with a 14-day free trial — no credit card required. You can publish unlimited drafts during the trial.",
  },
  {
    q: "How does lead capture work?",
    a: "Embed forms in any blog post or landing page. Submissions flow into your dashboard and sync with popular CRMs like HubSpot, Salesforce, and Pipedrive.",
  },
  {
    q: "What kind of support do you offer?",
    a: "Email and chat support on all plans, with priority response times and a dedicated success manager on Enterprise.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes — billing is month-to-month or annual, and you can cancel from your settings at any time. No questions asked.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-16 py-24 bg-secondary/30">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know before getting started.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium text-foreground">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
