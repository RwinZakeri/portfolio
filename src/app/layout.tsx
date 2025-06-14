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
    </html>
  );
}
