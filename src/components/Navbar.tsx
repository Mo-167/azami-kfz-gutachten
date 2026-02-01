import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = location.pathname === "/";
  const heroMode = isHome && !scrolled; // ✅ „verzahnt“: oben im Hero transparent

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  // Robust: wartet, bis das Element wirklich im DOM ist
  const scrollToId = (id: string) => {
    let attempts = 0;
    const maxAttempts = 120;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      attempts++;
      if (attempts < maxAttempts) requestAnimationFrame(tryScroll);
    };

    tryScroll();
  };

  const goToHero = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      requestAnimationFrame(() => scrollToId("hero"));
      return;
    }
    scrollToId("hero");
  };

  const goToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      requestAnimationFrame(() => scrollToId("contact"));
      return;
    }
    scrollToId("contact");
  };

  // Mobile-Menü automatisch schließen bei Route-Wechsel
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Esc schließt Mobile-Menü
  useEffect(() => {
    const onKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Scroll-Status
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ Desktop Navbar: oben im Hero „glassy“ + ohne Schatten, beim Scrollen kleiner & „weiß“
  const desktopNavClass = [
    "hidden md:block rounded-full transition-all duration-300 ease-out backdrop-blur-md",
    heroMode
      ? "bg-white/10 border border-white/20 shadow-none px-6 py-3"
      : scrolled
      ? "bg-white/75 shadow-lg px-4 py-3"
      : "bg-white/90 shadow-lg px-6 py-3",
  ].join(" ");

  const desktopUlClass = [
    "flex items-center gap-2 text-sm font-medium transition-colors duration-300",
    heroMode ? "text-white" : "text-heroBg",
  ].join(" ");

  const pillBase = "px-4 py-2 rounded-full transition";

  const pillInactive = heroMode
    ? "hover:bg-white/15"
    : "hover:bg-lightBlue";

  const pillActive = heroMode
    ? "bg-white/20 text-white"
    : "bg-heroBg text-white";

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] md:w-auto max-w-6xl">
      {/* DESKTOP NAVBAR */}
      <nav className={desktopNavClass}>
        <ul className={desktopUlClass}>
          {/* Startseite -> immer zum Hero */}
          <li>
            <button
              onClick={goToHero}
              className={`${pillBase} ${isActive("/") ? pillActive : pillInactive}`}
              type="button"
            >
              Startseite
            </button>
          </li>

          <li>
            <Link
              to="/ueber-uns"
              className={`${pillBase} ${
                isActive("/ueber-uns") ? pillActive : pillInactive
              }`}
            >
              Über uns
            </Link>
          </li>

          <li>
            <Link
              to="/standorte"
              className={`${pillBase} ${
                isActive("/standorte") ? pillActive : pillInactive
              }`}
            >
              Standorte
            </Link>
          </li>

          <li>
            <Link
              to="/zertifikate"
              className={`${pillBase} ${
                isActive("/zertifikate") ? pillActive : pillInactive
              }`}
            >
              Zertifikate
            </Link>
          </li>

          {/* Kontakt -> immer zum Kontaktbereich */}
          <li>
            <button
              onClick={goToContact}
              className={`${pillBase} ${pillInactive}`}
              type="button"
            >
              Kontakt
            </button>
          </li>
        </ul>
      </nav>

      {/* MOBILE NAVBAR */}
      <nav className="md:hidden bg-white/90 backdrop-blur-md shadow-lg rounded-2xl px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo statt Text */}
          <button
            onClick={goToHero}
            type="button"
            aria-label="Zur Startseite"
            className="flex items-center"
          >
            <img
              src="/Logo_schwarz.png"
              alt="Azami Kfz-Gutachten Logo"
              className="h-8 w-auto object-contain"
            />
          </button>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            type="button"
            className="p-2 rounded-xl hover:bg-lightBlue transition text-heroBg"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="mt-3 border-t border-gray-200 pt-3">
            <div className="grid gap-2 text-sm font-medium text-heroBg">
              <button
                onClick={goToHero}
                type="button"
                className={`w-full text-left px-4 py-3 rounded-xl transition ${
                  isActive("/") ? "bg-heroBg text-white" : "hover:bg-lightBlue"
                }`}
              >
                Startseite
              </button>

              <Link
                to="/ueber-uns"
                className={`px-4 py-3 rounded-xl transition ${
                  isActive("/ueber-uns")
                    ? "bg-heroBg text-white"
                    : "hover:bg-lightBlue"
                }`}
              >
                Über uns
              </Link>

              <Link
                to="/standorte"
                className={`px-4 py-3 rounded-xl transition ${
                  isActive("/standorte")
                    ? "bg-heroBg text-white"
                    : "hover:bg-lightBlue"
                }`}
              >
                Standorte
              </Link>

              <Link
                to="/zertifikate"
                className={`px-4 py-3 rounded-xl transition ${
                  isActive("/zertifikate")
                    ? "bg-heroBg text-white"
                    : "hover:bg-lightBlue"
                }`}
              >
                Zertifikate
              </Link>

              <button
                onClick={goToContact}
                type="button"
                className="w-full text-left px-4 py-3 rounded-xl transition hover:bg-lightBlue"
              >
                Kontakt
              </button>

              <a
                href="tel:+4917641759351"
                className="mt-2 inline-flex items-center justify-center bg-heroBg text-white font-semibold px-4 py-3 rounded-xl shadow-md hover:opacity-90 transition"
              >
                Jetzt anrufen
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
