import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy — Competitor",
  description:
    "How COMPETITOR collects and uses the email you provide to reserve your place in Season 1.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="September 27, 2026"
      lead="This Privacy Policy explains what personal data we collect through this website, why we collect it, and the choices you have. It reflects how the site works today: a pre-launch page where you can reserve your place for Season 1 by giving us your email address."
      sections={[
        {
          heading: "Who we are",
          paragraphs: [
            "This website (joincompetitor.com) is the pre-launch page for COMPETITOR, an upcoming fitness league. COMPETITOR is operated by Competitor Arena LLC, 2348 Dartmouth Ave N, St. Petersburg, FL 33713, USA, which is the controller of your personal data.",
            "For any question about this policy or your data, contact us at hello@joincompetitor.com.",
          ],
        },
        {
          heading: "What we collect",
          paragraphs: [
            "When you submit the Season 1 form, we collect only the information you give us — your email address. For each entry, we also record:",
          ],
          bullets: [
            "Your email address.",
            "The date and time of your signup.",
            "An internal record identifier.",
          ],
        },
        {
          heading: "Cookies and tracking",
          paragraphs: [
            "This site does not use cookies, analytics, advertising trackers, or similar technologies. We do not build advertising profiles and we do not track your activity across other sites.",
            "Some images on the site are loaded from third-party media hosts (Unsplash, Pexels and Wikimedia). When your browser loads those images, those services receive your IP address as part of the standard technical request, as with any embedded image.",
          ],
        },
        {
          heading: "Why we use your email (purpose and legal basis)",
          paragraphs: [
            "We use your email address only to send you COMPETITOR news, Season 1 information, and launch updates — the communications you agreed to receive when you ticked the consent box on the form. We also send you a confirmation email when you sign up.",
            "Our legal basis under the GDPR is your consent, which you give through that checkbox and can withdraw at any time.",
          ],
        },
        {
          heading: "Service providers we use",
          paragraphs: [
            "To run the signup and send these emails, we rely on the following providers, which process your email address on our behalf and only to provide their service to us:",
          ],
          bullets: [
            "Railway — hosting of the website and of the database where your email is stored.",
            "Resend — delivery of the confirmation and update emails.",
            "Make.com — automation that records a new signup when you submit the form.",
          ],
        },
        {
          heading: "Sharing",
          paragraphs: [
            "We do not sell your personal data, and we do not share it for advertising. We share it only with the providers listed above, as needed to operate the signup and send you the emails you asked for, or where we are legally required to.",
          ],
        },
        {
          heading: "International transfers",
          paragraphs: [
            "Competitor Arena LLC is based in the United States, and some of our providers process data in the United States and other countries. If you are in the EU or the UK, this means your email address may be transferred outside your country. Where required, we rely on appropriate safeguards, such as the standard contractual clauses offered by these providers in their data-processing terms.",
          ],
        },
        {
          heading: "How long we keep it",
          paragraphs: [
            "We keep your email address for as long as you stay subscribed to our updates. When you unsubscribe or ask us to delete your data, we remove your email address from our list.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "You can unsubscribe (withdraw your consent) at any time, and you can ask us to access, correct, or delete your email address, by emailing hello@joincompetitor.com. We will action your request.",
            "If you are in the EU or the UK, you have rights under the GDPR — including access, rectification, erasure, restriction, objection, and data portability — and the right to lodge a complaint with your local data-protection authority.",
          ],
        },
        {
          heading: "Children",
          paragraphs: [
            "This site is not intended for children. You must be at least 16 years old to sign up.",
          ],
        },
        {
          heading: "Changes to this policy",
          paragraphs: [
            "We may update this policy as the product evolves. The “Last updated” date at the top shows the latest version.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "For any privacy question, or to exercise your rights, email us at hello@joincompetitor.com.",
          ],
        },
      ]}
    />
  );
}
