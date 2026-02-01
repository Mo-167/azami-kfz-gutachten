export default function FAQ() {
  return (
    <div className="pt-32 py-10 md:pt-32 md:py-16 px-4 bg-white">
      <h1 className="text-3xl font-bold text-heroBg mb-8">
        Häufige Fragen (FAQ)
      </h1>

      <div className="space-y-6 text-gray-700">
        <div>
          <h3 className="font-semibold text-lg">
            Was kostet ein Kfz-Gutachten?
          </h3>
          <p className="mt-2">
            Bei unverschuldeten Unfällen übernimmt in der Regel die gegnerische
            Versicherung die Kosten für das Gutachten.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">
            Wie schnell erhalte ich mein Gutachten?
          </h3>
          <p className="mt-2">
            In den meisten Fällen innerhalb von 5 Arbeitstagen nach der
            Besichtigung.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">
            Muss ich in eine Werkstatt kommen?
          </h3>
          <p className="mt-2">
            Nein. Wir sind mobil und begutachten Ihr Fahrzeug bei Ihnen vor Ort.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">
            Arbeiten Sie unabhängig von Versicherungen?
          </h3>
          <p className="mt-2">
            Ja. Wir arbeiten ausschließlich im Interesse unserer Kunden und
            sind nicht an Versicherungen gebunden.
          </p>
        </div>
      </div>
    </div>
  );
}
