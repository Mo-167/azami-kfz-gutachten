import Hero from "../components/Hero";
import Leitfaden from "../components/Leitfaden";
import Wir from "../components/Wir";

import Services from "../components/Services";
import Examples from "../components/Examples";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";


export default function Home() {
  return (
    <>

      {/* 1) Hero */}
      <Hero />

      {/* 2) Leitfaden */}
      <Leitfaden />

      {/* 3) Wir */}
      <Wir />

      {/* 5) Unsere Leistungen */}
      <Services />

      {/* 6) Fallbeispiele */}
      <Examples />

      {/* 7) Zertifikate */}
      <Certificates />

      {/* 8) Kontaktaufnahme */}
      <Contact />
    </>
  );
}
