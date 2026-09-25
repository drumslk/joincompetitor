import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Use — Competitor",
  description: "The terms that will govern use of COMPETITOR. Provisional draft.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="This page will set out the terms that govern your use of COMPETITOR — the website, the Season 1 registration and, later, the app. The final terms are being prepared; the outline below shows what they will cover."
      sections={[
        {
          heading: "Acceptance of Terms",
          body: "This section will explain that using the site and registering for Season 1 means you agree to these terms once they are finalized.",
        },
        {
          heading: "Season 1 Registration & Participation",
          body: "This section will describe that registration and participation in Season 1 are free, and outline the basic conditions for taking part in weekly challenges.",
        },
        {
          heading: "Fair Play & Verified Performances",
          body: "This section will cover the rules for submitting scores and proof videos, and what happens in case of rule-breaking or invalid submissions.",
        },
        {
          heading: "Accounts & Acceptable Use",
          body: "This section will describe acceptable use of the platform and the responsibilities attached to any account you create.",
        },
        {
          heading: "Changes & Contact",
          body: "This section will explain how these terms may be updated over time. For any question, contact us at hello@joincompetitor.com.",
        },
      ]}
    />
  );
}
