import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import PopularServices from "./components/PopularServices/PopularServices";
import WhyUs from "./components/WhyUs/WhyUs";
import Working from "./components/Working/Working";
import OurService from "./components/OurService/OurService";
import Client from "./components/Client/Client";

function App() {

  return (
    <>
    <ScrollToTopButton />
      <Navbar />
      <Home />
      <PopularServices />
      <Working />
      <WhyUs />
      <OurService />
      <Client />
      <Contact />
      <Footer />
    </>
  )
}

export default App;