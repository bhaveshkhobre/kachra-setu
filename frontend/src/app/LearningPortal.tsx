import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Play, Clock, Users, Award, Book } from "lucide-react";

const LearningPortal = () => {
  const courses = [
    {
      id: 1,
      title: "Waste Segregation Fundamentals",
      description: "Learn the basics of proper waste segregation and sorting techniques",
      duration: "45 min",
      level: "Beginner",
      students: 1240,
      rating: 4.8,
      category: "Training",
      image: "♻️"
    },
    {
      id: 2,
      title: "Safety Protocols for Sanitation Workers",
      description: "Comprehensive safety guidelines and protective equipment usage",
      duration: "1.2 hours",
      level: "Essential",
      students: 890,
      rating: 4.9,
      category: "Safety",
      image: "🦺"
    },
    {
      id: 3,
      title: "Advanced Recycling Techniques",
      description: "Advanced methods for processing different recyclable materials",
      duration: "2 hours",
      level: "Advanced",
      students: 567,
      rating: 4.7,
      category: "Technical",
      image: "🔄"
    },
    {
      id: 4,
      title: "Community Engagement Strategies",
      description: "How to effectively engage communities in waste management initiatives",
      duration: "1.5 hours",
      level: "Intermediate",
      students: 743,
      rating: 4.6,
      category: "Community",
      image: "👥"
    }
  ];

  const stats = [
    { label: "Active Learners", value: "5,240", icon: Users },
    { label: "Course Hours", value: "120+", icon: Clock },
    { label: "Certifications", value: "2,890", icon: Award },
    { label: "Resources", value: "450+", icon: Book }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "secondary";
      case "Intermediate": return "outline";
      case "Advanced": return "destructive";
      case "Essential": return "default";
      default: return "outline";
    }
  };

  function hoverImg(){

  }

  return (
    <section id="learning" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Learning Portal
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive educational resources and training programs for citizens 
            and sanitation workers. Build knowledge for effective waste management.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card border-border text-center">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Course */}
          <div className="lg:col-span-2">
            <Card className="bg-blue-300 text-primary-foreground mb-8">
              <CardContent className="p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge className="bg-primary-foreground/20 text-primary-foreground mb-4">
                      Featured Course
                    </Badge>
                    <h3 className="text-2xl font-bold mb-4">
                      Complete Waste Management Certification
                    </h3>
                    <p className="opacity-90 mb-6">
                      Comprehensive certification program covering all aspects of 
                      modern waste management, from collection to disposal.
                    </p>
                    <div className="flex items-center gap-6 mb-6">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">1.5 hours</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span className="text-sm">2,340 enrolled</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        <span className="text-sm">Certified</span>
                      </div>
                    </div>
                    <Button variant="secondary" size="lg">
                      <Play className="mr-2 h-5 w-5" />
                      Start Learning
                    </Button>
                  </div>
                  <div className="text-6xl opacity-20">
                    🎓
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="bg-card border-border hover:shadow-medium transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                        <span className="text-2xl">{course.image}</span>
                      </div>
                      <Badge variant={getLevelColor(course.level) as any}>
                        {course.level}
                      </Badge>
                    </div>
                    
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {course.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {course.students}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>⭐</span>
                        {course.rating}
                      </div>
                    </div>
                    
                    <Button variant="default" className="w-full">
                      <Play className="mr-2 h-4 w-4" />
                      Start Course
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Learning Resources */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5 text-primary" />
                  Quick Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-foreground text-sm mb-1">Safety Guidelines PDF</h4>
                    <p className="text-xs text-muted-foreground mb-2">Complete safety protocols document</p>
                    <Button variant="outline" size="sm" className="w-full">Download</Button>
                  </div>
                  
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-foreground text-sm mb-1">Segregation Chart</h4>
                    <p className="text-xs text-muted-foreground mb-2">Visual waste sorting reference</p>
                    <Button variant="outline" size="sm" className="w-full">View Chart</Button>
                  </div>
                  
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-foreground text-sm mb-1">Video Library</h4>
                    <p className="text-xs text-muted-foreground mb-2">120+ training videos</p>
                    <Button variant="outline" size="sm" className="w-full">Browse Videos</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-secondary text-secondary-foreground">
              <CardContent className="p-6 text-center">
                <GraduationCap className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Get Certified</h3>
                <p className="text-sm opacity-90 mb-4">
                  Complete courses and earn recognized certifications
                </p>
                <Button variant="outline" className="border-secondary-foreground/20 hover:bg-secondary-foreground/10">
                  View Certificates
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Overall Progress</span>
                      <span className="font-medium text-foreground">68%</span>
                    </div>
                    <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-primary rounded-full w-[68%]" />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">4</div>
                    <div className="text-sm text-muted-foreground">Courses Completed</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPortal;