
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-portfolio-primary/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-portfolio-primary dark:text-white">
          Chan-Yen Hsiung
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-portfolio-primary hover:text-portfolio-secondary dark:text-white dark:hover:text-gray-300 transition-colors">
            About
          </a>
          <a href="#experience" className="text-portfolio-primary hover:text-portfolio-secondary dark:text-white dark:hover:text-gray-300 transition-colors">
            Experience
          </a>
          <a href="#skills" className="text-portfolio-primary hover:text-portfolio-secondary dark:text-white dark:hover:text-gray-300 transition-colors">
            Skills
          </a>
          <a href="#services" className="text-portfolio-primary hover:text-portfolio-secondary dark:text-white dark:hover:text-gray-300 transition-colors">
            Services
          </a>
          <a href="#projects" className="text-portfolio-primary hover:text-portfolio-secondary dark:text-white dark:hover:text-gray-300 transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-portfolio-primary hover:text-portfolio-secondary dark:text-white dark:hover:text-gray-300 transition-colors">
            Contact
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-portfolio-primary dark:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-portfolio-primary shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-portfolio-primary dark:text-white py-2"
            >
              About
            </a>
            <a
              href="#experience"
              onClick={() => setIsMenuOpen(false)}
              className="text-portfolio-primary dark:text-white py-2"
            >
              Experience
            </a>
            <a
              href="#skills"
              onClick={() => setIsMenuOpen(false)}
              className="text-portfolio-primary dark:text-white py-2"
            >
              Skills
            </a>
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="text-portfolio-primary dark:text-white py-2"
            >
              Services
            </a>
            <a
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="text-portfolio-primary dark:text-white py-2"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-portfolio-primary dark:text-white py-2"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
