import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";


export default function Home() {
  return (
    <div className="flex flex-col  ">
      <HeroSection />
      <AboutMe />
    </div>
  );
}
