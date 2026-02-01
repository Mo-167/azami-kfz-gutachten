import { PhoneCall, Mail, MapPin, Clock3, Info } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="pt-10 py-10 md:pt-16 md:py-16 px-4 bg-sectionBg">
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

        {/* Hauptbereich */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 items-stretch">
          {/* Linke Kontaktkarte */}
          <div
            className="bg-heroBg text-white rounded-2xl p-8 md:p-10 shadow-lg flex flex-col gap-6"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-semibold">Direkter Kontakt</h3>

            <div className="space-y-5 text-sm md:text-base">
              <div className="flex gap-4">
                <PhoneCall className="text-iconBlue mt-1" />
                <div>
                  <p className="font-semibold">Telefon</p>
                  <p className="text-gray-200">+49 176 41759351</p>
                  <p className="text-xs text-gray-400 mt-1">
                    24/7 Notfall-Hotline
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-iconBlue mt-1" />
                <div>
                  <p className="font-semibold">E-Mail</p>
                  <p className="text-gray-200">info@azami-gutachten.de</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Antwort in der Regel innerhalb von 2 Stunden
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-iconBlue mt-1" />
                <div>
                  <p className="font-semibold">Standort</p>
                  <p className="text-gray-200">München &amp; Hannover</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Mobil im gesamten Umkreis verfügbar
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock3 className="text-iconBlue mt-1" />
                <div>
                  <p className="font-semibold">Öffnungszeiten</p>
                  <p className="text-gray-200">Mo–Fr: 08:00 – 22:00 Uhr</p>
                  <p className="text-gray-200">Sa–So: 09:00 – 20:00 Uhr</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Notfälle: nach Vereinbarung
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formular */}
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
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Vorname *
                  </label>
                  <input
                    type="text"
                    name="Vorname"
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-iconBlue"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nachname *
                  </label>
                  <input
                    type="text"
                    name="Nachname"
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-iconBlue"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    name="Email"
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-iconBlue"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    name="Telefon"
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-iconBlue"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Art des Gutachtens *
                </label>
                <select
                  name="Gutachten"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-iconBlue"
                >
                  <option>Unfallgutachten</option>
                  <option>Wertgutachten</option>
                  <option>Schadengutachten</option>
                  <option>Sonstiges</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nachricht *
                </label>
                <textarea
                  name="Message"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 h-28 resize-none focus:ring-2 focus:ring-iconBlue"
                />
              </div>

              {/* DSGVO Checkbox */}
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <input
                  type="checkbox"
                  name="datenschutz"
                  required
                  className="mt-1 accent-heroBg"
                />
                <span>
                  Ich habe die{" "}
                  <a
                    href="/datenschutz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-heroBg underline font-medium"
                  >
                    Datenschutzerklärung
                  </a>{" "}
                  gelesen und stimme der Verarbeitung meiner personenbezogenen
                  Daten zur Bearbeitung meiner Anfrage zu.
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-heroBg text-white font-semibold py-3 rounded-lg hover:bg-heroBg transition"
              >
                Anfrage absenden
              </button>

              <p className="text-xs text-gray-500 text-center">
                * Pflichtfelder – Wir melden uns in der Regel innerhalb von 2 Stunden.
              </p>
            </form>
          </div>
        </div>

        {/* Hinweisbox */}
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
            <li>Vor-Ort-Termine in der Regel innerhalb von 24 Stunden</li>
            <li>Gutachten in deutscher und englischer Sprache möglich</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
