import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Real Estate | Investment Opportunities",
  description:
    "Transforming Spaces, Building Futures in Real Estate. Explore exceptional real estate opportunities with MRST Consultancy for buying, selling, or investing with trusted guidance.",
  keywords: [
    "MRST Consultancy",
    "real estate investment",
    "property development",
    "residential property",
    "commercial property",
    "property flipping",
    "rental investment",
    "Dubai real estate",
    "investment opportunities",
  ],
  openGraph: {
    title: "Real Estate | Investment Opportunities",
    description:
      "Transforming Spaces, Building Futures in Real Estate. Explore exceptional real estate opportunities with MRST Consultancy for buying, selling, or investing with trusted guidance.",
    url: "/investment-opportunities/real-estate",
    siteName: "MRST Consultancy",
    images: [
      {
        url: "/mlogo.png", // Replace with hero image or relevant property image
        width: 1200,
        height: 630,
        alt: "Real Estate Investment Opportunities",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate | Investment Opportunities",
    description:
      "Transforming Spaces, Building Futures in Real Estate. Explore exceptional real estate opportunities with MRST Consultancy for buying, selling, or investing with trusted guidance.",
    images: ["/mlogo.png"],
  },
  alternates: {
    canonical: "/investment-opportunities/real-estate",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
