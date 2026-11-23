import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
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
  title: "Devansh Kumar — Systems Architecture & Applied ML",
  description: "Architecting systems that think. Staged uncertainty-aware fraud decisioning, multimodal cryptographic pipelines, and high-throughput backend services.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var saved = localStorage.getItem('dk-portfolio-theme');
                if (saved === 'dark') {
                  document.documentElement.dataset.theme = 'dark';
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.dataset.theme = 'light';
                  document.documentElement.classList.remove('dark');
                }
              } catch(e) {
                document.documentElement.dataset.theme = 'light';
              }
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#f7f7f8] dark:bg-[#0c0c0e] text-[#111114] dark:text-[#f3f4f6]" suppressHydrationWarning>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
