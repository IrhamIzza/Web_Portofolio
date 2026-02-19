import aku1 from "../assets/aku2.png";
import Skill from "./AboutMe/Skill";
import { Button } from "./ui/button";

export default function AboutMe() {
  const data = [
    {
      icon: "ph-code-simple",
      title: "FrontEnd",
      description: "Vue.js, React, Tailwind Css, Nuxt Js , Next",
    },
    {
      icon: "ph-database ",
      title: "BackEnd",
      description: "Laravel, MySQL, PostgreSQL, Rest API",
    },
    {
      icon: "ph-paint-brush ",
      title: "Design",
      description: "UI/UX, Figma, Photoshop, Responsive Design",
    },
    {
      icon: "ph-toolbox ",
      title: "Tools",
      description: "Git, Github, VSCode, Docker",
    },
  ];

  return (
    <div className="bg-gradient-to-tr from-gray-700 to-indigo-900" id="about">
      <div className="flex px-40 py-10">
        <div className="flex-1 hidden sm:block  ">
          <img
            src={aku1}
            className="max-h-110 flex mx-auto border-1 py-4 border-primary"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="flex-1 flex flex-col gap-3 ">
          <div className="text-center sm:text-left text-3xl font-bold  ">
            About <span className="text-primary">Me</span>
          </div>
          <div className="text-xl text-blue-400">Full Stack Developer</div>
          <p className="text-gray-300 ">
            Seorang Fresh Graduate yang berfokus pada pengembangan website
            sebagai Fullstack Developer. Saya memiliki ketertarikan pada dunia
            teknologi khususnya dalam membangun aplikasi web yang responsif,
            interaktif, dan memiliki performa optimal. Saya juga senang belajar
            hal baru dan siap beradaptasi dengan tantangan di dunia kerja.
          </p>
          <div className="grid grid-cols-2 gap-2">
            {data.map((item, index) => (
              <Skill key={index} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
          <div>
            <Button className=" ">Download CV</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
