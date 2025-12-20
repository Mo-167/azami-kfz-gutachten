import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

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

  const goToHero = async (e: React.MouseEvent) => {
    e.preventDefault();

    // Wenn wir nicht auf der Startseite sind: erst dahin navigieren
    if (location.pathname !== "/") {
      navigate("/");
      // danach zum Hero scrollen (DOM muss erst rendern)
      requestAnimationFrame(() => scrollToId("hero"));
      return;
    }

    // Wenn wir schon auf der Startseite sind: direkt scrollen
    scrollToId("hero");
  };

  const goToContact = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      requestAnimationFrame(() => scrollToId("contact"));
      return;
    }

    scrollToId("contact");
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="bg-white/90 backdrop-blur-md shadow-lg rounded-full px-6 py-3">
        <ul className="flex items-center gap-2 text-sm font-medium text-heroBg">
          {/* Startseite -> immer zum Hero */}
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
                isActive("/ueber-uns") ? "bg-heroBg text-white" : "hover:bg-lightBlue"
              }`}
            >
              Über uns
            </Link>
          </li>

          <li>
            <Link
              to="/standorte"
              className={`px-4 py-2 rounded-full transition ${
                isActive("/standorte") ? "bg-heroBg text-white" : "hover:bg-lightBlue"
              }`}
            >
              Standorte
            </Link>
          </li>

          <li>
            <Link
              to="/zertifikate"
              className={`px-4 py-2 rounded-full transition ${
                isActive("/zertifikate") ? "bg-heroBg text-white" : "hover:bg-lightBlue"
              }`}
            >
              Zertifikate
            </Link>
          </li>

          {/* Kontakt -> immer zum Kontaktbereich */}
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
    </header>
  );
}
