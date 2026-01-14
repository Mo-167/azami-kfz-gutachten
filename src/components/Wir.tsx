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
        <h2 className="text-3xl md:text-4xl font-bold text-heroBg leading-tight mb-2">
          Das Ingenieur- und Sachverständigenbüro Azami
        </h2>

        <h1 className="text-1xl md:text-1xl font-bold text-heroBg leading-tight mb-6">
            Zertifiziert · Unabhängig · Vor-Ort-Begutachtung · Rechtssicher für Versicherungen
        </h1>

        {/* Text */}
        <div className="max-w-3xl text-gray-600 leading-relaxed space-y-5">
          <p>
            Bei uns ist Ihr Kfz-Gutachten in den Händen eines zertifizierten Ingenieurs und unabhängigen Kfz-Sachverständigen. Wir stehen für höchste fachliche Kompetenz, präzise Schadenbewertung und objektive Fahrzeugbegutachtung - damit Sie Ihre Ansprüche gegenüber der Versicherung vollständig und rechtssicher durchsetzen können.
          </p>

          <p>
            Als unabhängiges Ingenieur- und Kfz-Sachverständigenbüro begleiten wir Sie zuverlässig von der ersten Kontaktaufnahme bis zur finalen Erstellung Ihres Unfallgutachtens. Unsere Arbeitsweise ist transparent, nachvollziehbar und konsequent auf Ihre Interessen ausgerichtet.
          </p>

          <p>
            Unser erfahrenes Team aus Kfz-Gutachtern und Ingenieuren erstellt detaillierte Schadengutachten, ermittelt Reparaturkosten, Wertminderungen und Nutzungsausfall und sorgt für eine vollständige Dokumentation - die Grundlage für eine erfolgreiche Schadenregulierung.
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
