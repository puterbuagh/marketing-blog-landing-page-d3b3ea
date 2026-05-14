"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[+\d\s().-]{6,}$/.test(val),
      "Please enter a valid phone number"
    ),
  message: z.string().min(10, "Please share at least a few details (10+ characters)"),
  website: z.string().optional(), // honeypot
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      toast.error("Please review the form and try again.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...parsed.data, source: "landing" }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong");
      }

      toast.success("Thanks! We'll be in touch within one business day.");
      reset();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to submit. Please try again.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <Label htmlFor="name">Full name</Label>
        <Input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="Jane Cooper"
          aria-invalid={!!errors.name}
          {...register("name")}
        />
        {errors.name && (
          <p className="mt-1.5 text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email">Work email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1.5 text-sm text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="phone">
            Phone <span className="text-muted-foreground font-normal">(optional)</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 (555) 123-4567"
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1.5 text-sm text-destructive">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="message">How can we help?</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell us about your team, content goals, and timeline."
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1.5 text-sm text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Honeypot field — hidden from users, visible to bots */}
      <div
        className="absolute left-[-9999px] top-[-9999px]"
        aria-hidden="true"
      >
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isSubmitting || !isValid}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send message
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to our privacy policy. We&apos;ll
        never share your information.
      </p>
    </form>
  );
}
