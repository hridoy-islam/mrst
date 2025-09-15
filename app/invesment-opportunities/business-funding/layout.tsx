import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Funding | Investment Opportunities",
  description:
    "Explore strategic funding options with MRST Consultancy. From start-up capital and seed investment to joint ventures and debt/equity hybrid models, we provide tailored financial solutions for business growth.",
  keywords: [
    "MRST Consultancy",
    "business funding",
    "start-up capital",
    "seed investment",
    "business loans",
    "joint ventures",
    "debt equity financing",
    "investment opportunities",
    "entrepreneur funding",
    "business growth",
  ],
  openGraph: {
    title: "Business Funding | Investment Opportunities",
    description:
      "Explore strategic funding options with MRST Consultancy. From start-up capital and seed investment to joint ventures and debt/equity hybrid models, we provide tailored financial solutions for business growth.",
    url: "/investment-opportunities/business-funding",
    siteName: "MRST Consultancy",
    images: [
      {
        url: "/mlogo.png", // Replace with relevant hero image
        width: 1200,
        height: 630,
        alt: "Business Funding Investment Opportunities",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Funding | Investment Opportunities",
    description:
      "Explore strategic funding options with MRST Consultancy. From start-up capital and seed investment to joint ventures and debt/equity hybrid models, we provide tailored financial solutions for business growth.",
    images: ["/mlogo.png"],
  },
  alternates: {
    canonical: "/investment-opportunities/business-funding",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
