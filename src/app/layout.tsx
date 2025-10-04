// src/app/layout.tsx (server component)
import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import ClientProviders from "./ClientProviders"; // <-- create this

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tempo - Modern SaaS Starter",
  description: "A modern full-stack starter template powered by Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
