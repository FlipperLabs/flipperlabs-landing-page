import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, TrendingUp, Users } from "lucide-react";

const Companies = () => {
  const companies = [
    {
      name: "FlipperCRM",
      description: "Next-generation customer relationship management for small businesses",
      stage: "Active",
      category: "B2B SaaS",
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      name: "DataFlip",
      description: "Simple analytics dashboard for content creators and influencers",
      stage: "Active",
      category: "Analytics",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      name: "TeamSync",
      description: "Streamlined team collaboration tools for remote-first companies",
      stage: "Development",
      category: "Productivity",
      icon: <Users className="w-6 h-6" />,
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
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building the next generation of consumer SaaS companies
            </p>
          </div>

          {/* Companies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:shadow-elegant transition-smooth group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      {company.icon}
                    </div>
                    <Badge variant="secondary" className="bg-secondary/80">
                      {company.stage}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-heading">{company.name}</CardTitle>
                  <Badge variant="outline" className="w-fit text-xs">
                    {company.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {company.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">
              Have an idea?
            </h2>
            <p className="text-muted-foreground mb-8">
              We're always looking for innovative SaaS concepts to build and scale.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Companies;