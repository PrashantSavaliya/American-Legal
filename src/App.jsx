import React, { useRef } from 'react';
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import PopularServices from "./components/PopularServices/PopularServices";
import WhyUs from "./components/WhyUs/WhyUs";
import About from './components/About/About';
import Working from "./components/Working/Working";
import OurService from "./components/OurService/OurService";
import Client from "./components/Client/Client";

function App() {

  const OurservicesRef = useRef(null);

  const scrollToOurServices = () => {
    const offset = 125;
    if (OurservicesRef.current) {
      const topPos = OurservicesRef.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  };
  return (
    <>
      <ScrollToTopButton />
      <Navbar />
      <Home />
      <PopularServices scrollToOurServices={scrollToOurServices} />
      < About />
      <Working />
      <WhyUs />
      <div ref={OurservicesRef}>
        <OurService />
      </div>
      <Client />
      <Contact />
      <Footer />
    </>
  )
}

export default App;