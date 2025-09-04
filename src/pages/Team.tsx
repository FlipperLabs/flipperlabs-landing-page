import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Team = () => {
  const team = [
    {
      name: "Alex Chen",
      role: "Founding Partner",
      bio: "15+ years building and scaling SaaS companies. Former VP of Product at leading fintech unicorn.",
      specialties: ["Product Strategy", "Go-to-Market", "Fundraising"],
    },
    {
      name: "Sarah Rodriguez",
      role: "Technical Partner",
      bio: "Full-stack engineer and startup CTO with expertise in scalable architecture and team building.",
      specialties: ["Engineering", "Architecture", "Team Building"],
    },
    {
      name: "Marcus Johnson",
      role: "Operations Partner",
      bio: "Former McKinsey consultant specializing in operational excellence and business model optimization.",
      specialties: ["Operations", "Strategy", "Analytics"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-foreground">
              Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced operators building the future of SaaS
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {team.map((member, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:shadow-elegant transition-smooth">
                <CardHeader className="text-center pb-4">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className="text-xl font-heading">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.specialties.map((specialty, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-2">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                      <Twitter className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">
              Join Our Network
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We work with a curated network of advisors, investors, and operators 
              who help our portfolio companies succeed.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Team;