import logoLaravel from "../assets/Logo/laravel.png";
import logoTailwind from "../assets/Logo/tailwind.png";
import logoVue from "../assets/Logo/vue.png";

export default function Skill() {
  return (
    <div className="bg-gradient-to-tr from-gray-700 to-indigo-900 px-30 py-10" id="skill ">
      <div class=" mx-auto text-center flex flex-col gap-5 ">
        <h2 class="text-3xl font-bold"><span className="text-primary">Skills</span>  & Experience</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <div class="p-6 bg-gray-800 rounded-xl shadow hover:scale-105 transition-transform">
            <img
              src={logoLaravel}
              alt="Laravel"
              class="w-12 h-12 mx-auto mb-2"
            />
            <p class="text-sm font-medium">Laravel</p>
          </div>
          <div class="p-6 bg-gray-800 rounded-xl shadow hover:scale-105 transition-transform">
            <img
              src={logoTailwind}
              alt="Tailwind"
              class="w-12 h-12 mx-auto mb-2"
            />
            <p class="text-sm font-medium">Tailwind CSS</p>
          </div>
          <div class="p-6 bg-gray-800 rounded-xl shadow hover:scale-105 transition-transform">
            <img
              src={logoVue}
              alt="vue.js"
              class="w-12 h-12 mx-auto mb-2"
            />
            <p class="text-sm font-medium">Vue.js</p>
          </div>
          <div class="p-6 bg-gray-800 rounded-xl hover:scale-105 transition-transform">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              class="w-12 h-12 mx-auto mb-2"
            />
            <p class="text-sm font-medium">React</p>
          </div>
        </div>
      </div>
    </div>
  );
}
