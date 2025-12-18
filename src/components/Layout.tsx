import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTarget from "./ScrollToTarget";

export default function Layout() {
  return (
    <>
      <Navbar />
      <ScrollToTarget />
      <main className="w-full min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
