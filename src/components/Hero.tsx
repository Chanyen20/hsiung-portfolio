import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Github, Mail } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <section className="relative min-h-screen flex items-center bg-portfolio-accent dark:bg-portfolio-primary/95 pt-16 overflow-hidden" id="home">
      {/* Modern background elements */}
      <div className="absolute inset-0 z-0 px-0 mx-0">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-portfolio-accent via-white to-portfolio-accent dark:from-portfolio-primary/50 dark:via-portfolio-primary/30 dark:to-portfolio-primary/50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tr from-portfolio-accent via-white to-portfolio-accent dark:from-portfolio-primary/50 dark:via-portfolio-primary/30 dark:to-portfolio-primary/50 rounded-full blur-3xl opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between px-[25px] mx-[25px]">
          <div className={`w-full md:w-1/2 mb-12 md:mb-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="max-w-lg mx-auto md:mx-0">
              <h1 className="text-4xl mb-4 leading-tight font-bold md:text-5xl text-stone-400">
                Hello, I'm <br />
                <span className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-portfolio-primary to-portfolio-primary/70 dark:from-white dark:to-white/70 md:text-5xl">Chan-Yen Hsiung</span>
              </h1>
              <p className="text-portfolio-secondary dark:text-gray-300 text-xl mb-8">Software Engineer</p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button asChild className="bg-portfolio-primary hover:bg-portfolio-primary/90 text-white px-8 py-6 h-auto text-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg group">
                  <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                    View Portfolio
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                
                <Button asChild variant="outline" className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-portfolio-primary px-8 py-6 h-auto text-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md">
                  <a href="/hsiung-portfolio/assets/ChanYenHsiung.pdf" target="_blank" rel="noopener noreferrer">
                    Up to date Resume
                  </a>
                </Button>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-6 mx-[10px]">
                <a href="https://www.linkedin.com/in/chan-yen-hsiung-b4117221a/" target="_blank" rel="noopener noreferrer" className="text-portfolio-primary hover:text-portfolio-primary/80 dark:text-white dark:hover:text-white/80 transition-colors">
                  <Linkedin strokeWidth={1.5} size={28} />
                </a>
                <a href="https://github.com/Chanyen20" target="_blank" rel="noopener noreferrer" className="text-portfolio-primary hover:text-portfolio-primary/80 dark:text-white dark:hover:text-white/80 transition-colors">
                  <Github strokeWidth={1.5} size={28} />
                </a>
                <a href="mailto:chanyenhsiung@gmail.com" className="text-portfolio-primary hover:text-portfolio-primary/80 dark:text-white dark:hover:text-white/80 transition-colors">
                  <Mail strokeWidth={1.5} size={28} />
                </a>
              </div>
            </div>
          </div>
          
          <div className={`w-full md:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative max-w-md mx-auto">
              <div className="relative mx-0">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-full h-full rounded-full bg-gradient-to-br from-portfolio-primary to-portfolio-primary/50 dark:from-white/80 dark:to-white/30 blur-md mx-[19px]"></div>
                
                {/* Modern profile image with avatar component */}
                <div className="relative aspect-square w-full max-w-md mx-[20px]">
                  <Avatar className="w-full h-full border-4 border-white dark:border-portfolio-primary/80 shadow-xl">
                    <AvatarImage alt="Chan-Yen Hsiung" className="object-cover" src="https://i.postimg.cc/pXfq8p2z/RA646773-DUMH-3.jpg" />
                    <AvatarFallback className="text-6xl">CH</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-portfolio-primary p-4 rounded-lg shadow-lg animate-bounce backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 border border-gray-100 dark:border-gray-800">
                <p className="font-bold text-portfolio-primary dark:text-white text-xl">4+</p>
                <p className="text-portfolio-secondary dark:text-gray-300 text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}