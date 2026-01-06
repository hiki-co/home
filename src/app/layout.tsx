import type { Metadata } from "next";
import { Kosugi_Maru } from "next/font/google";
import "./globals.css";

const kosugiMaru = Kosugi_Maru({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-kosugi-maru",
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
        className={`${kosugiMaru.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
