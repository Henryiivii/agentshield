import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  title: "AgentShield",
  description: "AI Security & Operations Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-[#09090B] text-white min-h-screen">

        {/* Global Navbar */}
        <nav className="border-b border-zinc-800 sticky top-0 bg-[#09090B]/90 backdrop-blur z-50">
          <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/logo.png"
                alt="AgentShield"
                width={50}
                height={50}
              />

              <div>
                <h1 className="font-bold text-xl">
                  AgentShield
                </h1>

                <p className="text-xs text-zinc-400">
                  AI Security & Operations
                </p>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-8">

              <Link
                href="/dashboard"
                className="text-zinc-300 hover:text-orange-500 transition"
              >
                Dashboard
              </Link>

              <Link
                href="/security"
                className="text-zinc-300 hover:text-orange-500 transition"
              >
                Security
              </Link>

              <Link
                href="/agents"
                className="text-zinc-300 hover:text-orange-500 transition"
              >
                AI Agents
              </Link>

              <Link
                href="/pricing"
                className="text-zinc-300 hover:text-orange-500 transition"
              >
                Pricing
              </Link>

              <Link
                href="/login"
                className="text-zinc-300 hover:text-orange-500 transition"
              >
                Login
              </Link>

              <Link
                href="/dashboard"
                className="bg-orange-700 hover:bg-orange-800 px-4 py-2 rounded-xl font-semibold transition"
              >
                Launch Platform
              </Link>

            </div>

          </div>
        </nav>

        {children}

      </body>
    </html>
  );
}
