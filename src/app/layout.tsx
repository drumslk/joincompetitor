import type { Metadata } from "next";
import { Inter, Saira_Condensed } from "next/font/google";
import "./globals.css";
import { WaitlistProvider } from "@/components/waitlist";
import { Toaster } from "@/components/ui/sonner";
import { EVENT_LABEL } from "@/lib/event";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const saira = Saira_Condensed({
  variable: "--font-saira",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Competitor — The World Competes Here",
  description: `The Worldwide Fitness League. Compete against athletes worldwide, climb the rankings and earn your place in the Finals. Next event — ${EVENT_LABEL}.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${saira.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <WaitlistProvider>{children}</WaitlistProvider>
        <Toaster position="top-center" richColors theme="dark" />
      </body>
    </html>
  );
}
