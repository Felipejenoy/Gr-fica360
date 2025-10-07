// src/app/page.js
"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import Catalogos from "../components/Catalogos";
import TrabajaConNosotros from "@/components/TrabajaConNosotros";
import CookiesBanner from "@/components/CookiesBanner";

export default function Home() {
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
    </main>
  );
}
