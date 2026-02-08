import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flow Club Companion | Lydia Studio",
  description: "Getting started guide for Flow Club Companion. Gentle audio cues and time awareness for Flow Club sessions.",
  openGraph: {
    title: "Flow Club Companion | Lydia Studio",
    description: "Getting started guide for Flow Club Companion. Gentle audio cues and time awareness for Flow Club sessions.",
    type: "website",
  },
  alternates: {
    canonical: "/flow-club-companion",
  },
};

export default function FlowClubCompanionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
