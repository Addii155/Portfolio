import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const skillsRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animation for content    
    gsap.fromTo(
      contentRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top bottom-=100",
        },
      }
    );

    // Animation for image
    gsap.fromTo(
      imageRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom-=100",
        },
      }
    );

    // Animation for skills
    gsap.fromTo(
      skillsRef.current.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top bottom-=50",
        },
      }
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="about-section">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-blue-500">Me</span>
            </h2>
            <p className="text-white-50 text-lg md:text-xl max-w-3xl mx-auto">
              Passionate developer crafting digital experiences with modern technologies
            </p>
          </div>

          {/* Main Content */}
          <div className="grid-2-cols items-center mb-20">
            <div ref={contentRef} className="about-content">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                Hi, I'm a Full Stack Developer
              </h3>
              <p className="text-white-50 text-lg mb-6 leading-relaxed">
                With a passion for creating innovative web applications and mobile solutions, 
                I specialize in modern JavaScript frameworks and cutting-edge technologies. 
                I believe in writing clean, efficient code and creating user experiences that matter.
              </p>
              <p className="text-white-50 text-lg mb-8 leading-relaxed">
                My journey in development has led me to work with various technologies, 
                from React and Node.js to React Native and Three.js. I'm always eager to 
                learn new technologies and take on challenging projects that push the 
                boundaries of what's possible on the web.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="stat-item">
                  <h4 className="text-3xl font-bold text-blue-500">3+</h4>
                  <p className="text-white-50">Years Experience</p>
                </div>
                <div className="stat-item">
                  <h4 className="text-3xl font-bold text-blue-500">50+</h4>
                  <p className="text-white-50">Projects Completed</p>
                </div>
                <div className="stat-item">
                  <h4 className="text-3xl font-bold text-blue-500">15+</h4>
                  <p className="text-white-50">Technologies Mastered</p>
                </div>
              </div>
            </div>

            <div ref={imageRef} className="about-image-wrapper">
              <div className="relative">
                <div className="about-image-bg"></div>
                <img 
                  src="/images/Photo.jpg" 
                  alt="Developer" 
                  className="about-image"
                />
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="skills-section">
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12">
              What I Do Best
            </h3>
            <div ref={skillsRef} className="grid-3-cols">
              <div className="skill-card">
                <div className="skill-icon">
                  <img src="/images/code.svg" alt="Frontend Development" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Frontend Development</h4>
                <p className="text-white-50">
                  Creating responsive and interactive user interfaces with React, 
                  Next.js, and modern CSS frameworks.
                </p>
              </div>

              <div className="skill-card">
                <div className="skill-icon">
                  <img src="/images/designs.svg" alt="Backend Development" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Backend Development</h4>
                <p className="text-white-50">
                  Building robust server-side applications with Node.js, Express, 
                  and database management systems.
                </p>
              </div>

              <div className="skill-card">
                <div className="skill-icon">
                  <img src="/images/devices.png" alt="Mobile Development" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Mobile Development</h4>
                <p className="text-white-50">
                  Developing cross-platform mobile applications using React Native 
                  and Expo for iOS and Android.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
