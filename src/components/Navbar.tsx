import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-heroBg text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <Link to="/" className="font-bold text-lg">
          Azami Kfz-Gutachten
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm md:text-base">
          <Link to="/" className="hover:text-iconBlue transition">
            Startseite
          </Link>
          <Link to="/ueber-uns" className="hover:text-iconBlue transition">
            Über uns
          </Link>
          <Link to="/zertifikate" className="hover:text-iconBlue transition">
            Zertifikate
          </Link>
          <Link to="/faq" className="hover:text-iconBlue transition">
            FAQ
          </Link>

          {/* Kontakt ist ein Abschnitt auf der Startseite */}
          <a href="/#contact" className="hover:text-iconBlue transition">
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}
