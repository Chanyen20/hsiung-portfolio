
import { useState, useEffect } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section 
      className="min-h-screen flex items-center bg-portfolio-accent dark:bg-portfolio-primary/95 pt-16"
      id="home"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div 
            className={`w-full md:w-1/2 mb-12 md:mb-0 transition-opacity duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="max-w-lg mx-auto md:mx-0">
              <h1 className="text-4xl md:text-6xl font-bold text-portfolio-primary dark:text-white mb-4 leading-tight">
                Hello, I'm <br />
                <span className="text-5xl md:text-7xl">Chan-Yen Hsiung</span>
              </h1>
              <p className="text-portfolio-secondary dark:text-gray-300 text-xl mb-8">
                Full-Stack Software Developer | Microservices & Performance Testing
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="button-primary"
                >
                  View Portfolio
                </a>
                <a
                  href="#contact"
                  className="button-outline dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-portfolio-primary"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          <div 
            className={`w-full md:w-1/2 transition-opacity duration-1000 delay-300 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative max-w-md mx-auto">
              <div className="aspect-square overflow-hidden rounded-full border-4 border-white dark:border-portfolio-primary shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="Chan-Yen Hsiung"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-portfolio-primary p-4 rounded-lg shadow-lg animate-bounce">
                <p className="font-bold text-portfolio-primary dark:text-white text-xl">4+</p>
                <p className="text-portfolio-secondary dark:text-gray-300 text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
