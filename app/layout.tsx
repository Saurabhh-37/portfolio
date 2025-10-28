import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: undefined,
  title: {
    default: "Saurabh Hagawane - Engineer • Architect • AI Systems Builder",
    template: "%s | Saurabh Hagawane",
  },
  description:
    "Portfolio of Saurabh Hagawane — engineering scalable, AI‑driven, cloud‑native systems. Projects, experience, research, and technical writing.",
  keywords: [
    "Saurabh Hagawane",
    "Software Engineer",
    "Solutions Architect",
    "AI Systems",
    "Cloud Native",
    "Distributed Systems",
    "Next.js",
    "React",
    "FastAPI",
    "Firebase",
    "PostgreSQL",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Saurabh Hagawane — Engineer • Architect • AI Systems Builder",
    description:
      "Engineering scalable, AI‑driven, and cloud‑native architectures that translate complex distributed systems into high‑performance, maintainable software.",
    url: "/",
    siteName: "Saurabh Hagawane",
    images: [
      { url: "/profile.JPG", width: 800, height: 800, alt: "Saurabh Hagawane" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurabh Hagawane — Engineer • Architect • AI Systems Builder",
    description:
      "Engineering scalable, AI‑driven, and cloud‑native architectures that translate complex distributed systems into high‑performance, maintainable software.",
    images: ["/profile.JPG"],
    creator: "@Saurabhh73",
  },
  icons: {
    icon: "/profile.JPG",
    shortcut: "/profile.JPG",
    apple: "/profile.JPG",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/profile.JPG" type="image/jpeg" />
        <link rel="shortcut icon" href="/profile.JPG" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/profile.JPG" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
