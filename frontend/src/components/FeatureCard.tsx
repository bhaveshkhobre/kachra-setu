import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  buttonText?: string;
  onAction?: () => void;
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  buttonText = "Learn More",
  onAction 
}: FeatureCardProps) => {
  return (
    <Card className="bg-gradient-card border-border hover:shadow-medium transition-all duration-300 hover:border-primary/30 group">
      <CardHeader>
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
          <Icon className="h-6 w-6 text-card" />
        </div>
        <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
              {feature}
            </li>
          ))}
        </ul>
        
        <Button 
          variant="default" 
          className="w-full mt-6"
          onClick={onAction}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;