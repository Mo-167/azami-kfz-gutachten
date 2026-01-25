export default function Wir() {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Übergeordnete Headline (zentriert über beide Bereiche) */}
        <div
          className="text-center mb-14"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-heroBg leading-tight mb-2">
            Das Ingenieur- und Sachverständigenbüro Azami
          </h2>

          <p
            className="text-base md:text-lg font-semibold text-heroBg"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="800"
          >
            Zertifiziert · Unabhängig · Vor-Ort-Begutachtung · Rechtssicher für
            Versicherungen
          </p>
        </div>

        {/* Inhalt: 2 Spalten */}
        <div className="grid gap-14 md:grid-cols-2 items-center">
          {/* Linke Seite – Text */}
          <div
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="100"
          >
            <div className="text-gray-600 leading-relaxed space-y-5">
              <p>
                Bei uns ist Ihr Kfz-Gutachten in den Händen eines zertifizierten
                Ingenieurs und unabhängigen Kfz-Sachverständigen. Wir stehen für
                höchste fachliche Kompetenz, präzise Schadenbewertung und
                objektive Fahrzeugbegutachtung – damit Sie Ihre Ansprüche
                gegenüber der Versicherung vollständig und rechtssicher
                durchsetzen können.
              </p>

              <p>
                Als unabhängiges Ingenieur- und Kfz-Sachverständigenbüro
                begleiten wir Sie zuverlässig von der ersten Kontaktaufnahme bis
                zur finalen Erstellung Ihres Unfallgutachtens. Unsere
                Arbeitsweise ist transparent, nachvollziehbar und konsequent auf
                Ihre Interessen ausgerichtet.
              </p>

              <p>
                Unser erfahrenes Team aus Kfz-Gutachtern und Ingenieuren erstellt
                detaillierte Schadengutachten, ermittelt Reparaturkosten,
                Wertminderungen und Nutzungsausfall und sorgt für eine
                vollständige Dokumentation – die Grundlage für eine erfolgreiche
                Schadenregulierung.
              </p>
            </div>

            {/* Button */}
            <div
              className="mt-10"
              data-aos="zoom-in"
              data-aos-delay="250"
              data-aos-duration="800"
            >
              <a
                href="#contact"
                className="inline-block bg-heroBg hover:opacity-90 transition text-white font-semibold px-8 py-4 rounded-lg shadow-md"
              >
                Jetzt Rückruf anfordern
              </a>
            </div>
          </div>

          {/* Rechte Seite – Bild */}
          <div
            className="flex justify-center"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="150"
          >
            <img
              src="/UeberUns-Murtaza.png"
              alt="Ingenieur- und Sachverständigenbüro Azami – Murtaza Azami"
              className="w-full max-w-[300px] h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
