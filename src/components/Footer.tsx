import { PhoneCall, Mail, MapPin, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-footerBg text-gray-300 pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* GRID: 4 SPALTEN */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* SPALTE 1 – LOGO + TEXT + SOCIAL */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="text-iconBlue" size={26} />
              <h3 className="text-white text-xl font-semibold">
                KFZ-Gutachten Pro
              </h3>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Ihr zertifizierter Partner für professionelle Kfz-Gutachten
              bundesweit. Schnell, zuverlässig und anerkannt.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                className="bg-[#1F2A3A] p-2 rounded-lg hover:bg-iconBlue transition"
              >
                <i className="fa-brands fa-facebook text-white"></i>
              </a>
              <a
                href="#"
                className="bg-[#1F2A3A] p-2 rounded-lg hover:bg-iconBlue transition"
              >
                <i className="fa-brands fa-twitter text-white"></i>
              </a>
              <a
                href="#"
                className="bg-[#1F2A3A] p-2 rounded-lg hover:bg-iconBlue transition"
              >
                <i className="fa-brands fa-linkedin-in text-white"></i>
              </a>
            </div>
          </div>

          {/* SPALTE 2 – SERVICES */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Unfallgutachten</li>
              <li>Wertgutachten</li>
              <li>Gebrauchtwagencheck</li>
              <li>Oldtimer-Gutachten</li>
              <li>Haftpflichtgutachten</li>
            </ul>
          </div>

          {/* SPALTE 3 – INFORMATIONEN */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Informationen</h4>
            <ul className="space-y-2 text-sm">
              <li>Über uns</li>
              <li>Zertifikate</li>
              <li>Referenzen</li>
              <li>FAQ</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* SPALTE 4 – KONTAKT */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Kontakt</h4>

            {/* Telefon */}
            <div className="flex gap-3 mb-4">
              <PhoneCall className="text-iconBlue" size={20} />
              <div>
                <p className="text-sm text-white">+49 (0) 1521 234 5678</p>
                <p className="text-xs text-gray-400">24/7 Hotline</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-3 mb-4">
              <Mail className="text-iconBlue" size={20} />
              <div>
                <p className="text-sm text-white">info@azami-gutachten.de</p>
              </div>
            </div>

            {/* Adresse */}
            <div className="flex gap-3">
              <MapPin className="text-iconBlue" size={20} />
              <div>
                <p className="text-sm text-white">Hauptstraße 123</p>
                <p className="text-sm text-white">12345 Berlin</p>
              </div>
            </div>
          </div>
        </div>

        {/* LINIE */}
        <div className="border-t border-gray-700 mt-12 pt-6"></div>

        {/* UNTERER BEREICH */}
        <div className="flex flex-col md:flex-row justify-between text-sm text-gray-500 gap-4">
          <p>© 2025 Azami KFZ-Gutachten. Alle Rechte vorbehalten.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Impressum</a>
            <a href="#" className="hover:text-white transition">Datenschutz</a>
            <a href="#" className="hover:text-white transition">AGB</a>
            <a href="#" className="hover:text-white transition">Cookie-Einstellungen</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
