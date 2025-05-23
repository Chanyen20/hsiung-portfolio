
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
import { contactFormSchema, type ContactFormValues } from "./contact-form-schema";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Setup react-hook-form with zod validation
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
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
  );
}
