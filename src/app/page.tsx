import { SiteHeader } from "@/components/sections/site-header";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Challenges } from "@/components/sections/challenges";
import { Leaderboard } from "@/components/sections/leaderboard";
import { Road } from "@/components/sections/road";
import { Founding } from "@/components/sections/founding";
import { Faq } from "@/components/sections/faq";
import { SiteFooter } from "@/components/sections/site-footer";
import { BackgroundFx } from "@/components/fx/background-fx";

export default function Home() {
  return (
    <div id="top" className="grain relative flex min-h-screen flex-col bg-background">
      <BackgroundFx />
      <div className="relative z-10 flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Hero />
          <HowItWorks />
          <Challenges />
          <Leaderboard />
          <Road />
          <Founding />
          <Faq />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
