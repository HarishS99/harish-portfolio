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

  // init theme + scroll listener
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDarkMode = saved === "dark";
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);

    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ Close mobile menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ✅ Lock page scroll while menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const onToggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const linkTo = (hash: string) => (isBlogPage ? `/#${hash}` : `#${hash}`);

  return (
    <>
      {/* DESKTOP / TOP BAR */}
      {!menuOpen && (
        <nav className="w-full sticky top-0 z-[200] backdrop-blur-lg bg-white/80 dark:bg-black/80 border-b border-white/10 dark:border-white/10 shadow-sm">
          <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-4">
            {/* Brand shows after scroll OR on blog page */}
            <Link
              href="/"
              className={`text-sm font-semibold transition-all duration-300
                ${scrolled || isBlogPage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}
              `}
            >
              Harish Subramanian
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex text-sm gap-8 text-gray-600 dark:text-gray-300">
              <a href={linkTo("about")} className="hover:opacity-50 transition">About</a>
              <a href={linkTo("experience")} className="hover:opacity-50 transition">Experience</a>
              <a href={linkTo("certifications")} className="hover:opacity-50 transition">Certifications</a>
              <a href={linkTo("projects-impact")} className="hover:opacity-50 transition">Projects</a>
              <a href={linkTo("publications")} className="hover:opacity-50 transition">Featured Publications</a>
              <a href={linkTo("education")} className="hover:opacity-50 transition">Education</a>
              <Link
                href="/blog"
                className={`hover:opacity-50 transition ${isBlogPage ? "font-bold opacity-100" : ""}`}
              >
                My Blog
              </Link>
              <a href={linkTo("contact")} className="hover:opacity-50 transition">Contact</a>
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-4">
              {/* Theme toggle (desktop only) */}
              <button
                onClick={onToggleTheme}
                aria-label="Toggle theme"
                className="hidden md:block text-lg opacity-90 hover:opacity-100 transition-transform duration-200"
              >
                {isDark ? "🌙" : "💡"}
              </button>

              {/* Hamburger (mobile only) */}
              <button
                className="md:hidden text-xl"
                aria-label="Open menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(true)}
              >
                ☰
              </button>
            </div>
          </div>
        </nav>
      )}

      {/* MOBILE FULL-SCREEN OVERLAY — hidden on md+ */}
      {menuOpen && (
        <div className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-xl text-white flex flex-col justify-between p-8 md:hidden">
          <button
            className="text-2xl self-end"
            aria-label="Close menu"
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
            <Link href="/blog" onClick={() => setMenuOpen(false)}>My Blog</Link>
            <a href={linkTo("contact")} onClick={() => setMenuOpen(false)}>Contact</a>
          </div>

          {/* Theme toggle (mobile) */}
          <button
            onClick={onToggleTheme}
            className="self-center mt-10 text-lg opacity-90 hover:opacity-100 transition-transform duration-200"
            aria-label="Toggle theme"
          >
            {isDark ? "🌙 Dark Mode" : "💡 Light Mode"}
          </button>
        </div>
      )}
    </>
  );
}
