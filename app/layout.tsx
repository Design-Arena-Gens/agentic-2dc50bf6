import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naija Cyber Hub | Premium Cyber Cafe Experience",
  description:
    "Naija Cyber Hub delivers fast internet, gaming lounges, and business services for communities across Nigeria. Stay connected, productive, and entertained.",
  openGraph: {
    title: "Naija Cyber Hub | Premium Cyber Cafe Experience",
    description:
      "Fast internet, gaming lounges, and business services built for Nigerian communities.",
    url: "https://agentic-2dc50bf6.vercel.app",
    siteName: "Naija Cyber Hub",
    locale: "en_NG",
    type: "website"
  },
  metadataBase: new URL("https://agentic-2dc50bf6.vercel.app")
};

export const viewport: Viewport = {
  themeColor: "#1478FF"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
