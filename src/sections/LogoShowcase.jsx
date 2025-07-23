import { techShowcaseIcons } from "../constants";

const TechIcon = ({ tech }) => {
  return (
    <div className="flex-none flex-center marquee-item tech-showcase-item">
      <div className="tech-showcase-card">
        <img 
          src={tech.icon} 
          alt={tech.name} 
          className={`tech-showcase-icon ${tech.isDark ? 'dark-icon' : ''}`}
        />
        <span className="tech-showcase-name">{tech.name}</span>
      </div>
    </div>
  );
};

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Technologies & <span className="text-blue-500">Tools</span>
      </h2>
      <p className="text-white-50">
        My development arsenal for building modern applications
      </p>
    </div>
    
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {techShowcaseIcons.map((tech, index) => (
          <TechIcon key={index} tech={tech} />
        ))}

        {techShowcaseIcons.map((tech, index) => (
          <TechIcon key={`duplicate-${index}`} tech={tech} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
