{/*
  Privacy Policy Page for Lydia Studio

  HOW TO ADD A NEW PRODUCT SECTION:
  1. Add a new <section> element in the "Product Sections" area below
  2. Give it an id attribute for deep linking (e.g., id="your-product-name")
  3. Use the same structure as existing sections:
     - <h2> with the product name
     - <ul> with data collection details
     - Keep language simple and hyphen-free
  4. If the product needs a dedicated URL, create a redirect route at
     /app/privacy/your-product-name/page.tsx (see flow-club-companion example)
  5. Update the table of contents if one is added in the future
*/}

import type { Metadata } from "next";
import PrivacyPageContent from "./PrivacyPageContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Lydia Studio",
  description: "Privacy policy for Lydia Studio products.",
  openGraph: {
    title: "Privacy Policy | Lydia Studio",
    description: "Privacy policy for Lydia Studio products.",
    type: "website",
  },
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyPageContent />;
}
