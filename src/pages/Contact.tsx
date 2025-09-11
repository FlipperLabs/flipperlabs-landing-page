import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission started', formData);
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    console.log('Setting isSubmitting to true');

    try {
      console.log('Calling Supabase Edge Function with data:', formData);
      console.log('About to invoke send-contact-email function...');
      
      // Try Supabase client first
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      console.log('Raw Supabase response:', { data, error });

      if (error) {
        console.error('Supabase function error:', error);
        // If Supabase client fails, try direct fetch as fallback
        console.log('Trying direct fetch as fallback...');
        
        const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`
          },
          body: JSON.stringify(formData)
        });
        
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText || 'Failed to send message');
        }
        
        const result = await response.json();
        console.log('Direct fetch response:', result);
      } else {
        console.log('Supabase function response:', data);
      }

      console.log('Email sent successfully');
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
              CONNECT
            </p>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-foreground">
              Let's build together
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div>
              <Card className="bg-card backdrop-blur-sm border-border shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-xl font-semibold mb-6 text-foreground">
                    Send us a message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name" 
                        className="bg-background border-input text-foreground placeholder:text-muted-foreground"
                        required
                      />
                    </div>
                    
                    <div>
                      <Input 
                        name="email"
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your email" 
                        className="bg-background border-input text-foreground placeholder:text-muted-foreground"
                        required
                      />
                    </div>
                    
                    <div>
                      <Textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your message"
                        className="bg-background border-input text-foreground placeholder:text-muted-foreground min-h-[120px] resize-none"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary-hover text-primary-foreground transition-smooth"
                      size="lg"
                    >
                      {isSubmitting ? "Sending..." : "Send message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Partner Information */}
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-foreground">
                    Looking to partner?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you're building something cool, we'd love to hear from you. Our main focus is on consumer AI companies.
                  </p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2 tracking-wider uppercase">
                    EMAIL US
                  </p>
                  <a 
                    href="mailto:hello@flipperlabs.app" 
                    className="text-primary hover:text-primary-hover transition-smooth font-medium"
                  >
                    hello@flipperlabs.app
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center">
              <span className="text-lg font-bold font-heading text-foreground">
                flipperlabs
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <span className="text-sm text-muted-foreground">
                Building the future of consumer AI.
              </span>
              <a 
                href="mailto:hello@flipperlabs.app" 
                className="text-sm text-primary hover:text-primary-hover transition-smooth"
              >
                hello@flipperlabs.app
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;