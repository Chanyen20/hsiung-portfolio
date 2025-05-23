
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Setup react-hook-form with zod validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const templateParams = {
        from_name: values.name,
        reply_to: values.email,
        message: values.message
      };

      const result = await emailjs.send(
        'service_kwfjncw', // Service ID
        'template_ldp9i3e', // Template ID
        templateParams,
        'HEwIrkul5UiEXwVm2' // Public Key
      );

      console.log('Email sent successfully:', result.text);
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-portfolio-accent dark:bg-portfolio-primary/90">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center dark:text-white reveal">Contact Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="reveal">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-portfolio-primary dark:text-white">Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          required
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-portfolio-primary/50 dark:text-white focus:outline-none focus:ring-2 focus:ring-portfolio-primary dark:focus:ring-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-portfolio-primary dark:text-white">Email</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email" 
                          required
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-portfolio-primary/50 dark:text-white focus:outline-none focus:ring-2 focus:ring-portfolio-primary dark:focus:ring-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-portfolio-primary dark:text-white">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          required
                          rows={5}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-portfolio-primary/50 dark:text-white focus:outline-none focus:ring-2 focus:ring-portfolio-primary dark:focus:ring-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-primary w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
          
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
                      href="https://github.com/terrychendev" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-portfolio-secondary dark:text-gray-300 hover:underline"
                    >
                      github.com/terrychendev
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
