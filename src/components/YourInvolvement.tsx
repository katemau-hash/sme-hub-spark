import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, MessageSquare, FileCheck } from "lucide-react";
export const YourInvolvement = () => {
  const userCourses = [{
    title: "Cybersecurity Awareness Training",
    status: "Needs Feedback",
    statusType: "urgent",
    action: "Review Module 3 Content",
    dueDate: "Due in 3 days",
    progress: 75
  }, {
    title: "Leadership Development Series",
    status: "Final Review",
    statusType: "review",
    action: "Approve Final Assessment",
    dueDate: "Due in 1 week",
    progress: 90
  }, {
    title: "Data Privacy Compliance",
    status: "In Development",
    statusType: "development",
    action: "Provide Subject Expertise",
    dueDate: "Due in 2 weeks",
    progress: 40
  }, {
    title: "Remote Work Best Practices",
    status: "Content Submitted",
    statusType: "complete",
    action: "No action needed",
    dueDate: "Completed",
    progress: 100
  }];
  const getStatusColor = (type: string) => {
    switch (type) {
      case 'urgent':
        return 'bg-warning text-warning-foreground';
      case 'review':
        return 'bg-primary text-primary-foreground';
      case 'development':
        return 'bg-info text-info-foreground';
      case 'complete':
        return 'bg-success text-success-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };
  const getStatusIcon = (type: string) => {
    switch (type) {
      case 'urgent':
        return MessageSquare;
      case 'review':
        return FileCheck;
      case 'development':
        return Calendar;
      case 'complete':
        return FileCheck;
      default:
        return Calendar;
    }
  };
  return <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Your Involvement</h2>
          <p className="text-muted-foreground">Courses and projects currently supported by SMEs</p>
        </div>

        <div className="grid gap-4 max-w-4xl mx-auto mb-8">
          {userCourses.map((course, index) => {
          const StatusIcon = getStatusIcon(course.statusType);
          return <Card key={course.title} className={`hover-lift transition-smooth ${course.statusType === 'urgent' ? 'border-l-4 border-l-warning' : course.statusType === 'review' ? 'border-l-4 border-l-primary' : ''}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{course.title}</CardTitle>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span>{course.action}</span>
                        <span>•</span>
                        <span>{course.dueDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(course.statusType)}>
                        <StatusIcon className="w-3 h-3 mr-1" />
                        {course.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                        <span>Progress: {course.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className={`h-2 rounded-full transition-all duration-300 ${course.progress === 100 ? 'bg-success' : course.progress > 75 ? 'bg-primary' : course.progress > 50 ? 'bg-info' : 'bg-muted-foreground'}`} style={{
                      width: `${course.progress}%`
                    }} />
                      </div>
                    </div>
                    {course.statusType !== 'complete' && <Button size="sm" variant="outline" className="ml-4 hover-accent">
                        View Details
                      </Button>}
                  </div>
                </CardContent>
              </Card>;
        })}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="hover-accent">
            See All Assignments
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>;
};