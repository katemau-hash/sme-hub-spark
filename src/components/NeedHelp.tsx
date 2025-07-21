import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  HelpCircle, 
  Monitor, 
  Video, 
  Globe, 
  ArrowRight,
  MessageSquare
} from "lucide-react";

export const NeedHelp = () => {
  const helpCategories = [
    {
      title: "Not Sure What's Needed?",
      description: "Get clarity on your role, expectations, and deliverables for any project",
      icon: HelpCircle,
      color: "primary",
      actions: ["View project overview", "Contact project lead", "See examples"]
    },
    {
      title: "Need Help Using Rise or Reviewing a Module?",
      description: "Technical support for learning platforms, content review tools, and systems",
      icon: Monitor,
      color: "accent", 
      actions: ["Access tutorials", "Get technical support", "Request training"]
    },
    {
      title: "Need to Submit a Video, Script, or Idea?",
      description: "Guidance on content creation, submission processes, and file formats",
      icon: Video,
      color: "success",
      actions: ["Upload guidelines", "Submit content", "Get feedback"]
    },
    {
      title: "Request a Translation",
      description: "Multilingual support for content localization and accessibility",
      icon: Globe,
      color: "warning",
      actions: ["Translation request", "Language support", "Cultural review"]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary': return 'bg-primary text-primary-foreground';
      case 'accent': return 'bg-accent text-accent-foreground';
      case 'success': return 'bg-success text-success-foreground';
      case 'warning': return 'bg-warning text-warning-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getBorderColor = (color: string) => {
    switch (color) {
      case 'primary': return 'hover:border-primary/50';
      case 'accent': return 'hover:border-accent/50';
      case 'success': return 'hover:border-success/50';
      case 'warning': return 'hover:border-warning/50';
      default: return 'hover:border-muted';
    }
  };

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="text-muted-foreground">Find the right support for your situation</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {helpCategories.map((category) => {
            const IconComponent = category.icon;
            
            return (
              <Card key={category.title} className={`hover-lift transition-smooth group ${getBorderColor(category.color)}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${getColorClasses(category.color)}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="min-w-0">
                      <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                        {category.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {category.actions.map((action, index) => (
                      <Button
                        key={action}
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start text-sm hover-accent h-8"
                      >
                        <ArrowRight className="mr-2 w-3 h-3" />
                        {action}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Help CTA */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl font-bold mb-4">Still Need Assistance?</h3>
            <p className="text-lg opacity-90 mb-6">
              Our team is here to support you every step of the way. Get personalized help for your specific situation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Chat with Support
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};