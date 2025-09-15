import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Forex Investment | Financial Opportunities",
  description:
    "Unlock global Forex investment opportunities with MRST Consultancy. Managed trading, personalized consultancy, and expert guidance to help you maximize profits and minimize risks in currency markets.",
  keywords: [
    "MRST Consultancy",
    "forex investment",
    "managed forex trading",
    "forex consultancy",
    "currency trading",
    "financial investment",
    "global investment opportunities",
    "investment guidance",
    "Forex market",
    "risk management",
  ],
  openGraph: {
    title: "Forex Investment | Financial Opportunities",
    description:
      "Unlock global Forex investment opportunities with MRST Consultancy. Managed trading, personalized consultancy, and expert guidance to help you maximize profits and minimize risks in currency markets.",
    url: "/investment-opportunities/financial-investment/forex",
    siteName: "MRST Consultancy",
    images: [
      {
        url: "/mlogo.png", // Replace with a relevant hero image for Forex
        width: 1200,
        height: 630,
        alt: "Forex Investment Opportunities",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forex Investment | Financial Opportunities",
    description:
      "Unlock global Forex investment opportunities with MRST Consultancy. Managed trading, personalized consultancy, and expert guidance to help you maximize profits and minimize risks in currency markets.",
    images: ["/mlogo.png"],
  },
  alternates: {
    canonical: "/investment-opportunities/financial-investment/forex",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
