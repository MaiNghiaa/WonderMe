import React, { Component, useEffect } from "react";
import Hero from "./Sections/Hero";
import Clients from "./Sections/Clients";
import About from "./Sections/About";
import Stats from "./Sections/Stats";
import Services from "./Sections/Services";
import Features from "./Sections/Features";
import Portfolio from "./Sections/Portfolio";
import Pricing from "./Sections/Pricing";
import Faq from "./Sections/faq";
import Team from "./Sections/team";
import CallToAction from "./Sections/CallToAction";
import Recents from "./Sections/Recents";
import Contact from "./Sections/Contact";
import "aos/dist/aos.css"; // Import CSS của AOS
import Aos from "aos";

const LandingPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <main id="main">
        <Hero />
        <Clients />
        <About />
        <Stats />
        <Services />
        {/* <Features /> */}
        <Portfolio />
        <Pricing />
        <Faq />
        <Team />
        <CallToAction />
        <Recents />
        <Contact />
      </main>
    </div>
  );
};
export default LandingPage;
