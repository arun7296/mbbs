import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TRPCProvider } from "@/lib/trpc/provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MedLearn - MBBS Learning Platform",
  description: "Interactive MBBS learning platform aligned with Indian NMC CBME standards. Learn, practice, revise, test, and simulate clinical scenarios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">
        <TRPCProvider>{children}</TRPCProvider>
      </body>
    </html>
  );
}
