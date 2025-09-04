import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Building2 } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-foreground">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have an idea? Want to partner? Let's build something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Options */}
            <div className="space-y-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">Partnership</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Interested in building a SaaS company together?
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    partners@flipperlabs.com
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">General Inquiry</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Questions about our companies or approach?
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    hello@flipperlabs.com
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <Mail className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">Press & Media</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Media inquiries and press releases
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    press@flipperlabs.com
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">Send us a message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input id="company" placeholder="Your company" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your idea, question, or how we can help..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button 
                    className="w-full bg-primary hover:bg-primary-hover text-primary-foreground shadow-primary transition-smooth"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;