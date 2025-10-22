// src/app/page.js
"use client";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import Catalogos from "../components/Catalogos";
import TrabajaConNosotros from "@/components/TrabajaConNosotros";
import CookiesBanner from "@/components/CookiesBanner";
import Footer from "@/components/Footer";
export default function Home() {
    // 🔄 Redirección automática si llega con #access_token
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes("access_token")) {
      window.location.href = "/confirmacion" + hash;
    }
  }, []);
  const scrollToCatalogos = () => {
    const section = document.getElementById("catalogos");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <Catalogos />
      <TrabajaConNosotros/>
      <CookiesBanner/>
      <Footer/>
    </main>
  );
}
