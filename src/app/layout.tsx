import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/scroll/SmoothScrollProvider";

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BotLab Dynamics | Cinematic Drone Light Shows & Swarm Robotics",
  description: "Experience the magic of drone swarms. Holders of 5 Guinness World Records, BotLab Dynamics creates premier light shows and engineering innovations 100% made in India.",
  keywords: ["drone light show", "swarm robotics", "BotLab Dynamics", "Guinness World Record drone show", "India drone light show"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${exo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg-night text-white font-sans">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
