import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  MessageCircle, 
  Upload, 
  FileText, 
  ArrowRight,
  Star,
  CheckSquare,
  Lightbulb
} from "lucide-react";

export const SMEToolkit = () => {
  const resources = [
    {
      title: "How to Be a Great SME",
      description: "Best practices for providing valuable input and maintaining quality standards",
      icon: Star,
      color: "primary",
      link: "#"
    },
    {
      title: "What Makes Good Feedback",
      description: "Guidelines for constructive, actionable feedback that improves learning outcomes",
      icon: MessageCircle,
      color: "success",
      link: "#"
    },
    {
      title: "How to Submit Content",
      description: "Step-by-step guide for uploading materials, scripts, and other content",
      icon: Upload,
      color: "accent",
      link: "#"
    },
    {
      title: "Examples of Final Deliverables",
      description: "Sample outputs and completed projects to guide your contributions",
      icon: FileText,
      color: "info",
      link: "#"
    }
  ];

  const quickActions = [
    {
      title: "Content Review Checklist",
      description: "Ensure nothing gets missed",
      icon: CheckSquare
    },
    {
      title: "Feedback Templates",
      description: "Speed up your review process",
      icon: MessageCircle
    },
    {
      title: "SME Best Practices",
      description: "Tips from experienced contributors",
      icon: Lightbulb
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary': return 'bg-primary/10 text-primary border-primary/20';
      case 'accent': return 'bg-accent/10 text-accent border-accent/20';
      case 'success': return 'bg-success/10 text-success border-success/20';
      case 'info': return 'bg-info/10 text-info border-info/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">SME Toolkit</h2>
          <p className="text-muted-foreground">Resources and guides to help you contribute effectively</p>
        </div>

        {/* Main Resources */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource) => {
            const IconComponent = resource.icon;
            
            return (
              <Card key={resource.title} className="hover-lift transition-smooth group">
                <CardHeader className="text-center pb-4">
                  <div className={`w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center border ${getColorClasses(resource.color)}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full hover-accent group-hover:bg-primary/5"
                  >
                    Access Resource
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="bg-muted/30 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-6 text-center">Quick Actions</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {quickActions.map((action) => {
              const IconComponent = action.icon;
              
              return (
                <div key={action.title} className="flex items-center gap-3 p-4 bg-card rounded-lg hover-lift transition-smooth cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-sm">{action.title}</h4>
                    <p className="text-xs text-muted-foreground">{action.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};