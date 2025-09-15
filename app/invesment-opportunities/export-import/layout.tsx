import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Export & Import | Investment Opportunities",
  description:
    "Explore MRST Consultancy’s trade services for seamless global commerce. From international product sourcing and customs compliance to B2B matchmaking and trade finance solutions, we provide tailored strategies to maximize global trade opportunities.",
  keywords: [
    "MRST Consultancy",
    "export services",
    "import services",
    "global trade",
    "international sourcing",
    "customs compliance",
    "B2B matchmaking",
    "trade finance",
    "investment opportunities",
    "Dubai consultancy",
  ],
  openGraph: {
    title: "Export & Import | Investment Opportunities",
    description:
      "Explore MRST Consultancy’s trade services for seamless global commerce. From international product sourcing and customs compliance to B2B matchmaking and trade finance solutions, we provide tailored strategies to maximize global trade opportunities.",
    url: "/investment-opportunities/export-import",
    siteName: "MRST Consultancy",
    images: [
      {
        url: "/mlogo.png", // Replace with relevant hero image
        width: 1200,
        height: 630,
        alt: "Export & Import Investment Opportunities",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Export & Import | Investment Opportunities",
    description:
      "Explore MRST Consultancy’s trade services for seamless global commerce. From international product sourcing and customs compliance to B2B matchmaking and trade finance solutions, we provide tailored strategies to maximize global trade opportunities.",
    images: ["/mlogo.png"],
  },
  alternates: {
    canonical: "/investment-opportunities/export-import",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
