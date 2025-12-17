import Hero from "../components/Hero";
import Services from "../components/Services";
import Certificates from "../components/Certificates";
import Examples from "../components/Examples";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Certificates />
      <Examples />
      <Contact />
      <Footer />
    </>
  );
}
