import "./(site)/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harish Subramanian — Portfolio",
  description: "Tech Evangelist with a business-oriented mindset to solve complex problems across Infrastructure, Data Protection and AI.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Harish Subramanian — Portfolio",
    description: "Engineer & Strategist — Infrastructure, Data Protection, AI.",
    url: "https://harish.vercel.app",
    siteName: "Harish Subramanian",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Harish Subramanian — Portfolio",
    description: "Engineer & Strategist — Infrastructure, Data Protection, AI."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-black dark:bg-black dark:text-white transition-colors">
        {children}
      </body>
    </html>
  );
}
