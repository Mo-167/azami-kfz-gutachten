import { MapPin, SearchCheck, FileCheck } from "lucide-react";

export default function Leitfaden() {
  return (
    <section
      id="leitfaden"
      className="pt-10 py-10 md:pt-16 md:py-16 px-4 bg-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Headline */}
        <h2
          className="text-3xl md:text-4xl font-bold text-heroBg"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          So läuft es ab
        </h2>

        <p
          className="text-gray-600 mt-4 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="800"
        >
          In drei einfachen Schritten zum professionellen Kfz-Gutachten – schnell,
          unabhängig und direkt bei Ihnen vor Ort.
        </p>

        {/* GRID – wie Services */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-10 mt-8 md:mt-10">
          {/* STEP 1 */}
          <div
            className="p-6 md:p-8 rounded-xl shadow-lg bg-gray-50 hover:shadow-xl transition"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="900"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-lightBlue flex items-center justify-center">
              <MapPin size={48} className="text-blue-600" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mt-6 text-heroBg">
              1) Standort übermitteln
            </h3>
            <p className="text-gray-600 mt-3">
              Teilen Sie uns den Standort Ihres Fahrzeugs mit, damit wir schnell
              einen Termin für Ihr Kfz-Gutachten vereinbaren können. Unsere
              Kfz-Sachverständigen sind flexibel im Einsatz und kommen direkt zu
              Ihnen – egal ob Zuhause, am Arbeitsplatz oder in der Werkstatt.
            </p>
          </div>

          {/* STEP 2 */}
          <div
            className="p-6 md:p-8 rounded-xl shadow-lg bg-gray-50 hover:shadow-xl transition"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="900"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-lightBlue flex items-center justify-center">
              <SearchCheck size={48} className="text-blue-600" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mt-6 text-heroBg">
              2) Vor-Ort-Begutachtung
            </h3>
            <p className="text-gray-600 mt-3">
              Ein erfahrener und unabhängiger Kfz-Gutachter begutachtet Ihr
              Fahrzeug fachgerecht vor Ort. Dabei wird der Unfallschaden
              detailliert erfasst, um eine präzise und rechtssichere
              Schadenbewertung zu gewährleisten.
            </p>
          </div>

          {/* STEP 3 */}
          <div
            className="p-6 md:p-8 rounded-xl shadow-lg bg-gray-50 hover:shadow-xl transition"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="900"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-lightBlue flex items-center justify-center">
              <FileCheck size={48} className="text-blue-600" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mt-6 text-heroBg">
              3) Kfz-Gutachten erhalten
            </h3>
            <p className="text-gray-600 mt-3">
              Nach der Begutachtung erhalten Sie ein ausführliches
              Unfallgutachten inklusive aller Schäden, Reparaturkosten und
              Wertminderungen. Das Kfz-Gutachten dient als verlässliche Grundlage
              für die Abwicklung mit der Versicherung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
