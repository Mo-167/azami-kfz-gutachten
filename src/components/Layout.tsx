import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import ScrollToHash from "./ScrollToHash";

export default function Layout() {
  return (
    <>
      {/* 🔹 Platzhalter für späteres Logo */}
      {/* 
      <div className="flex justify-center py-6">
        <img src="/logo.svg" alt="Azami Kfz-Gutachten Logo" className="h-16" />
      </div>
      */}

      <Navbar />
      <ScrollToTop />
      <ScrollToHash />

      <main className="w-full min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
