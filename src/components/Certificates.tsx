import { Award, ShieldCheck, CheckCircle } from "lucide-react";

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">Zertifizierungen</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Als qualifizierter Kfz-Gutachter verfügen wir über anerkannte Schulungen und Zertifikate,
          die unsere Kompetenz und Zuverlässigkeit unterstreichen.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {/* Zertifikat 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition text-center">
            <Award size={48} className="text-blue-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-6">Zertifizierter Kfz-Gutachter</h3>
            <p className="text-gray-600 mt-3">
              Offiziell anerkannte Ausbildung nach aktuellen Standards.
            </p>
          </div>

          {/* Zertifikat 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition text-center">
            <ShieldCheck size={48} className="text-blue-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-6">Anerkannte Schadenanalyse</h3>
            <p className="text-gray-600 mt-3">
              Qualifikation zur Erstellung professioneller Schadengutachten.
            </p>
          </div>

          {/* Zertifikat 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition text-center">
            <CheckCircle size={48} className="text-blue-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-6">Sachkundige Fahrzeugbewertung</h3>
            <p className="text-gray-600 mt-3">
              Bewertung nach anerkannten marktüblichen Richtlinien.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
