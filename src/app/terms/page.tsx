import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Use — Competitor",
  description:
    "The terms that govern use of the COMPETITOR pre-launch website and Season 1 pre-registration.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      updated="September 27, 2026"
      lead="These Terms govern your use of this website and the Season 1 pre-registration. By using the site or submitting the signup form, you agree to them. Please also read our Privacy Policy, which explains how we handle your email address."
      sections={[
        {
          heading: "What this site is",
          paragraphs: [
            "This website is the pre-launch page for COMPETITOR, an upcoming fitness league operated by Competitor Arena LLC, 2348 Dartmouth Ave N, St. Petersburg, FL 33713, USA. It lets you learn about Season 1 and reserve your place by submitting your email address.",
            "The product, features, format, and dates described on the site — including Season 1 starting on January 1, 2027 — are planned and may change or be delayed. Nothing on this page is a binding commitment that the season will run exactly as shown.",
          ],
        },
        {
          heading: "Registration and cost",
          paragraphs: [
            "Reserving your place is free. There is no purchase, subscription, or payment on this site.",
            "To sign up you must provide a valid email address that is yours, and you must be at least 16 years old.",
          ],
        },
        {
          heading: "Communications you agree to",
          paragraphs: [
            "When you submit the form and tick the consent box, you agree to receive COMPETITOR news, Season 1 information, and launch updates by email. You can unsubscribe at any time — see the Privacy Policy for how.",
          ],
        },
        {
          heading: "Acceptable use",
          paragraphs: [
            "When using this site, you agree not to: submit false information or someone else's email without permission; attempt to disrupt, overload, or gain unauthorised access to the site or its systems; or use the site for any unlawful purpose.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "The COMPETITOR name, logo, text, and other content on this site are owned by Competitor Arena LLC or its licensors, and are protected by intellectual-property laws. You may not copy, reproduce, or reuse them without our prior written permission.",
          ],
        },
        {
          heading: "No warranties (pre-launch site)",
          paragraphs: [
            "The site is provided on an “as is” and “as available” basis. As a pre-launch page, information may be incomplete or change at any time, and the details of Season 1 (including dates, rules, and format) are not guaranteed.",
          ],
        },
        {
          heading: "Limitation of liability",
          paragraphs: [
            "To the fullest extent permitted by law, Competitor Arena LLC and its team will not be liable for any indirect, incidental, or consequential damages arising from your use of, or inability to use, this website.",
          ],
        },
        {
          heading: "Governing law",
          paragraphs: [
            "These Terms are governed by the laws of the State of Florida, USA, without regard to its conflict-of-laws rules. Any dispute will be brought before the state or federal courts located in Pinellas County, Florida — except where mandatory law in your country of residence gives you the right to bring proceedings in your own local courts.",
          ],
        },
        {
          heading: "Changes and contact",
          paragraphs: [
            "We may update these Terms as the product evolves; the “Last updated” date at the top shows the latest version. For any question, contact us at hello@joincompetitor.com.",
          ],
        },
      ]}
    />
  );
}
