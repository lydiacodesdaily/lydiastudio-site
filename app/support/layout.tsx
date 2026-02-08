import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | Lydia Studio",
  description: "Get help with Lydia Studio products. Contact us, report bugs, or find troubleshooting guides.",
  openGraph: {
    title: "Support | Lydia Studio",
    description: "Get help with Lydia Studio products. Contact us, report bugs, or find troubleshooting guides.",
    type: "website",
  },
  alternates: {
    canonical: "/support",
  },
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
