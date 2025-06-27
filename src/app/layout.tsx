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
    default: "Arvin Zakeri – Frontend React Developer",
    template: "%s | Arvin Zakeri – React & Frontend Engineer",
  },
  description:
    "Arvin Zakeri is a professional frontend developer specializing in React, JavaScript, and Next.js. He builds fast, responsive, and accessible websites with top-notch UI/UX.",
  metadataBase: new URL("https://rwin.dev"), // Make sure your domain is live!
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "Arvin Zakeri",
    "Frontend Developer",
    "React Developer",
    "JavaScript Engineer",
    "Next.js Expert",
    "UI/UX Specialist",
    "Web Performance",
    "Modern Web Developer",
    "Tailwind CSS Developer",
    "Frontend Portfolio",
    "Frontend Interview Prep",
    "React Projects",
    "Clean Code",
    "Responsive Web Design",
    "SEO-Friendly Websites",
    "Accessible Frontend",
    "Arvin Zakeri Portfolio",
    "Hire Arvin Zakeri",
    "Frontend Developer Germany",
  ],
  authors: [{ name: "Arvin Zakeri", url: "https://rwin.dev" }],
  creator: "Arvin Zakeri",
  publisher: "Arvin Zakeri",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Arvin Zakeri – Frontend React Developer",
    description:
      "Explore Arvin Zakeri's portfolio of modern frontend projects built with React, JavaScript, and Next.js. Focused on performance, design, and clean code.",
    url: "https://rwin.dev",
    siteName: "Arvin Zakeri Portfolio",
    images: [
      {
        url: "https://rwin.dev/og-image.jpg", // Replace with real OG image
        width: 1200,
        height: 630,
        alt: "Arvin Zakeri – Frontend React Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arvin Zakeri – Frontend React Developer",
    description:
      "Discover high-quality React and JavaScript projects by Arvin Zakeri. Performance, clean code, and pixel-perfect UI/UX.",
    creator: "@rwin_dev", // Replace with your Twitter/X handle
    images: ["https://rwin.dev/twitter-image.jpg"], // Replace with real image
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
