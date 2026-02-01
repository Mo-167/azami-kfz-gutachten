import { FileCheck2, CarFront, ShieldCheck } from "lucide-react";

export default function Services() {
  return (
    <section
      id="services"
      className="pt-10 py-10 md:pt-16 md:py-16 px-4 bg-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Headline */}
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-900"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Unsere Leistungen
        </h2>

        <p
          className="text-gray-600 mt-4 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="800"
        >
          Als zertifizierter Kfz-Gutachter bieten wir Ihnen professionelle,
          unabhängige und schnelle Gutachten – ganz ohne Kostenrisiko für
          Unfallgeschädigte.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-10 mt-10 md:mt-16">
          {/* LEISTUNG 1 – Haftpflicht Gutachten */}
          <div
            className="
              p-6 md:p-8 rounded-xl shadow-lg bg-gray-50
              transition-all duration-300 ease-out
              hover:shadow-xl hover:-translate-y-1
            "
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="900"
          >
            <img
              src="/Service-Haftpflicht.png"
              alt="Haftpflicht Gutachten"
              className="mx-auto mb-5 md:mb-6 h-40 object-contain rounded-2xl shadow-md"
            />

            <h3 className="flex items-center justify-center gap-3 text-xl md:text-2xl font-semibold text-heroBg">
              <FileCheck2 size={26} className="text-blue-600" />
              Haftpflicht Gutachten
            </h3>

            <p className="text-gray-600 mt-3">
              Detaillierte, unabhängige Gutachten nach einem Verkehrsunfall – für
              die Durchsetzung Ihrer Ansprüche gegenüber der gegnerischen
              Versicherung.
            </p>
          </div>

          {/* LEISTUNG 2 – Oldtimer Gutachten (Coming Soon) */}
          <div
            className="
              p-6 md:p-8 rounded-xl shadow-md bg-gray-100
              opacity-60 cursor-not-allowed
            "
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="900"
          >
            <img
              src="/Service-Oldtimer.png"
              alt="Oldtimer Gutachten"
              className="mx-auto mb-5 md:mb-6 h-40 object-contain grayscale rounded-2xl shadow-md"
            />

            <h3 className="flex items-center justify-center gap-3 text-xl md:text-2xl font-semibold text-gray-500">
              <ShieldCheck size={26} className="text-gray-400" />
              Oldtimer Gutachten
            </h3>

            <p className="text-gray-500 mt-3">
              Wert- und Zustandsbewertungen für Oldtimer und klassische Fahrzeuge
              – in naher Zukunft verfügbar.
            </p>
          </div>

          {/* LEISTUNG 3 – Fahrzeugbewertung */}
          <div
            className="
              p-6 md:p-8 rounded-xl shadow-lg bg-gray-50
              transition-all duration-300 ease-out
              hover:shadow-xl hover:-translate-y-1
            "
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="900"
          >
            <img
              src="/Service-Fahrzeugbewertung.png"
              alt="Fahrzeugbewertung"
              className="mx-auto mb-5 md:mb-6 h-40 object-contain rounded-2xl shadow-md"
            />

            <h3 className="flex items-center justify-center gap-3 text-xl md:text-2xl font-semibold text-heroBg">
              <CarFront size={26} className="text-blue-600" />
              Fahrzeugbewertung
            </h3>

            <p className="text-gray-600 mt-3">
              Professionelle Bewertung beim Kauf, Verkauf oder der Finanzierung
              Ihres Fahrzeugs – objektiv und marktgerecht.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
