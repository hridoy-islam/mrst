import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "About",
  description:
    "MRST Consultancy is your trusted partner for global business connections and educational opportunities.",
  openGraph: {
    title: "About",
    description:
      "MRST Consultancy is your trusted partner for global business connections and educational opportunities.",
    url: "/about",
    siteName: "MRST Consultancy",
    images: [
      {
        url: "/mlogo.png",
        width: 1200,
        height: 630,
        alt: "About MRST Consultancy",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "About",
    description:
      "MRST Consultancy is your trusted partner for global business connections and educational opportunities.",
    images: ["/mlogo.png"],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
