
import { ContactForm } from "./contact/ContactForm";
import { ContactInfo } from "./contact/ContactInfo";

export function Contact() {
  return (
    <section id="contact" className="section bg-portfolio-accent dark:bg-portfolio-primary/90">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center dark:text-white reveal">Contact Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
