import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Career Services | Investment Opportunities",
  description:
    "Empowering students for global career success. MRST Consultancy provides study abroad counseling, visa support, foundation programs, and internship placements to unlock international opportunities.",
  keywords: [
    "MRST Consultancy",
    "student career services",
    "study abroad counseling",
    "visa support",
    "university pathways",
    "internship placement",
    "job placement",
    "global career",
    "education investment",
    "investment opportunities",
  ],
  openGraph: {
    title: "Student Career Services | Investment Opportunities",
    description:
      "Empowering students for global career success. MRST Consultancy provides study abroad counseling, visa support, foundation programs, and internship placements to unlock international opportunities.",
    url: "/investment-opportunities/career",
    siteName: "MRST Consultancy",
    images: [
      {
        url: "/mlogo.png", // Replace with your hero or relevant image
        width: 1200,
        height: 630,
        alt: "Student Career Services",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Career Services | Investment Opportunities",
    description:
      "Empowering students for global career success. MRST Consultancy provides study abroad counseling, visa support, foundation programs, and internship placements to unlock international opportunities.",
    images: ["/mlogo.png"],
  },
  alternates: {
    canonical: "/investment-opportunities/career",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
