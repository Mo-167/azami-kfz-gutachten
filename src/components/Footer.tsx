import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-heroBg text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* Oberer Bereich */}
        <div className="grid gap-8 md:grid-cols-4">

          {/* Firma */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Azami Kfz-Gutachten
            </h3>
            <p className="text-sm text-gray-300">
              Unabhängige Kfz-Gutachten, Unfallanalysen und
              Fahrzeugbewertungen – zuverlässig & transparent.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Unfallgutachten</li>
              <li>Wertgutachten</li>
              <li>Gebrauchtwagencheck</li>
              <li>Oldtimer-Gutachten</li>
              <li>Haftpflichtgutachten</li>
            </ul>
          </div>

          {/* Informationen */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Informationen
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/ueber-uns" className="hover:text-iconBlue transition">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/zertifikate" className="hover:text-iconBlue transition">
                  Zertifikate
                </Link>
              </li>
              <li>
                <Link to="/standorte" className="hover:text-iconBlue transition">
                  Standorte
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-iconBlue transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Kontakt
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Telefon: +49 176 41759351</li>
              <li>E-Mail: info@azami-gutachten.de</li>
              <li>Deutschlandweit mobil</li>
            </ul>
          </div>

        </div>

        {/* Trennlinie */}
        <div className="border-t border-white/10 mt-10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} Azami Kfz-Gutachten. Alle Rechte vorbehalten.
            </p>

            <div className="flex gap-4">
              <Link to="/impressum" className="hover:text-iconBlue transition">
                Impressum
              </Link>
              <Link to="/datenschutz" className="hover:text-iconBlue transition">
                Datenschutz
              </Link>
              <Link to="/agb" className="hover:text-iconBlue transition">
                AGB
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
