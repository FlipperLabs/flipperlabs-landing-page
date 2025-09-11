import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Sparkles, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Apps = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-foreground">
              Our Apps
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building the next generation of AI-powered SaaS applications
            </p>
          </div>

          {/* Featured App */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-elegant transition-smooth group overflow-hidden">
              <div className="relative">
                {/* Gradient background for featured app */}
                <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
                
                <CardHeader className="pb-6 pt-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-4 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                        <Code2 className="w-8 h-8" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl font-light tracking-tight mb-2">Dev Perspective</CardTitle>
                        <div className="flex items-center space-x-3">
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            Active Development
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            AI Development Tools
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardDescription className="text-lg text-muted-foreground leading-relaxed mb-6">
                    An AI-powered development team assistant that helps software teams ship faster with intelligent code review, 
                    automated testing suggestions, and real-time collaboration insights.
                  </CardDescription>
                  
                  {/* Feature highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">AI Code Review</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">Team Analytics</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg">
                      <Zap className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">Automated Testing</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button 
                      className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-primary transition-smooth"
                    >
                      Request Early Access
                    </Button>
                    <Button variant="outline">
                      Learn More
                    </Button>
                  </div>
                </CardHeader>
              </div>
            </Card>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">
              More apps coming soon
            </h2>
            <p className="text-muted-foreground mb-8">
              We're building innovative AI-powered tools to help teams work better together.
            </p>
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

export default Apps;