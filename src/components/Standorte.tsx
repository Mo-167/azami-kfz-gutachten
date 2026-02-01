import { MapPin } from "lucide-react";

export default function Standorte() {
  const standorte = [
    {
      city: "München (Umkreis +100 km)",
      neben: ["Augsburg", "Ingolstadt", "Landshut"],
    },
    {
      city: "Hannover (Umkreis +100 km)",
      neben: ["Braunschweig", "Hildesheim", "Göttingen"],
    },
    {
      city: "Frankfurt am Main (Umkreis +100 km)",
      neben: ["Hanau", "Offenbach am Main"],
    },
  ];

  return (
    <section className="pt-10 py-10 md:pt-16 md:py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-heroBg">
            Unsere Standorte
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Mit festen Standorten und flexiblen Einsatzgebieten sind wir
            deutschlandweit für Sie tätig.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-14 md:grid-cols-2 items-start">
          {/* Linke Seite – Karte */}
          <div
            className="flex justify-center"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <img
              src="/Standorte.png"
              alt="Deutschlandkarte mit Standorten"
              
            />
          </div>

          {/* Rechte Seite – Standort Cards */}
          <div className="grid gap-8">
            {standorte.map((standort, cardIndex) => (
              <div
                key={standort.city}
                data-aos="fade-up"
                data-aos-delay={cardIndex * 150}
                data-aos-duration="900"
                className="
                  bg-white rounded-2xl p-6
                  shadow-md
                  transition-all duration-300 ease-out
                  hover:shadow-xl
                  hover:-translate-y-1
                "
              >
                {/* Hauptstandort */}
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-iconBlue" size={22} />
                  <h3 className="text-xl font-bold text-heroBg">
                    {standort.city}
                  </h3>
                </div>

                {/* Nebenstandorte */}
                <div className="grid grid-cols-3 gap-4">
                  {standort.neben.map((ort, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center gap-2 text-gray-600 text-sm"
                      data-aos="fade-up"
                      data-aos-delay={cardIndex * 150 + (itemIndex + 1) * 80}
                      data-aos-duration="700"
                    >
                      <MapPin size={16} className="text-iconBlue" />
                      <span>{ort}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
