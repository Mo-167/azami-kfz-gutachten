export default function Impressum() {
  return (
    <section className="pt-32 py-10 md:pt-32 md:py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-heroBg mb-8">
          Impressum
        </h1>

        <div className="text-gray-700 leading-relaxed space-y-6">

          <p>
            Angaben gemäß § 5 Telemediengesetz (TMG)
          </p>

          <div className="bg-sectionBg rounded-xl p-6 text-heroBg">
            <p className="font-semibold">
              Ingenieur- und Sachverständigenbüro Azami
            </p>
            <p>Murtaza Azami</p>
            <p>[Straße Hausnummer]</p>
            <p>[PLZ Ort]</p>
            <p className="mt-4">
              Telefon: +49 176 41759351<br />
              E-Mail: info@azami-gutachten.de
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-heroBg mb-2">
              Berufsbezeichnung
            </h2>
            <p>
              Ingenieur (M. Sc.)<br />
              Zertifizierter Kfz-Sachverständiger
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-heroBg mb-2">
              Berufsrechtliche Angaben
            </h2>
            <p>
              Berufsbezeichnung verliehen in der Bundesrepublik Deutschland.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-heroBg mb-2">
              Umsatzsteuer
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              <span className="italic">[falls vorhanden eintragen, sonst entfernen]</span>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-heroBg mb-2">
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
              auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte
              oder gespeicherte fremde Informationen zu überwachen oder nach
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
              hinweisen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-heroBg mb-2">
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
              fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
              der Seiten verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-heroBg mb-2">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
