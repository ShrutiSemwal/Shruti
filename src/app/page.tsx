import Navbar from "./components/Navbar";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCards";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import TechStack from "./sections/TechStack";

const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <TechStack />
      <Experience />
      <Showcase />
      <FeatureCards />
      <Contact />
      <Footer />
    </>
  );
};

export default Page;
