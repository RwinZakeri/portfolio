import AboutMe from "@/components/AboutMe";
import CallAction from "@/components/CallAction";
import HeroOne from "@/components/HeroOne";
import { ProjectsSection } from "@/components/Projects";
import TapeSection from "@/components/TapeSection";
import TestimonialSection from "@/components/TestimonialSection";

const HomePage = () => {
  return (
    <>
      <HeroOne />
      <ProjectsSection />
      <TapeSection />
      <TestimonialSection />
      <AboutMe />
      <CallAction />
    </>
  );
};

export default HomePage;
