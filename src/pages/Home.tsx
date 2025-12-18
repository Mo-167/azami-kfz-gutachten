import Hero from "../components/Hero";
import Services from "../components/Services";
import Certificates from "../components/Certificates";
import Examples from "../components/Examples";
import Contact from "../components/Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTarget = params.get("scroll");

    if (scrollTarget === "contact") {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Services />
      <Certificates />
      <Examples />
      <Contact />
    </>
  );
}