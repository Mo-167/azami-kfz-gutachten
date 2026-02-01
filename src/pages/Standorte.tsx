export default function Standorte() {
  return (
    <div className="pt-32 py-10 md:pt-32 md:py-16 px-4 bg-white">
      <h1 className="text-3xl font-bold text-heroBg mb-6">
        Unsere Standorte
      </h1>

      <p className="text-gray-700 mb-6">
        Wir sind deutschlandweit für Sie im Einsatz. Unsere Schwerpunkte
        liegen aktuell in folgenden Regionen:
      </p>

      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>München & Umgebung</li>
        <li>Frankfurt am Main & Umgebung</li>
        <li>Hannover & Umgebung</li>
        <li>Weitere Standorte auf Anfrage</li>
      </ul>
    </div>
  );
}
