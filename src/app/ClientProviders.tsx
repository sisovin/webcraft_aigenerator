// src/app/ClientProviders.tsx
"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { TempoInit } from "@/components/tempo-init";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      {children}
      <TempoInit />
    </ClerkProvider>
  );
}
