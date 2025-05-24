import React from 'react';

export function ContactInfo() {
  return (
    <div className="reveal">
      <div className="bg-white dark:bg-portfolio-primary/50 rounded-lg p-6 shadow-sm h-full">
        <h3 className="text-xl font-bold text-portfolio-primary dark:text-white mb-6">Get In Touch</h3>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-portfolio-secondary dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="ml-4">
              <h4 className="font-medium text-portfolio-primary dark:text-white">Email</h4>
              <a href="mailto:chanyenhsiung@gmail.com" className="text-portfolio-secondary dark:text-gray-300 hover:underline">
                chanyenhsiung@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-portfolio-secondary dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="ml-4">
              <h4 className="font-medium text-portfolio-primary dark:text-white">Phone</h4>
              <a href="tel:+17654094552" className="text-portfolio-secondary dark:text-gray-300 hover:underline">
                +1 (765) 409-4552
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-portfolio-secondary dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <div className="ml-4">
              <h4 className="font-medium text-portfolio-primary dark:text-white">LinkedIn</h4>
              <a 
                href="https://linkedin.com/in/chan-yen-hsiung-b4117221a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-secondary dark:text-gray-300 hover:underline"
              >
                linkedin.com/in/chan-yen-hsiung-b4117221a
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-portfolio-secondary dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div className="ml-4">
              <h4 className="font-medium text-portfolio-primary dark:text-white">GitHub</h4>
              <a 
                href="https://github.com/Chanyen20" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-secondary dark:text-gray-300 hover:underline"
              >
                github.com/Chanyen20
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
