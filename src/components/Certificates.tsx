import { GraduationCap, Car, Zap } from "lucide-react";

export default function Certificates() {
  return (
    <section id="certificates" className="pt-10 py-10 md:pt-16 md:py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Headline */}
        <h2
          className="text-4xl font-bold text-gray-900"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Qualifikationen & Zertifizierungen
        </h2>

        <p
          className="text-gray-600 mt-4 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="800"
        >
          Fachliche Kompetenz, kontinuierliche Weiterbildung und anerkannte
          Qualifikationen bilden die Grundlage unserer sachverständigen Tätigkeit.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {/* Zertifikat 1 */}
          <div
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition text-center"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="900"
          >
            <GraduationCap size={48} className="text-blue-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-6">
              Zertifizierter Ingenieur (M. Sc.)
            </h3>
            <p className="text-gray-600 mt-3">
              Abgeschlossenes ingenieurwissenschaftliches Studium mit
              Masterabschluss sowie fundierter akademischer Ausbildung in
              technischen und analytischen Fachbereichen.
            </p>
          </div>

          {/* Zertifikat 2 */}
          <div
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition text-center"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="900"
          >
            <Car size={48} className="text-blue-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-6">
              Zertifizierter Kfz-Gutachter
            </h3>
            <p className="text-gray-600 mt-3">
              Anerkannte Qualifikation zur unabhängigen Erstellung von
              Kfz-Schadengutachten nach geltenden Richtlinien und Standards
              der Schadenregulierung.
            </p>
          </div>

          {/* Zertifikat 3 */}
          <div
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition text-center"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="900"
          >
            <Zap size={48} className="text-blue-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-6">
              Zertifizierter Ingenieur für E-Mobilität
            </h3>
            <p className="text-gray-600 mt-3">
              Spezialisierte Fachkenntnisse im Bereich Elektromobilität,
              Hochvolttechnik und moderner Fahrzeugantriebssysteme
              gemäß aktuellen technischen Standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
