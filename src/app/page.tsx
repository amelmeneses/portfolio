import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Portfolio />
      <Contact />
    </>
  );
}
