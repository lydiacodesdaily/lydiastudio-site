import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lydia Studio",
  description: "Gentle tools for focus, time awareness, and learning. Built by Lydia.",
  openGraph: {
    title: "Lydia Studio",
    description: "Gentle tools for focus, time awareness, and learning. Built by Lydia.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
