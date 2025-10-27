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

  // show brand once we scroll a bit (not near the anchor landing)
  const onScroll = () => setScrolled(window.scrollY > 120);
  onScroll(); // set once on first paint
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
        <nav className="w-full sticky top-0 z-[200] backdrop-blur-lg bg-white/80 dark:bg-black/80 border-b border-white/10 dark:border-white/10 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-4 w-full">
          {/* Brand name only visible AFTER scroll OR on Blog */}
          <Link href="/" className={`text-sm font-semibold transition-all duration-300
            ${scrolled || isBlogPage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}
          `}>
            Harish Subramanian
          </Link>

          <div className="hidden md:flex text-sm gap-8 text-gray-600 dark:text-gray-300">
            <a href={linkTo("about")} className="hover:opacity-50 transition">About</a>
            <a href={linkTo("experience")} className="hover:opacity-50 transition">Experience</a>
            <a href={linkTo("certifications")} className="hover:opacity-50 transition">Certifications</a>
            <a href={linkTo("projects-impact")} className="hover:opacity-50 transition">Projects</a>
            <a href={linkTo("publications")} className="hover:opacity-50 transition">Featured Publications</a>
            <a href={linkTo("education")} className="hover:opacity-50 transition">Education</a>
            <a href={linkTo("contact")} className="hover:opacity-50 transition">Contact</a>
             <Link
              href="/blog"
              className={`hover:opacity-50 transition ${isBlogPage ? "font-bold opacity-100" : ""}`}
            >
              My Blog
            </Link>

          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onToggleTheme}
              className="hidden md:block text-lg opacity-90 hover:opacity-100 transition-transform duration-200"
            >
              {isDark ? "🌙" : "💡"}
            </button>
            <button className="md:hidden text-xl" onClick={() => setMenuOpen(true)}>
              ☰
            </button>
          </div>
          </div>
        </nav>
      )}

      {/* MOBILE FULL-SCREEN OVERLAY MENU */}
{menuOpen && (
  <div className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-xl text-white flex flex-col justify-between p-8">
    <button
      className="text-2xl self-end"
      onClick={() => setMenuOpen(false)}
    >
      ✕
    </button>

    <div className="flex flex-col gap-6 text-xl">
      <a href={linkTo("about")} onClick={() => setMenuOpen(false)}>About</a>
      <a href={linkTo("experience")} onClick={() => setMenuOpen(false)}>Experience</a>
      <a href={linkTo("certifications")} onClick={() => setMenuOpen(false)}>Certifications</a>
      <a href={linkTo("projects-impact")} onClick={() => setMenuOpen(false)}>Projects</a>
      <a href={linkTo("publications")} onClick={() => setMenuOpen(false)}>Featured Publications</a>
      <a href={linkTo("education")} onClick={() => setMenuOpen(false)}>Education</a>
      <a href="/blog" onClick={() => setMenuOpen(false)}>My Blog</a>
      <a href={linkTo("contact")} onClick={() => setMenuOpen(false)}>Contact</a>
    </div>

    <button
      onClick={onToggleTheme}
      className="self-center mt-10 text-lg opacity-90 hover:opacity-100 transition-transform duration-200"
    >
      {isDark ? "🌙 Dark Mode" : "💡 Light Mode"}
    </button>
  </div>
)}

    </>
  );
}
