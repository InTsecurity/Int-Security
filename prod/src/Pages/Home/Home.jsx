import About from "./Components/About";
import Faq from "./Components/Faq";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";

function Home() {
  return (
    <div className="home">
      <HeroSection />
      <About />
      <Services />
      <Faq />
    </div>
  );
}

export default Home;
