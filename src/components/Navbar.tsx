import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/", { state: { scrollToContact: true } });
  };

  return (
    <header className="bg-heroBg text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between">
        <span className="font-bold">Azami Kfz-Gutachten</span>

        <nav className="flex gap-6">
          <button onClick={() => navigate("/")}>Startseite</button>
          <button onClick={() => navigate("/ueber-uns")}>Über uns</button>
          <button onClick={() => navigate("/standorte")}>Standorte</button>
          <button onClick={() => navigate("/zertifikate")}>Zertifikate</button>
          <button onClick={goToContact}>Kontakt</button>
        </nav>
      </div>
    </header>
  );
}
