'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ThemeToggle from "@/components/ThemeToggle";
import ThemeProvider from "@/components/ThemeProvider";
import ContactModal from "@/components/ContactModal";
import PageNavigation from "@/components/PageNavigation";
import { useState, useEffect } from "react";
import { useLanguageStore } from "@/store/languageStore";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { initializeLanguage, isInitialized, language } = useLanguageStore();

  useEffect(() => {
    if (!isInitialized) {
      initializeLanguage();
    }
  }, [initializeLanguage, isInitialized]);

  return (
    <html lang={language}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
          <ThemeProvider>
            <Navigation />
            <ThemeToggle />
            <PageNavigation />
            <main className="pb-24 sm:pb-0">{children}</main>
            <ContactModal
              isOpen={isContactModalOpen}
              onClose={() => setIsContactModalOpen(false)}
            />
          </ThemeProvider>
      </body>
    </html>
  );
}
