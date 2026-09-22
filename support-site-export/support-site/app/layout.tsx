import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://edaunlock.com"),
    alternates: { canonical: "/" },

    title: {
      default: "EDA Unlock Support",
      template: "%s · EDA Unlock",
    },
    description: "Official help, setup guidance, privacy information, and contact details for EDA Unlock.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "EDA Unlock Support",
      description: "Help for intentional access, learning challenges, and Screen Time setup.",
      type: "website",
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "EDA Unlock learning challenge" }],
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><a className="skip-link" href="#main-content">Skip to content</a>{children}</body>
    </html>
  );
}
