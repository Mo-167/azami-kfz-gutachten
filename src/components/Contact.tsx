import { PhoneCall, Mail, MapPin, Clock3, Info } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-sectionBg">
      <div className="max-w-6xl mx-auto">
        {/* Überschrift */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-heroBg">
            Kontakt aufnehmen
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Vereinbaren Sie einen Termin oder kontaktieren Sie uns für eine
            kostenlose Erstberatung.
          </p>
        </div>

        {/* Hauptbereich: links Kontaktkarte, rechts Formular */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 items-stretch">
          {/* Linke Kontaktkarte */}
          <div
            className="bg-heroBg text-white rounded-2xl p-8 md:p-10 shadow-lg flex flex-col gap-6"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-semibold">Direkter Kontakt</h3>

            <div className="space-y-5 text-sm md:text-base">
              {/* Telefon */}
              <div className="flex gap-4">
                <div className="mt-1">
                  <PhoneCall className="text-iconBlue" />
                </div>
                <div>
                  <p className="font-semibold">Telefon</p>
                  <p className="text-gray-200">+49 176 41759351</p>
                  <p className="text-xs text-gray-400 mt-1">
                    24/7 Notfall-Hotline
                  </p>
                </div>
              </div>

              {/* E-Mail */}
              <div className="flex gap-4">
                <div className="mt-1">
                  <Mail className="text-iconBlue" />
                </div>
                <div>
                  <p className="font-semibold">E-Mail</p>
                  <p className="text-gray-200">info@azami-gutachten.de</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Antwort in der Regel innerhalb von 2&nbsp;Stunden
                  </p>
                </div>
              </div>

              {/* Standort */}
              <div className="flex gap-4">
                <div className="mt-1">
                  <MapPin className="text-iconBlue" />
                </div>
                <div>
                  <p className="font-semibold">Standort</p>
                  <p className="text-gray-200">
                    München, Frankfurt am Main &amp; Hannover
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Mobil im gesamten Umkreis verfügbar
                  </p>
                </div>
              </div>

              {/* Öffnungszeiten */}
              <div className="flex gap-4">
                <div className="mt-1">
                  <Clock3 className="text-iconBlue" />
                </div>
                <div>
                  <p className="font-semibold">Öffnungszeiten</p>
                  <p className="text-gray-200">Mo–Fr: 08:00 – 22:00 Uhr</p>
                  <p className="text-gray-200">Sa-So: 09:00 – 20:00 Uhr</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Notfälle: nach Vereinbarung
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rechte Formular-Karte */}
          <div
            className="bg-white rounded-2xl p-8 md:p-10 shadow-lg"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-semibold text-heroBg mb-6">
              Anfrage senden
            </h3>

            <form
              action="https://formspree.io/f/xpwvnjzz"
              method="POST"
              className="space-y-5"
            >
              {/* Vorname / Nachname */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Vorname *
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-iconBlue focus:border-iconBlue"
                    placeholder="Ihr Vorname"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nachname *
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-iconBlue focus:border-iconBlue"
                    placeholder="Ihr Nachname"
                    required
                  />
                </div>
              </div>

              {/* E-Mail / Telefon */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-iconBlue focus:border-iconBlue"
                    placeholder="Ihre E-Mail-Adresse"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-iconBlue focus:border-iconBlue"
                    placeholder="Ihre Telefonnummer"
                    required
                  />
                </div>
              </div>

              {/* Art des Gutachtens */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Art des Gutachtens *
                </label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-iconBlue focus:border-iconBlue"
                  defaultValue="unfall"
                  required
                >
                  <option value="unfall">Unfallgutachten</option>
                  <option value="wert">Wertgutachten</option>
                  <option value="schaden">Schadengutachten</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>

              {/* Nachricht */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nachricht *
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-iconBlue focus:border-iconBlue"
                  placeholder="Bitte beschreiben Sie kurz Ihr Anliegen..."
                  required
                ></textarea>
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <input
                  id="privacy"
                  type="checkbox"
                  className="mt-1 w-4 h-4 border-gray-300 rounded"
                  required
                />
                <label htmlFor="privacy">
                  Ich stimme der Verarbeitung meiner Daten gemäß der
                  Datenschutzerklärung zu. *
                </label>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full mt-2 bg-iconBlue text-white font-semibold py-3 rounded-lg hover:bg-heroBg transition"
              >
                Anfrage absenden
              </button>

              <p className="text-xs text-gray-500 mt-2 text-center">
                * Pflichtfelder – Wir melden uns in der Regel innerhalb von 2&nbsp;Stunden bei Ihnen.
              </p>
            </form>
          </div>
        </div>

        {/* Hinweis-Box unten */}
        <div
          className="mt-10 bg-lightBlue rounded-2xl p-6 md:p-8 shadow-sm"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-2 text-heroBg">
            <Info className="text-iconBlue" />
            <h3 className="text-lg md:text-xl font-semibold">
              Wichtige Hinweise
            </h3>
          </div>

          <ul className="mt-4 space-y-2 text-sm md:text-base text-gray-700 list-disc list-inside">
            <li>Kostenlose Erstberatung für Unfallgeschädigte</li>
            <li>Direktabrechnung mit Versicherungen möglich</li>
            <li>Vor-Ort-Termine in der Regel innerhalb von 24&nbsp;Stunden</li>
            <li>Gutachten in deutscher und englischer Sprache möglich</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
