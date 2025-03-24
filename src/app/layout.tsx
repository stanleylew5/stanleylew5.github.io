import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stanley Lew",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${albertSans.variable} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
