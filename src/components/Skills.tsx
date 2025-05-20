
import { useEffect } from "react";

export function Skills() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    });

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const skills = {
    frontend: ["React", "TypeScript", "HTML5", "CSS3"],
    backend: ["Microservices", "REST APIs", "Node.js", "Java"],
    tools: ["Docker", "JMeter (stress testing)", "Git"],
  };

  return (
    <section id="skills" className="section bg-white dark:bg-portfolio-primary">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center dark:text-white reveal">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="reveal">
            <div className="bg-portfolio-accent dark:bg-portfolio-primary/50 rounded-lg p-6 h-full">
              <h3 className="text-xl font-bold text-portfolio-primary dark:text-white mb-4">Front-end</h3>
              <div className="flex flex-wrap">
                {skills.frontend.map((skill) => (
                  <span 
                    key={skill} 
                    className="skill-item hover-scale dark:bg-portfolio-primary/30 dark:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="reveal">
            <div className="bg-portfolio-accent dark:bg-portfolio-primary/50 rounded-lg p-6 h-full">
              <h3 className="text-xl font-bold text-portfolio-primary dark:text-white mb-4">Back-end</h3>
              <div className="flex flex-wrap">
                {skills.backend.map((skill) => (
                  <span 
                    key={skill} 
                    className="skill-item hover-scale dark:bg-portfolio-primary/30 dark:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="reveal">
            <div className="bg-portfolio-accent dark:bg-portfolio-primary/50 rounded-lg p-6 h-full">
              <h3 className="text-xl font-bold text-portfolio-primary dark:text-white mb-4">Tools</h3>
              <div className="flex flex-wrap">
                {skills.tools.map((skill) => (
                  <span 
                    key={skill} 
                    className="skill-item hover-scale dark:bg-portfolio-primary/30 dark:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
