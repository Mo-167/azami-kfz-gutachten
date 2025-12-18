import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ScrollToTarget() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const targetId = params.get("scrollTo");

    if (!targetId) return;

    let attempts = 0;
    const maxAttempts = 120;

    const tryScroll = () => {
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });

        // URL bereinigen
        params.delete("scrollTo");
        navigate(
          { pathname: location.pathname, search: params.toString() ? `?${params}` : "" },
          { replace: true }
        );
        return;
      }

      attempts++;
      if (attempts < maxAttempts) {
        requestAnimationFrame(tryScroll);
      }
    };

    tryScroll();
  }, [location, navigate]);

  return null;
}
