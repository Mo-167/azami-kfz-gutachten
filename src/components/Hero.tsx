import { ArrowRight, PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-heroBg py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Textbereich */}
        <div>

          {/* Testbox – kannst du später entfernen */}
          <div className="w-20 h-20 bg-heroBg mb-4"></div>

          <h1
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
            data-aos="fade-up"
          >
            Kfz-Gutachten <br /> vom Experten
          </h1>

          <p
            className="text-lg text-gray-200 mt-6"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Unkompliziert. Transparent. Schnell.
            Wir erstellen Unfall- und Wertgutachten für Ihr Fahrzeug – zuverlässig und unabhängig.
          </p>

          {/* Buttons */}
          <div
            className="mt-8 flex gap-4"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <a
              href="#contact"
              className="bg-lightBlue text-heroBg px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-white transition"
            >
              Jetzt anfragen <ArrowRight size={20} />
            </a>

            <a
              href="tel:+4915792324981"
              className="bg-white border border-gray-300 px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-100 transition text-heroBg"
            >
              <PhoneCall size={20} /> Anrufen
            </a>
          </div>
        </div>

        {/* Bildbereich */}
        <div
          className="relative"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img
            src="/murtaza.jpg"
            alt="Kfz Gutachten"
            className="w-full h-72 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
