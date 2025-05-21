
import { useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  // Create a reference to store observer
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Centralized scroll reveal animation
  useEffect(() => {
    // Cleanup any existing observer first
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create a new observer with improved options
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only add the active class, never remove it after it's added
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { 
        threshold: 0.1, 
        rootMargin: "0px 0px -10% 0px" 
      }
    );

    // Function to observe elements
    const observeElements = () => {
      const elements = document.querySelectorAll(".reveal");
      if (elements.length > 0 && observerRef.current) {
        elements.forEach((el) => {
          // Add a default style to prevent flashing
          el.classList.add("opacity-0");
          observerRef.current?.observe(el);
        });
      } else {
        // If elements aren't ready yet, try again after a short delay
        setTimeout(observeElements, 100);
      }
    };

    // Start observing after a delay to ensure DOM is fully loaded
    setTimeout(observeElements, 200);

    // Clean up function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-portfolio-primary">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
