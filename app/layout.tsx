import "./(site)/styles/globals.css";
import type { Metadata } from "next";

export const metadata = {
  title: "Harish Subramanian | Solutions Engineer + Tech Enthusiast",
  description:
    "Inside Sales Engineer at Commvault | PGP in Business Analytics at IIM Ahmedabad | Infra, AI & Cybersecurity enthusiast",
  openGraph: {
    title: "Harish Subramanian | Solutions Engineer + Tech Enthusiast",
    description:
      "Inside Sales Engineer at Commvault | PGP in Business Analytics at IIM Ahmedabad | Infra, AI & Cybersecurity enthusiast",
    url: "https://harish1.vercel.app", // update later if you change domain
    siteName: "Harish Subramanian Portfolio",
    images: [
      {
        url: "/harish.jpg", // this becomes your share preview — change later if needed
        width: 1200,
        height: 630,
        alt: "Harish Subramanian",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harish Subramanian | Solutions Engineer + Tech Enthusiast",
    description:
      "Inside Sales Engineer at Commvault | PGP in Business Analytics at IIM Ahmedabad | Infra, AI & Cybersecurity enthusiast",
    images: ["/harish.jpg"],
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-black dark:bg-black dark:text-white transition-colors">
        <div className="pt-6">  {/* Add padding-top to account for sticky navbar height */}
        {children}
        </div>
      </body>
    </html>
  );
}
