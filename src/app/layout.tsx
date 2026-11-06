import { MotionProvider } from "@/components/motion-provider";
import { ParticleSphere } from "@/components/particle-sphere";
import { profile } from "@/lib/profile";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: `${profile.role} in ${profile.location}. React, Next.js, Node, and AWS across eight years of product work.`,
  authors: [{ name: profile.name }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} dark h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ParticleSphere />
        <div className="relative z-10 flex min-h-full flex-1 flex-col">
          <MotionProvider>{children}</MotionProvider>
        </div>
      </body>
    </html>
  );
}
