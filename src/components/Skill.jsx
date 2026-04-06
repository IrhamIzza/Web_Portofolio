import logoLaravel from "../assets/Logo/Laravel.png";
import logoTailwind from "../assets/Logo/Tailwind.png";
import logoVue from "../assets/Logo/vue.png";

export default function Skill() {
  return (
    <div className="bg-gradient-to-tr from-gray-700 to-indigo-900 px-4 sm:px-6 md:px-10 lg:px-20 py-10" id="skill">
      <div className="mx-auto text-center flex flex-col gap-5 max-w-5xl">
        
        <h2 className="text-2xl sm:text-3xl font-bold">
          <span className="text-primary">Skills</span> & Experience
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Card */}
          <div className="p-4 sm:p-6 bg-gray-800 rounded-xl shadow hover:scale-105 transition-transform">
            <img
              src={logoLaravel}
              alt="Laravel"
              className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2"
            />
            <p className="text-xs sm:text-sm font-medium">Laravel</p>
          </div>

          <div className="p-4 sm:p-6 bg-gray-800 rounded-xl shadow hover:scale-105 transition-transform">
            <img
              src={logoTailwind}
              alt="Tailwind"
              className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2"
            />
            <p className="text-xs sm:text-sm font-medium">Tailwind CSS</p>
          </div>

          <div className="p-4 sm:p-6 bg-gray-800 rounded-xl shadow hover:scale-105 transition-transform">
            <img
              src={logoVue}
              alt="Vue.js"
              className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2"
            />
            <p className="text-xs sm:text-sm font-medium">Vue.js</p>
          </div>

          <div className="p-4 sm:p-6 bg-gray-800 rounded-xl shadow hover:scale-105 transition-transform">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2"
            />
            <p className="text-xs sm:text-sm font-medium">React</p>
          </div>

        </div>
      </div>
    </div>
  );
}