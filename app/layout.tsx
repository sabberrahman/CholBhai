import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider
} from '@clerk/nextjs'

const inter = Poppins({ subsets: ["latin"],
  weight:["400","500","600","700"],
  variable: "--font-poppings"
 });

export const metadata: Metadata = {
  title: "CholBhai",
  description: "Event Management platform for Tech pops",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">    
      <body className={inter.variable}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
