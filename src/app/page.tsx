import AboutMe from "@/components/AboutMe";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <div className="bg-stanley-white-100">
      <AboutMe />
      <Experiences />
      <Projects />
    </div>
  );
}
