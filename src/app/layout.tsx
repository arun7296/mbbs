import type { Metadata } from "next";
import "./globals.css";
import { TRPCProvider } from "@/lib/trpc/provider";

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full font-sans">
        <TRPCProvider>{children}</TRPCProvider>
      </body>
    </html>
  );
}
