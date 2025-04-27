"use client";

import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Projects from "@/Components/Projects";
import Contact from "@/Components/Contact";
// import Footer from "@/Components/Footer";
import ThemeToggler from "@/Components/ThemeToggler";
import { ReactLenis, useLenis } from "lenis/react";

export default function Home() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  return (
    <>
      <ReactLenis root>
        <Hero />
        <Navbar />
        <About />
        <Projects />
        <Contact />
        {/* <Footer /> */}
        <ThemeToggler />
      </ReactLenis>
    </>
  );
}
