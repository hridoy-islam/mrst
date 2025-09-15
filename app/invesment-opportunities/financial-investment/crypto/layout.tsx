import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Crypto Investment | Financial Opportunities",
  description:
    "Navigate the future of finance with MRST Consultancy’s crypto investment services. Managed trading, personalized guidance, mentorship, and secure strategies to help grow your digital assets with confidence.",
  keywords: [
    "MRST Consultancy",
    "crypto investment",
    "managed crypto trading",
    "crypto mentorship",
    "digital assets",
    "cryptocurrency trading",
    "financial investment",
    "investment opportunities",
    "blockchain",
    "crypto guidance",
  ],
  openGraph: {
    title: "Crypto Investment | Financial Opportunities",
    description:
      "Navigate the future of finance with MRST Consultancy’s crypto investment services. Managed trading, personalized guidance, mentorship, and secure strategies to help grow your digital assets with confidence.",
    url: "/investment-opportunities/financial-investment/crypto",
    siteName: "MRST Consultancy",
    images: [
      {
        url: "/mlogo.png", // Replace with a relevant crypto hero image
        width: 1200,
        height: 630,
        alt: "Crypto Investment Opportunities",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Investment | Financial Opportunities",
    description:
      "Navigate the future of finance with MRST Consultancy’s crypto investment services. Managed trading, personalized guidance, mentorship, and secure strategies to help grow your digital assets with confidence.",
    images: ["/mlogo.png"],
  },
  alternates: {
    canonical: "/investment-opportunities/financial-investment/crypto",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
