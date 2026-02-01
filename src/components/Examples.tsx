export default function Examples() {
  // Beispielbilder (später durch echte ersetzen)
  const images = [
    "/example1.jpg",
    "/example2.jpg",
    "/example3.jpg",
    "/example4.jpg",
    "/example5.jpg",
    "/example6.jpg",
  ];

  return (
    <section
      id="examples"
      className="pt-6 py-10 md:pt-32 md:py-12 px-4 bg-gray-100"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Headline */}
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-900"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Beispielgutachten & Arbeiten
        </h2>

        <p
          className="text-gray-600 mt-4 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="800"
        >
          Ein Einblick in unsere tägliche Arbeit: professionelle Dokumentation
          von Schäden und präzise Bewertung von Fahrzeugen.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-16">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative w-full h-56 md:h-64 bg-gray-200 rounded-xl overflow-hidden shadow-lg group"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              data-aos-duration="900"
            >
              {/* Bild */}
              <img
                src={img}
                alt={`Beispiel ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />

              {/* Overlay Text */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white font-semibold text-lg">
                  Beispiel {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
