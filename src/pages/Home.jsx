import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import Project from "@/components/Project";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <HeroSection />
      <AboutMe />
      <Project />
      <Skill/>
    </div>
  );
}
