
export function Experience() {
  return (
    <section id="experience" className="section bg-portfolio-accent dark:bg-portfolio-primary/90">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center dark:text-white reveal">Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="space-y-12">
            {/* Job 1 */}
            <div className="timeline-item reveal">
              <div className="timeline-dot"></div>
              <div className="bg-white dark:bg-portfolio-primary/50 rounded-lg p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold text-portfolio-primary dark:text-white">Software Developer Research Assistant</h3>
                  <span className="bg-portfolio-accent dark:bg-portfolio-primary/30 text-portfolio-primary dark:text-white px-3 py-1 rounded-full text-sm">Jul 2021 – Jun 2024</span>
                </div>
                <p className="text-portfolio-secondary dark:text-gray-300 mb-2">Academia Sinica, Taipei</p>
                <ul className="list-disc list-inside text-portfolio-primary dark:text-gray-200 space-y-2">
                  <li>Developed encrypted messaging features for secure communication across Taiwan government agencies</li>
                  <li>Optimized real-time performance of data transmission systems under high load scenarios</li>
                  <li>Integrated quantum encryption algorithms into existing security architecture</li>
                </ul>
              </div>
            </div>
            
            {/* Job 2 */}
            <div className="timeline-item reveal">
              <div className="timeline-dot"></div>
              <div className="bg-white dark:bg-portfolio-primary/50 rounded-lg p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold text-portfolio-primary dark:text-white">Software Engineer</h3>
                  <span className="bg-portfolio-accent dark:bg-portfolio-primary/30 text-portfolio-primary dark:text-white px-3 py-1 rounded-full text-sm">Nov 2019 – Jul 2021</span>
                </div>
                <p className="text-portfolio-secondary dark:text-gray-300 mb-2">Compal, Taipei</p>
                <ul className="list-disc list-inside text-portfolio-primary dark:text-gray-200 space-y-2">
                  <li>Built microservice test harnesses for automated performance testing</li>
                  <li>Developed front-end interfaces for internal monitoring tools</li>
                  <li>Implemented stress-testing processes to ensure system stability under peak loads</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
