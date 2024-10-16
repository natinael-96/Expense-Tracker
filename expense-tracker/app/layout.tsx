import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Roboto } from 'next/font/google';

// Correct font configuration with valid weights and subset
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
});

// Updated metadata for your Expense Tracker app
export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Manage your expenses easily and effectively",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
        <body className={`${roboto.className} bg-gray-900 text-white`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
