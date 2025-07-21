import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Mail, 
  MessageSquare, 
  Users, 
  Settings, 
  Palette, 
  Video
} from "lucide-react";

export const ContactSupport = () => {
  const teamMembers = [
    {
      name: "Jordan Ellis",
      role: "Manager of Assets, Content, and Virtual Infrastructure",
      description: "Point person for systems, access, file organization, permissions, and overall process logistics",
      icon: Settings,
      color: "primary",
      initials: "JE"
    },
    {
      name: "Riley Tran", 
      role: "Senior Instructional Designer",
      description: "Supports learning experience design, feedback on course structure, flow, interactivity, and reviewing SME input",
      icon: Palette,
      color: "accent",
      initials: "RT"
    },
    {
      name: "Avery Morgan",
      role: "Media and Content Producer", 
      description: "Helps with video production, voiceover, podcasts, or any rich media that SMEs may be involved in",
      icon: Video,
      color: "success",
      initials: "AM"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary': return 'bg-primary text-primary-foreground';
      case 'accent': return 'bg-accent text-accent-foreground';
      case 'success': return 'bg-success text-success-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getColorBorder = (color: string) => {
    switch (color) {
      case 'primary': return 'border-primary/20 hover:border-primary/40';
      case 'accent': return 'border-accent/20 hover:border-accent/40';
      case 'success': return 'border-success/20 hover:border-success/40';
      default: return 'border-muted';
    }
  };

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Contact & Support</h2>
          <p className="text-muted-foreground">Meet your learning development team</p>
        </div>

        {/* Team Members */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {teamMembers.map((member) => {
            const IconComponent = member.icon;
            
            return (
              <Card key={member.name} className={`hover-lift transition-smooth border-2 ${getColorBorder(member.color)}`}>
                <CardHeader className="text-center pb-4">
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative">
                      <Avatar className="w-16 h-16">
                        <AvatarFallback className={`text-lg font-semibold ${getColorClasses(member.color)}`}>
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full ${getColorClasses(member.color)} flex items-center justify-center`}>
                        <IconComponent className="w-3 h-3" />
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
                      <p className="text-sm font-medium text-primary">{member.role}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {member.description}
                  </p>
                  <div className="flex gap-2 justify-center">
                    <Button size="sm" variant="outline" className="hover-accent">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                    <Button size="sm" variant="outline" className="hover-accent">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Team Communication CTA */}
        <div className="bg-card border rounded-2xl p-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Message the Team</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Have a question that doesn't fit into a specific category? Need to reach multiple team members? 
              Use our team communication tools to get connected with the right people quickly.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                Open Teams Chat
                <MessageSquare className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="hover-accent">
                Submit Support Form
                <Mail className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            <div className="mt-6 text-sm text-muted-foreground">
              <p>Response time: Usually within 2-4 hours during business hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};