"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isBlogPage = pathname.startsWith("/blog");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDarkMode = saved === "dark";
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);

    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onToggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const linkTo = (hash: string) =>
    isBlogPage ? `/#${hash}` : `#${hash}`;

  return (
    <>
      {!menuOpen && (
        <nav
          className={`flex items-center justify-between py-4 px-8 mb-8 sticky top-0 z-50 transition-all duration-300
          ${scrolled ? "backdrop-blur-lg bg-white/70 dark:bg-black/60 shadow-sm" : "bg-transparent"}`}
        >
          <Link href="/" className="text-sm font-semibold opacity-90 hover:opacity-100">
            Harish Subramanian
          </Link>

          <div className="hidden md:flex text-sm gap-8 text-gray-600 dark:text-gray-300">
            <a href={linkTo("about")} className="hover:opacity-50 transition">About</a>
            <a href={linkTo("experience")} className="hover:opacity-50 transition">Experience</a>
            <a href={linkTo("certifications")} className="hover:opacity-50 transition">Certifications</a>
            <a href={linkTo("projects-impact")} className="hover:opacity-50 transition">Projects</a>
            <a href={linkTo("publications")} className="hover:opacity-50 transition">Featured Publications</a>
            <a href={linkTo("education")} className="hover:opacity-50 transition">Education</a>
            <Link href="/blog" className={`hover:opacity-50 transition ${isBlogPage ? "font-bold opacity-100" : ""}`}>
              My Blog
            </Link>
            <a href={linkTo("contact")} className="hover:opacity-50 transition">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onToggleTheme}
              className="hidden md:block text-lg opacity-90 hover:opacity-100 transition-transform duration-200"
            >
              {isDark ? "🌙" : "💡"}
            </button>
            <button
              className="md:hidden text-xl"
              onClick={() => setMenuOpen(true)}
            >
              ☰
            </button>
          </div>
        </nav>
      )}

      {/* MOBILE MENU STAYS SAME — it will work with above logic */}
    </>
  );
}
