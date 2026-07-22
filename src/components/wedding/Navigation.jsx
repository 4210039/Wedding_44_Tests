import React, { useEffect, useState } from "react";

const LINKS = [
  { label: "DOMOV", href: "#home" },
  { label: "NÁŠ PRÍBIEH", href: "#story" },
  { label: "SVADBA", href: "#the-day" },
  { label: "MIESTO", href: "#venue" },
  { label: "GALÉRIA", href: "#gallery" },
  { label: "RSVP", href: "#rsvp" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[#0A1128]/70 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <a
          href="#home"
          onClick={handleClick("#home")}
          className="font-serif-display text-ivory text-2xl tracking-[0.18em] leading-none"
        >
          E <span className="text-gold">&</span> L
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={handleClick(l.href)}
                className="text-[11px] tracking-wide-luxe text-ivory/80 hover:text-gold transition-colors duration-500"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden flex flex-col gap-[5px] w-7"
        >
          <span className={`h-px bg-ivory transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`h-px bg-ivory transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-px bg-ivory transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-7 pt-6 pb-8 bg-[#0A1128]/95 backdrop-blur-md">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={handleClick(l.href)}
                className="text-xs tracking-wide-luxe text-ivory/90 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}