import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Empowering global ambitions through trusted expertise. MRST Consultancy connects you to international business and education opportunities with tailored, results-driven solutions.",
  keywords: [
    "MRST Consultancy",
    "business consultancy",
    "student consultancy",
    "IT solutions",
    "trade and investment",
    "Dubai consultancy",
    "global business",
    "international education",
  ],
  openGraph: {
    title: "Why Choose MRST Consultancy",
    description:
      "Empowering global ambitions through trusted expertise. MRST Consultancy connects you to international business and education opportunities with tailored, results-driven solutions.",
    url: "/why-choose-us",
    siteName: "MRST Consultancy",
    images: [
      {
        url: "/mlogo.png", // Replace with your actual logo or hero image
        width: 1200,
        height: 630,
        alt: "Why Choose MRST Consultancy",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Choose MRST Consultancy",
    description:
      "Empowering global ambitions through trusted expertise. MRST Consultancy connects you to international business and education opportunities with tailored, results-driven solutions.",
    images: ["/mlogo.png"], // Replace with your actual logo or hero image
  },
  alternates: {
    canonical: "/why-choose-us",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
