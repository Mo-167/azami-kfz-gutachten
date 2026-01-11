import { Search } from "lucide-react";

type Step = {
  number: string;
  title: string;
  text: string;
};

function Leitfaden() {
  const steps: Step[] = [
    {
      number: "01",
      title: "Standort mitteilen",
      text:
        "Teilen Sie uns den genauen Standort Ihres Fahrzeugs mit, damit wir die Begutachtung planen können. Dies ermöglicht uns, schnell und effizient einen Termin für Sie zu koordinieren.",
    },
    {
      number: "02",
      title: "Begutachtung vor Ort",
      text:
        "Unser Sachverständiger wird Ihr Fahrzeug vor Ort begutachten, um den Schaden präzise zu beurteilen. Dies gewährleistet eine genaue und gründliche Analyse aller relevanten Faktoren.",
    },
    {
      number: "03",
      title: "Gutachten erhalten",
      text:
        "Nach der Begutachtung erhalten Sie ein ausführliches Kfz-Gutachten, das alle festgestellten Schäden und Bewertungen enthält. Das Gutachten dient als Grundlage für Ihre Versicherung.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-[2.5rem] shadow-lg px-8 py-12 md:px-14 md:py-16">
          <div className="grid gap-12 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number}>
                <div className="relative w-20 h-20">
                  <div className="w-20 h-20 rounded-full bg-gray-100 shadow flex items-center justify-center">
                    <Search size={32} className="text-gray-400" />
                  </div>
                  <span className="absolute inset-0 flex items-center justify-center font-bold text-red-500">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Leitfaden;
