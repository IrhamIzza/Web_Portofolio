import aku1 from "../assets/aku2.png";
import { Button } from "./ui/button";
export default function AboutMe() {
  return (
    <div className="bg-gradient-to-tr from-gray-700 to-indigo-900" id="about">
      <div className="flex px-40 py-10">
        <div className="flex-1 hidden sm:block  ">
          <img src={aku1} className=" max-h-72 flex mx-auto border-1 py-4 border-primary" alt="" />
        </div>
        <div className="flex-1 flex flex-col gap-5 md:pr-30">
          <div className="text-center sm:text-left text-3xl font-bold  ">
            About Me
          </div>
          <p className="text-gray-300 ">
            Seorang Fresh Graduate yang berfokus pada pengembangan website
            sebagai Fullstack Developer. Saya memiliki ketertarikan pada dunia
            teknologi khususnya dalam membangun aplikasi web yang responsif,
            interaktif, dan memiliki performa optimal. Selama kuliah dan melalui
            beberapa proyek pribadi,Saya juga senang belajar hal baru dan siap
            beradaptasi dengan tantangan di dunia kerja.
          </p>
          <div>
            <Button>Download CV</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
