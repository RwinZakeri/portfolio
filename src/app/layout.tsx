import Footer from "@/layout/footer/footer";
import Header from "@/layout/header/header";
import { Calistoga, Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const calistoga = Calistoga({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-serif",
});

export const metadata = {
  title: {
    default: "Rwin – Frontend React Developer",
    template: "%s | Rwin Portfolio",
  },
  description:
    "I'm Rwin, a passionate frontend developer specializing in JavaScript, React, Next.js, and modern UI/UX. I craft high-performance, accessible, and beautiful web interfaces.",
  metadataBase: new URL("https://rwin.dev"), // Change to your real domain
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "Rwin",
    "Frontend Developer",
    "React Developer",
    "JavaScript Developer",
    "Next.js Developer",
    "UI Developer",
    "UX Engineer",
    "Frontend Portfolio",
    "Modern Web Design",
    "Web Performance",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  openGraph: {
    title: "Rwin – Frontend React Developer",
    description:
      "Explore Rwin's portfolio of JavaScript, React, and Next.js projects. Focused on performance, design, and clean code.",
    url: "https://rwin.dev",
    siteName: "Rwin Portfolio",
    images: [
      {
        url: "https://rwin.dev/og-image.jpg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Rwin – Frontend React Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rwin – Frontend React Developer",
    description:
      "High-impact JavaScript and React projects by Rwin. Check out his clean code, intuitive UI, and strong frontend skills.",
    creator: "@rwin_dev", // Replace with your Twitter handle
    images: ["https://rwin.dev/twitter-image.jpg"], // Replace with your actual Twitter image
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={twMerge(
        inter.className,
        calistoga.className,
        "bg-gray-900 text-white antialiased"
      )}
    >
      <Header />
      <body>{children}</body>
      <Footer />
    </html>
  );
}
