
import { useState } from "react";

export function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "ToastBeans Stock Analysis Website",
      description: "Front-end framework, real-time data visualization, responsive design for financial analytics.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      title: "Quantum-Encrypted Desktop Messenger",
      description: "Built Electron-based client for ROC government using quantum encryption for end-to-end security.",
      image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    },
  ];

  return (
    <section id="projects" className="section bg-white dark:bg-portfolio-primary">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center dark:text-white reveal">Portfolio / Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="reveal relative group overflow-hidden rounded-lg shadow-md"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div 
                className={`absolute inset-0 bg-portfolio-primary/80 dark:bg-portfolio-primary/90 flex flex-col justify-end p-6 transition-opacity duration-300 ${
                  activeProject === project.id ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'
                }`}
              >
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <button className="bg-white text-portfolio-primary px-4 py-2 rounded-md hover:bg-gray-100 transition-colors self-start">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
