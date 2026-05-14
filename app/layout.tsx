import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quillstone — Marketing insights for modern brands",
  description:
    "Quillstone is the marketing blog and content engine helping ambitious teams turn ideas into pipeline. Strategy, SEO, and storytelling — without the fluff.",
  openGraph: {
    title: "Quillstone — Marketing insights for modern brands",
    description:
      "Strategy, SEO, and storytelling — without the fluff. Read the blog and get tailored marketing guidance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground">
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            classNames: {
              toast: "bg-card text-card-foreground border border-border",
            },
          }}
        />
      </body>
    </html>
  );
}
