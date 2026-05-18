import type { Metadata } from "next";
import "@/styles/globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: siteConfig.companyName,
    template: `%s | ${siteConfig.companyName}`
  },
  description: siteConfig.defaultDescription,
  openGraph: {
    title: siteConfig.companyName,
    description: siteConfig.defaultDescription,
    url: siteConfig.baseUrl,
    siteName: siteConfig.companyName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.companyName} Open Graph`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.companyName,
    description: siteConfig.defaultDescription,
    images: [siteConfig.defaultOgImage]
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      </head>
      <body>{children}</body>
    </html>
  );
}
