"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // keep this

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const isBlogPage = pathname.startsWith("/blog");

  // Init theme + scroll reveal
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

  // Close mobile menu on desktop resize (NOW switches at 1024px+)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close on orientation change (iOS)
  useEffect(() => {
    const onOrient = () => setMenuOpen(false);
    window.addEventListener("orientationchange", onOrient);
    return () => window.removeEventListener("orientationchange", onOrient);
  }, []);

  // Close when route (pathname) changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close on hash/back-forward changes
  useEffect(() => {
    const handler = () => setMenuOpen(false);
    window.addEventListener("hashchange", handler);
    window.addEventListener("popstate", handler);
    return () => {
      window.removeEventListener("hashchange", handler);
      window.removeEventListener("popstate", handler);
    };
  }, []);

  // Lock body scroll when menu is open
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
            <Link
              href="/"
              className={`text-sm font-semibold transition-all duration-300 ${
                scrolled || isBlogPage
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2 pointer-events-none"
              }`}
            >
              Harish Subramanian
            </Link>

            {/* Desktop links — NOW lg breakpoint */}
            <div className="hidden lg:flex text-sm gap-8 text-gray-600 dark:text-gray-300">
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
                aria-label="Toggle theme"
                className="hidden lg:block text-lg opacity-90 hover:opacity-100 transition-transform duration-200"
              >
                {isDark ? "🌙" : "💡"}
              </button>
              <button
                className="lg:hidden text-xl"
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

      {/* MOBILE FULL-SCREEN OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-xl text-white flex flex-col justify-between p-8 lg:hidden min-h-[100svh] overscroll-none pb-[env(safe-area-inset-bottom)]">
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
