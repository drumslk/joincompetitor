import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy — Competitor",
  description: "How COMPETITOR handles your data. Provisional draft.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This page explains, in plain terms, how COMPETITOR will handle the information you share with us — starting with the email address you provide to reserve your place in Season 1. The final policy is being prepared; the outline below shows what it will cover."
      sections={[
        {
          heading: "Information We Collect",
          body: "This section will list the data we collect — currently limited to the email address you submit through the Season 1 form, plus basic technical data such as approximate signup date.",
        },
        {
          heading: "How We Use Your Information",
          body: "This section will describe how we use your email: to send COMPETITOR news, Season 1 information and launch updates that you consented to receive.",
        },
        {
          heading: "Storage & Third-Party Services",
          body: "This section will name the services we use to store your data and send emails, and describe the safeguards applied to keep it secure.",
        },
        {
          heading: "Your Rights & Unsubscribing",
          body: "This section will explain how to unsubscribe at any time and how to request access to, or deletion of, your data.",
        },
        {
          heading: "Contact",
          body: "For any privacy question, or to exercise your rights, contact us at hello@joincompetitor.com.",
        },
      ]}
    />
  );
}
