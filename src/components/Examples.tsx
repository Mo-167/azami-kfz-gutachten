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
    <section id="examples" className="py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">Beispielgutachten & Arbeiten</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Ein Einblick in unsere tägliche Arbeit: professionelle Dokumentation von Schäden
          und präzise Bewertung von Fahrzeugen.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative w-full h-64 bg-gray-200 rounded-xl overflow-hidden shadow-lg group"
            >
              {/* Platzhalter – Bild wird angezeigt, sobald du echte Bilder hochlädst */}
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
