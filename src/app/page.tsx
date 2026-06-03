import { SiteHeader } from "@/components/sections/site-header";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Challenges } from "@/components/sections/challenges";
import { Road } from "@/components/sections/road";
import { Founding } from "@/components/sections/founding";
import { Faq } from "@/components/sections/faq";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Challenges />
        <Road />
        <Founding />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  );
}
