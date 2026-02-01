import { ArrowRight, PhoneCall, Clock3 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-32 py-10 md:pt-32 md:py-16 px-4 bg-heroBg scroll-mt-32"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-10 items-center">
        {/* Textbereich */}
        <div>
          {/* Logo – NUR Desktop */}
          <div
            className="hidden md:block mb-6"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <img
              src="/Logo_weiß.png"
              alt="Azami Kfz-Gutachten Logo"
              className="h-32 w-auto object-contain"
            />
          </div>

          <h1
            className="text-4xl md:text-4xl font-bold text-white leading-tight"
            data-aos="fade-up"
          >
            Kfz-Gutachten vom Experten
          </h1>

          <p
            className="text-lg text-gray-200 mt-6"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Unkompliziert. Transparent. Schnell. Wir erstellen Unfall- und
            Wertgutachten für Ihr Fahrzeug – zuverlässig und unabhängig.
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
              href="tel:+4917641759351"
              className="bg-white border border-gray-300 px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-100 transition text-heroBg"
            >
              <PhoneCall size={20} /> Anrufen
            </a>
          </div>
          
          {/* 24/7 Hinweis */}
          <div
            className="mt-4 flex items-center gap-2 text-sm text-gray-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Clock3 size={16} className="text-lightBlue" />
            <span>
              <strong className="text-white">24/7 erreichbar</strong> – auch an Wochenenden
              & Feiertagen
            </span>
          </div>


        </div>



        {/* Videobereich */}
        <div className="relative" data-aos="fade-left" data-aos-delay="200">
          <video
            className="w-full h-72 md:h-96 object-cover rounded-xl shadow-lg"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/UeberUns-Murtaza.png"
          >
            <source src="/Hero-Clip.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
