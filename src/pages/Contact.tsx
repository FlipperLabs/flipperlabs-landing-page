import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
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
                  
                  <form className="space-y-6">
                    <div>
                      <Input 
                        placeholder="Your name" 
                        className="bg-background border-input text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                    
                    <div>
                      <Input 
                        type="email" 
                        placeholder="Your email" 
                        className="bg-background border-input text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                    
                    <div>
                      <Textarea 
                        placeholder="Your message"
                        className="bg-background border-input text-foreground placeholder:text-muted-foreground min-h-[120px] resize-none"
                      />
                    </div>
                    
                    <Button 
                      className="w-full bg-primary hover:bg-primary-hover text-primary-foreground transition-smooth"
                      size="lg"
                    >
                      Send message
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