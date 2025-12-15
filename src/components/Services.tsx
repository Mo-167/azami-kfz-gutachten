import { FileCheck2, CarFront, ShieldCheck } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">Unsere Leistungen</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Als zertifizierter Kfz-Gutachter bieten wir Ihnen professionelle, unabhängige und schnelle Gutachten –
          ganz ohne Kostenrisiko für Unfallgeschädigte.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {/* LEISTUNG 1 */}
          <div className="p-8 rounded-xl shadow-lg bg-gray-50 hover:shadow-xl transition">
            <FileCheck2 size={48} className="text-blue-600 mx-auto" />
            <h3 className="text-2xl font-semibold mt-6">Unfallgutachten</h3>
            <p className="text-gray-600 mt-3">
              Detaillierte, unabhängige Gutachten nach einem Verkehrsunfall – für Versicherung, Werkstatt oder Anwalt.
            </p>
          </div>

          {/* LEISTUNG 2 */}
          <div className="p-8 rounded-xl shadow-lg bg-gray-50 hover:shadow-xl transition">
            <CarFront size={48} className="text-blue-600 mx-auto" />
            <h3 className="text-2xl font-semibold mt-6">Fahrzeugbewertung</h3>
            <p className="text-gray-600 mt-3">
              Professionelle Bewertung beim Kauf, Verkauf oder der Finanzierung Ihres Fahrzeugs.
            </p>
          </div>

          {/* LEISTUNG 3 */}
          <div className="p-8 rounded-xl shadow-lg bg-gray-50 hover:shadow-xl transition">
            <ShieldCheck size={48} className="text-blue-600 mx-auto" />
            <h3 className="text-2xl font-semibold mt-6">Beweissicherung</h3>
            <p className="text-gray-600 mt-3">
              Dokumentation von Schäden und Mängeln – ideal für Rechtsstreitigkeiten und Versicherungsfälle.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
