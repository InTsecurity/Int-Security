import OurWorks from "./Components/OurWorks";
import About from "./Components/About";
import Faq from "./Components/Faq";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import "./Styles/main.css";

function Home() {
  return (
    <div className="home">
      <HeroSection />
      <About />
      <Services />
      <OurWorks />
      <Faq />
    </div>
  );
}

export default Home;
