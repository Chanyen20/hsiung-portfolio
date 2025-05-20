
import { useEffect } from "react";
import { School } from "lucide-react";

export function About() {
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

  return (
    <section id="about" className="section bg-white dark:bg-portfolio-primary">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center dark:text-white reveal">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <p className="text-lg text-portfolio-primary dark:text-gray-200 mb-6 leading-relaxed">
              With four years of professional experience, I specialize in front-end UI development and back-end microservices design. I've architected scalable systems and performed rigorous stress testing to ensure performance under load.
            </p>
            <p className="text-lg text-portfolio-primary dark:text-gray-200 leading-relaxed">
              My passion lies in creating efficient, scalable software solutions that deliver exceptional user experiences while maintaining robust backend performance.
            </p>
          </div>
          
          <div className="reveal">
            <h3 className="text-xl font-semibold mb-6 dark:text-white">Education</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1">
                  <School className="h-6 w-6 text-portfolio-secondary dark:text-gray-300" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-portfolio-primary dark:text-white">M.S. in Information Management</h4>
                  <p className="text-portfolio-secondary dark:text-gray-300">Purdue University (2024–Aug 2025)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1">
                  <School className="h-6 w-6 text-portfolio-secondary dark:text-gray-300" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-portfolio-primary dark:text-white">B.Sc. in Communication Engineering</h4>
                  <p className="text-portfolio-secondary dark:text-gray-300">National Central University (2016–2019)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
