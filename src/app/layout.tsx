import type { Metadata } from "next";
import { Inter, Saira_Condensed } from "next/font/google";
import "./globals.css";
import { WaitlistProvider } from "@/components/waitlist";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const saira = Saira_Condensed({
  variable: "--font-saira",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

const SITE_URL = "https://www.joincompetitor.com";
const OG_DESCRIPTION =
  "One weekly challenge. One score. One global ranking. Join Season 1 for free — January to April 2027.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "COMPETITOR — The Fitness League for Everyone",
  description:
    "COMPETITOR is the fitness league for everyone. Complete weekly challenges from anywhere, submit your performance, earn points and climb the global rankings. Season 1 starts January 1, 2027 — free to enter.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "COMPETITOR",
    title: "COMPETITOR — The Fitness League for Everyone",
    description: OG_DESCRIPTION,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "COMPETITOR — The Fitness League for Everyone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "COMPETITOR — The Fitness League for Everyone",
    description: OG_DESCRIPTION,
    images: ["/og.png"],
  },
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
