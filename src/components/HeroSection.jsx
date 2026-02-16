import foto from "../assets/coba.png";

export default function HeroSection() {
  return (
    <div
      className="flex flex-col sm:flex-row py-10 items-center gap-3 animate-fadeInUp px-30"
      id="home"
    >
      <div className="flex-1 flex flex-col gap-3 ">
        <div className="font-bold text-4xl">
          Hi,I'm{" "}
          <span className="text-blue-400 inline-block transition-all duration-300 hover:scale-105">
            Irham Izza
          </span>
        </div>
        <div className="text-3xl text-blue-400">Full Stack Developer</div>
        <div className="text-gray-300 max-w-[550px]">
          A Fresh Graduate and Fullstack Developer. I enjoy creating
          interactive, functional, and user-friendly websites and applications.
          Focused on delivering simple, fast, and responsive user experiences.
        </div>
        <div className="flex gap-2">
          <a
            href="https://github.com/IrhamIzza"
            className="ph ph-github-logo text-lg transition-all duration-300 ease-out hover:scale-105 hover:text-blue-400"
          ></a>
          <a
            href="https://www.linkedin.com/in/irham-izza-syany-5b5288233/"
            className="ph ph-linkedin-logo text-lg transition-all duration-300 ease-out hover:scale-105 hover:text-blue-400"
          ></a>
        </div>
        <div className="flex gap-2 text-sm md:text-base text-blue-400">
          <div className="bg-blue-500 text-white p-2 rounded-xl cursor-pointer  transition-all duration-300 ease-out hover:scale-105">
            CONTACT
          </div>
          <div className="border border-blue-400 p-2 rounded-xl cursor-pointer  transition-all duration-300 ease-out hover:scale-105">
            DONWLOAD CV
          </div>
        </div>
      </div>
      <div className="flex-1 relative">
        <div className="h-90 w-90 left-[50%] -translate-x-[50%]  rounded-full bg-gradient-to-tl from-blue-400 to-indigo-800 absolute z-10"></div>
        <img
          src={foto}
          className="relative z-20 rounded-md w-56 sm:w-[300px] mx-auto"
          alt=""
        />
      </div>
    </div>
  );
}
