import Navbar from "./components/Navbar";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import TechStack from "./sections/TechStack";

const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Showcase />
      <FeatureCards />
      <TechStack />
    </>
  );
};

export default Page;
