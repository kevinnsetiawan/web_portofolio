
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.", {
      position: "top-center"
    });
    
    // Reset form (in a real app, we would send data to a backend)
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section id="contact" className="py-20 bg-tech-light-gray">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-tech-dark">
            Get In <span className="text-tech-purple">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-tech-purple mx-auto mb-6"></div>
          <p className="text-tech-dark/70 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out to me!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8 animate-fade-in">
            <h3 className="text-xl font-semibold mb-6 text-tech-dark">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-tech-dark mb-1">Name</label>
                  <Input 
                    id="name"
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-tech-dark mb-1">Email</label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-tech-dark mb-1">Subject</label>
                  <Input 
                    id="subject"
                    type="text" 
                    placeholder="Subject" 
                    className="w-full" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-tech-dark mb-1">Message</label>
                  <Textarea 
                    id="message"
                    placeholder="Your Message" 
                    className="w-full min-h-[120px]" 
                    required 
                  />
                </div>
                <div>
                  <Button 
                    type="submit" 
                    className="w-full bg-tech-purple hover:bg-tech-purple/90 text-white rounded-md border-0"
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6 text-tech-dark">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-tech-purple">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-tech-dark">Location</h4>
                  <p className="text-tech-dark/70">Jakarta, Indonesia</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-tech-purple">
                    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-tech-dark">Email</h4>
                  <p className="text-tech-dark/70">contact@itportfolio.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone text-tech-purple">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-tech-dark">Phone</h4>
                  <p className="text-tech-dark/70">+62 XXX XXXX XXX</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-medium text-tech-dark mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-white p-3 rounded-full shadow-md hover:bg-tech-purple hover:text-white transition-colors duration-300"
                  aria-label="Github"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="bg-white p-3 rounded-full shadow-md hover:bg-tech-purple hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="bg-white p-3 rounded-full shadow-md hover:bg-tech-purple hover:text-white transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="bg-white p-3 rounded-full shadow-md hover:bg-tech-purple hover:text-white transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
