import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Contact",
  description: "Contact MRST Consultancy for inquiries, programs, or consultation.",
  openGraph: {
    title: "Contact",
    description: "Contact MRST Consultancy for inquiries, programs, or consultation.",
    url: "/contact",
    siteName: "MRST Consultancy",
    images: [
      {
        url: "/mlogo.png",
        width: 1200,
        height: 630,
        alt: "Contact MRST Consultancy",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact",
    description: "Contact MRST Consultancy for inquiries, programs, or consultation.",
    images: ["/mlogo.png"],
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
