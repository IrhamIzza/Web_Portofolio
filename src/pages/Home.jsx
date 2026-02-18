import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div className="flex flex-col  ">
      <HeroSection />
      <AboutMe />
      <Project />
    </div>
  );
}
