import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "hiki co.",
  description: "家から出ないけど、稼ぐ",
  openGraph: {
    title: "hiki co.",
    description: "家から出ないけど、稼ぐ",
    siteName: "hiki co.",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "hiki co.",
    description: "家から出ないけど、稼ぐ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
