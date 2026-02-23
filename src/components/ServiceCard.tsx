import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
  detailed?: boolean;
}

const ServiceCard = ({ title, description, icon: Icon, features, detailed = false }: ServiceCardProps) => {
  if (detailed) {
    return (
      <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
        <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
          <div className="p-6 bg-card rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-12 w-12 text-primary" />
          </div>
        </div>
        <CardHeader>
          <CardTitle className="font-heading text-xl">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {features && features.length > 0 && (
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          )}
          <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Link to="/contact">
              Get a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="group text-center p-6 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
        <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
      </div>
      <CardTitle className="font-heading text-lg mb-2">{title}</CardTitle>
      <CardDescription className="text-sm">{description}</CardDescription>
    </Card>
  );
};

export default ServiceCard;