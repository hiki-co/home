import type { Metadata } from "next";
import { Zen_Kurenaido } from "next/font/google";
import "./globals.css";

const zenKurenaido = Zen_Kurenaido({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-zen-kurenaido",
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
        className={`${zenKurenaido.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
