export default function Wir() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Line + Subtitle */}
        <div className="flex items-center gap-4 mb-6">
          <span className="block w-14 h-[3px] bg-iconBlue" />
          <span className="uppercase tracking-widest text-sm font-semibold text-iconBlue">
            Kfz Sachverständiger & Schadensgutachter
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-heroBg leading-tight mb-6">
          Ihr Kfz Gutachten in den Händen eines Ingenieurs
        </h2>

        {/* Text */}
        <div className="max-w-3xl text-gray-600 leading-relaxed space-y-5">
          <p>
            Bei uns stehen Qualität und Fachkompetenz bei jedem Gutachten an
            erster Stelle. Vertrauen Sie auf unsere langjährige Expertise im
            Kfz-Bereich, bestätigt durch anerkannte Prüfstellen und regelmäßige
            fachliche Weiterbildungen.
          </p>

          <p>
            Als unabhängiges Ingenieur- und Sachverständigenbüro begleiten wir
            Sie professionell, transparent und zuverlässig – von der ersten
            Kontaktaufnahme bis zur finalen Gutachtenerstellung.
          </p>

          <p>
            Unser erfahrenes Team aus Ingenieuren und Experten steht für höchste
            Präzision, Objektivität und Verlässlichkeit bei der Bewertung und
            Begutachtung von Fahrzeugschäden.
          </p>
        </div>

        {/* Button */}
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-block bg-heroBg hover:opacity-90 transition text-white font-semibold px-8 py-4 rounded-lg shadow-md"
          >
            Jetzt Rückruf anfordern
          </a>
        </div>
      </div>
    </section>
  );
}
