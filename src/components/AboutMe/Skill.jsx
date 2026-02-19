export default function Skill({icon, title, description}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <i className={`ph ${icon} text-primary text-xl`} ></i>
        <h2 className="font-medium text-primary">{title}</h2>
      </div>
      <div className="text-gray-300">
       {description}
      </div>
    </div>
  );
}
