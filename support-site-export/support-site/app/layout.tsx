import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const socialImage = `${protocol}://${host}/og.png`;

  return {
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
      images: [{ url: socialImage, width: 1200, height: 630, alt: "EDA Unlock learning challenge" }],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
