import { MapPin, SearchCheck, FileCheck } from "lucide-react";

type Step = {
  number: string;
  title: string;
  text: string;
  icon: React.ElementType;
};

function Leitfaden() {
  const steps: Step[] = [
    {
      number: "01",
      title: "Standort übermitteln",
      text:
        "Teilen Sie uns den Standort Ihres Fahrzeugs mit, damit wir schnell einen Termin für Ihr Kfz-Gutachten vereinbaren können. Unsere Kfz-Sachverständigen sind flexibel im Einsatz und kommen direkt zu Ihnen – egal ob Zuhause, am Arbeitsplatz oder in der Werkstatt.",
      icon: MapPin,
    },
    {
      number: "02",
      title: "Vor-Ort-Begutachtung",
      text:
        "Ein erfahrener und unabhängiger Kfz-Gutachter begutachtet Ihr Fahrzeug fachgerecht vor Ort. Dabei wird der Unfallschaden detailliert erfasst, um eine präzise und rechtssichere Schadenbewertung zu gewährleisten.",
      icon: SearchCheck,
    },
    {
      number: "03",
      title: "Kfz-Gutachten erhalten",
      text:
        "Nach der Begutachtung erhalten Sie ein ausführliches Unfallgutachten inklusive aller Schäden, Reparaturkosten und Wertminderungen. Das Kfz-Gutachten dient als verlässliche Grundlage für die Abwicklung mit der Versicherung.",
      icon: FileCheck,
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <div
          className="text-center mb-14"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-heroBg">
            So läuft es ab
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            In drei einfachen Schritten zum professionellen Kfz-Gutachten – schnell,
            unabhängig und direkt bei Ihnen vor Ort.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="900"
              className="
                bg-white rounded-2xl shadow-lg px-8 py-12 text-center
                transition-transform duration-300 ease-out
                hover:scale-[1.03]
                hover:shadow-xl
              "
            >
              {/* Nummer */}
              <div className="text-2xl font-extrabold text-iconBlue mb-4">
                {step.number}
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div
                  className="
                    w-16 h-16 rounded-3xl bg-lightBlue
                    flex items-center justify-center
                    transition-transform duration-300 ease-out
                    hover:scale-110
                  "
                >
                  <step.icon
                    size={34}
                    className="text-heroBg"
                    strokeWidth={1.6}
                  />
                </div>
              </div>

              {/* Titel */}
              <h3 className="text-2xl font-bold text-heroBg mb-4">
                {step.title}
              </h3>

              {/* Text */}
              <p className="text-gray-600 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leitfaden;
