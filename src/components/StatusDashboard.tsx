import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, FileText, Eye, CheckCircle } from "lucide-react";

export const StatusDashboard = () => {
  const statusData = [
    {
      title: "Courses in Development",
      count: 8,
      icon: FileText,
      color: "warning",
      description: "Content being created"
    },
    {
      title: "Courses in Review", 
      count: 5,
      icon: Eye,
      color: "primary",
      description: "Awaiting SME feedback"
    },
    {
      title: "Courses Finalized",
      count: 12,
      icon: CheckCircle,
      color: "success",
      description: "Ready for deployment"
    }
  ];

  const totalCourses = statusData.reduce((sum, item) => sum + item.count, 0);
  
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Project Snapshot</h2>
          <p className="text-muted-foreground">Current status of all learning initiatives</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {statusData.map((item, index) => {
            const IconComponent = item.icon;
            const percentage = (item.count / totalCourses) * 100;
            
            return (
              <Card key={item.title} className="hover-lift transition-smooth">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-lg ${
                      item.color === 'warning' ? 'bg-warning-soft text-warning' :
                      item.color === 'primary' ? 'bg-primary/10 text-primary' :
                      'bg-success-soft text-success'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-bold">{item.count}</span>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                  <Progress 
                    value={percentage} 
                    className={`h-2 ${
                      item.color === 'warning' ? '[&>div]:bg-warning' :
                      item.color === 'primary' ? '[&>div]:bg-primary' :
                      '[&>div]:bg-success'
                    }`}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {percentage.toFixed(0)}% of total projects
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="hover-accent">
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};