import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);

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

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-6xl">
      {/* DESKTOP NAVBAR */}
      <nav className="hidden md:block bg-white/90 backdrop-blur-md shadow-lg rounded-full px-6 py-3">
        <ul className="flex items-center justify-center gap-2 text-sm font-medium text-heroBg">
          <li>
            <button
              onClick={goToHero}
              className={`px-4 py-2 rounded-full transition ${
                isActive("/") ? "bg-heroBg text-white" : "hover:bg-lightBlue"
              }`}
              type="button"
            >
              Startseite
            </button>
          </li>

          <li>
            <Link
              to="/ueber-uns"
              className={`px-4 py-2 rounded-full transition ${
                isActive("/ueber-uns")
                  ? "bg-heroBg text-white"
                  : "hover:bg-lightBlue"
              }`}
            >
              Über uns
            </Link>
          </li>

          <li>
            <Link
              to="/standorte"
              className={`px-4 py-2 rounded-full transition ${
                isActive("/standorte")
                  ? "bg-heroBg text-white"
                  : "hover:bg-lightBlue"
              }`}
            >
              Standorte
            </Link>
          </li>

          <li>
            <Link
              to="/zertifikate"
              className={`px-4 py-2 rounded-full transition ${
                isActive("/zertifikate")
                  ? "bg-heroBg text-white"
                  : "hover:bg-lightBlue"
              }`}
            >
              Zertifikate
            </Link>
          </li>

          <li>
            <button
              onClick={goToContact}
              className="px-4 py-2 rounded-full transition hover:bg-lightBlue"
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
          {/* "Logo" / Brand */}
          <button
            onClick={goToHero}
            type="button"
            className="text-heroBg font-semibold"
            aria-label="Zur Startseite"
          >
            Azami
          </button>

          {/* Hamburger */}
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

        {/* Mobile Menü Panel */}
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

              {/* CTA Button im Mobile Menü */}
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
