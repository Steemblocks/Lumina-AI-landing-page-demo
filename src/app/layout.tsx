import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumina AI | The Intelligent Workspace for Teams",
  description:
    "Boost your team's productivity with Lumina AI, the all-in-one workspace with integrated AI automation and smart insights.",
  keywords: [
    "AI",
    "workspace",
    "automation",
    "productivity",
    "team collaboration",
  ],
  authors: [{ name: "Lumina AI" }],
  openGraph: {
    title: "Lumina AI | The Intelligent Workspace for Teams",
    description: "Boost your team's productivity with Lumina AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
