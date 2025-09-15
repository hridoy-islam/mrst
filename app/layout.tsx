import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

// const nunito = Nunito({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-nunito",
// });

const inter = Inter({
  weight: ["400", "200", "300", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
   title: {
    default: "MRST CONSULTANCY",
    template: "%s | MRST CONSULTANCY",
  },
  description:
    "MRST CONSULTANCY is a consulting firm providing services in export, import, mutual funds, and student consultancy.",
  keywords: [
    "MRST CONSULTANCY",
    "consulting firm",
    "export",
    "import",
    "mutual funds",
    "student consultancy",
    "business advisory",
  ],
  openGraph: {
    title: "MRST CONSULTANCY",
    description:
      "MRST CONSULTANCY is a consulting firm providing services in export, import, mutual funds, and student consultancy.",
    url: "/",
    siteName: "MRST CONSULTANCY",
    images: [
      {
        url: "/mlogo.png",
        width: 1200,
        height: 630,
        alt: "MRST CONSULTANCY | Business & Student Consultancy",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MRST CONSULTANCY",
    description:
      "MRST CONSULTANCY is a consulting firm providing services in export, import, mutual funds, and student consultancy.",
    images: ["/mlogo.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} light`}>
      <head>
        <title>MRST CONSULTANCY</title>
        <link rel="icon" href="../public/favicon.ico" />
      </head>
      <body className="relative">
        <Header />
        <div className="pt-[66px]">
          <Providers>{children}</Providers>
        </div>
        <Footer />
      </body>
    </html>
  );
}
