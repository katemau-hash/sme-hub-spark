import { Button } from "@/components/ui/button";
import { Users, BookOpen, Target } from "lucide-react";
import heroImage from "@/assets/hero-collaboration.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <Users className="w-6 h-6" />
                <span className="text-sm font-medium uppercase tracking-wider">Subject Matter Experts</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Welcome, <span className="bg-gradient-primary bg-clip-text text-transparent">SMEs</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Helping shape meaningful learning experiences across the organization.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-foreground">
                Your expertise drives our learning initiatives. Whether you're reviewing content, 
                providing feedback, or sharing knowledge, you're building the foundation for 
                impactful training that makes a real difference.
              </p>
              
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span>Multiple Course Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  <span>Clear Action Items</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-smooth">
                View My Projects
              </Button>
              <Button variant="outline" size="lg" className="hover-accent">
                Need Help Getting Started?
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant hover-lift">
              <img
                src={heroImage}
                alt="Team collaboration on learning projects"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating stats/badges */}
            <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-elegant border hover-lift">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-xs text-muted-foreground">Active Projects</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground p-4 rounded-xl shadow-accent hover-lift">
              <div className="text-center">
                <div className="text-2xl font-bold">92%</div>
                <div className="text-xs opacity-90">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};