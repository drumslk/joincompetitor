import type { Metadata } from "next";
import { SiteContent } from "@/components/site";
import { getDict } from "@/lib/i18n";

const fr = getDict("fr");

export const metadata: Metadata = {
  title: fr.meta.title,
  description: fr.meta.description,
  alternates: {
    canonical: "/fr",
    languages: { en: "/", fr: "/fr" },
  },
  openGraph: {
    type: "website",
    url: "/fr",
    siteName: "COMPETITOR",
    title: fr.meta.title,
    description:
      "Un défi. Un score. Un classement mondial. Rejoins la Saison 1 gratuitement — de janvier à avril 2027.",
    images: [
      {
        url: "/og.png?v=2",
        width: 1200,
        height: 630,
        alt: fr.meta.title,
      },
    ],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: fr.meta.title,
    description:
      "Un défi. Un score. Un classement mondial. Rejoins la Saison 1 gratuitement — de janvier à avril 2027.",
    images: ["/og.png?v=2"],
  },
};

export default function HomeFr() {
  return <SiteContent lang="fr" />;
}
