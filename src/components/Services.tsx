
import { useEffect } from "react";

export function Services() {
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
    <section id="services" className="section bg-portfolio-accent dark:bg-portfolio-primary/90">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center dark:text-white reveal">Services</h2>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-portfolio-primary/50 rounded-lg p-6 shadow-sm reveal">
            <div className="w-12 h-12 bg-portfolio-accent dark:bg-portfolio-primary/30 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-portfolio-primary dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-portfolio-primary dark:text-white mb-2">Custom Web Front-End Development</h3>
            <p className="text-portfolio-secondary dark:text-gray-300">
              Craft responsive interfaces tailored to client branding, focusing on exceptional user experience and modern design principles.
            </p>
          </div>
          
          <div className="bg-white dark:bg-portfolio-primary/50 rounded-lg p-6 shadow-sm reveal">
            <div className="w-12 h-12 bg-portfolio-accent dark:bg-portfolio-primary/30 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-portfolio-primary dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-portfolio-primary dark:text-white mb-2">System Architecture & Setup</h3>
            <p className="text-portfolio-secondary dark:text-gray-300">
              Design and deploy microservice architectures, CI/CD pipelines, ensuring scalable and maintainable system infrastructure.
            </p>
          </div>
          
          <div className="bg-white dark:bg-portfolio-primary/50 rounded-lg p-6 shadow-sm col-span-1 md:col-span-2 reveal">
            <h3 className="text-xl font-bold text-portfolio-primary dark:text-white mb-2">Featured Client Work</h3>
            <p className="text-portfolio-secondary dark:text-gray-300">
              Designed and implemented the front-end architecture for ToastBeans' stock analysis platform, creating a responsive and intuitive interface for financial data visualization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
