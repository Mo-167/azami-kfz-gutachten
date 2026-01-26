import { useEffect, useMemo, useState } from "react";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
};

const STORAGE_KEY = "cookieConsent.v1";

function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Consent;
    if (typeof parsed !== "object" || parsed === null) return null;
    if (parsed.necessary !== true) return null;
    if (typeof parsed.analytics !== "boolean") return null;
    if (typeof parsed.marketing !== "boolean") return null;
    if (typeof parsed.timestamp !== "number") return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeConsent(consent: Consent) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(
    new CustomEvent("cookie-consent-updated", { detail: consent })
  );
}

export default function CookieBanner() {
  const existing = useMemo(() => (typeof window !== "undefined" ? readConsent() : null), []);
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [analytics, setAnalytics] = useState(existing?.analytics ?? false);
  const [marketing, setMarketing] = useState(existing?.marketing ?? false);

  useEffect(() => {
    // Banner nur zeigen, wenn noch keine Entscheidung gespeichert wurde
    const consent = readConsent();
    setIsBannerVisible(!consent);

    // Banner/Modal per Link im Footer wieder öffnen (Cookie-Einstellungen)
    const onOpen = () => {
      const current = readConsent();
      setAnalytics(current?.analytics ?? false);
      setMarketing(current?.marketing ?? false);
      setIsModalOpen(true);
      setIsBannerVisible(false);
    };

    window.addEventListener("open-cookie-settings", onOpen as EventListener);
    return () => {
      window.removeEventListener("open-cookie-settings", onOpen as EventListener);
    };
  }, []);

  const acceptAll = () => {
    writeConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
    });
    setIsModalOpen(false);
    setIsBannerVisible(false);
  };

  const acceptNecessaryOnly = () => {
    writeConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
    });
    setIsModalOpen(false);
    setIsBannerVisible(false);
  };

  const saveSettings = () => {
    writeConsent({
      necessary: true,
      analytics,
      marketing,
      timestamp: Date.now(),
    });
    setIsModalOpen(false);
    setIsBannerVisible(false);
  };

  if (!isBannerVisible && !isModalOpen) return null;

  return (
    <>
      {/* Banner */}
      {isBannerVisible && (
        <div className="fixed inset-x-0 bottom-0 z-50">
          <div className="mx-auto max-w-6xl px-4 pb-4">
            <div className="rounded-2xl bg-white shadow-lg border border-gray-200 p-5 md:p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="text-sm text-gray-600 leading-relaxed">
                  <span className="font-semibold text-heroBg">Cookies & Datenschutz:</span>{" "}
                  Wir verwenden notwendige Cookies, um die Website sicher und
                  zuverlässig bereitzustellen. Optionale Cookies helfen uns,
                  Inhalte zu verbessern. Details finden Sie in unserer{" "}
                  <a href="/datenschutz" className="font-semibold text-heroBg underline">
                    Datenschutzerklärung
                  </a>.
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(true);
                      setIsBannerVisible(false);
                    }}
                    className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                  >
                    Einstellungen
                  </button>

                  <button
                    type="button"
                    onClick={acceptNecessaryOnly}
                    className="px-5 py-2 rounded-lg bg-lightBlue text-heroBg font-semibold hover:opacity-90 transition"
                  >
                    Nur notwendige
                  </button>

                  <button
                    type="button"
                    onClick={acceptAll}
                    className="px-5 py-2 rounded-lg bg-heroBg text-white font-semibold hover:opacity-90 transition"
                  >
                    Alle akzeptieren
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal / Einstellungen */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => {
              // Wenn noch keine Entscheidung existiert, zurück zum Banner
              const consent = readConsent();
              setIsModalOpen(false);
              setIsBannerVisible(!consent);
            }}
          />

          <div className="relative w-[92vw] max-w-2xl rounded-2xl bg-white shadow-xl border border-gray-200 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-heroBg">
                  Cookie-Einstellungen
                </h2>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Sie entscheiden, welche optionalen Cookies verwendet werden.
                  Notwendige Cookies sind für den Betrieb der Website erforderlich.
                </p>
              </div>

              <button
                type="button"
                className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                onClick={() => {
                  const consent = readConsent();
                  setIsModalOpen(false);
                  setIsBannerVisible(!consent);
                }}
              >
                Schließen
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {/* Notwendig */}
              <div className="rounded-xl bg-sectionBg p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="font-semibold text-heroBg">Notwendig</div>
                    <div className="text-sm text-gray-600">
                      Für grundlegende Funktionen, Sicherheit und Darstellungsfehler.
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-gray-500">
                    Immer aktiv
                  </div>
                </div>
              </div>

              {/* Analytics */}
              <div className="rounded-xl bg-white p-4 border border-gray-200">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="font-semibold text-heroBg">Statistik</div>
                    <div className="text-sm text-gray-600">
                      Hilft uns zu verstehen, wie die Website genutzt wird (z. B. Reichweite).
                      Wird aktuell nur verwendet, wenn Sie zustimmen.
                    </div>
                  </div>

                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-5 w-5 accent-heroBg"
                      checked={analytics}
                      onChange={(e) => setAnalytics(e.target.checked)}
                    />
                    <span className="text-sm text-gray-700">Aktiv</span>
                  </label>
                </div>
              </div>

              {/* Marketing */}
              <div className="rounded-xl bg-white p-4 border border-gray-200">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="font-semibold text-heroBg">Marketing</div>
                    <div className="text-sm text-gray-600">
                      Personalisierte Inhalte/Tracking über Drittanbieter (z. B. Ads).
                      Wird aktuell nur verwendet, wenn Sie zustimmen.
                    </div>
                  </div>

                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-5 w-5 accent-heroBg"
                      checked={marketing}
                      onChange={(e) => setMarketing(e.target.checked)}
                    />
                    <span className="text-sm text-gray-700">Aktiv</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:justify-end">
              <button
                type="button"
                onClick={acceptNecessaryOnly}
                className="px-5 py-2 rounded-lg bg-lightBlue text-heroBg font-semibold hover:opacity-90 transition"
              >
                Nur notwendige
              </button>

              <button
                type="button"
                onClick={acceptAll}
                className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                Alle akzeptieren
              </button>

              <button
                type="button"
                onClick={saveSettings}
                className="px-5 py-2 rounded-lg bg-heroBg text-white font-semibold hover:opacity-90 transition"
              >
                Speichern
              </button>
            </div>

            <p className="mt-4 text-xs text-gray-500 leading-relaxed">
              Sie können Ihre Auswahl jederzeit über „Cookie-Einstellungen“ im Footer ändern.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
