import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  service?: string;
}

const TestimonialCard = ({ name, location, rating, text, service }: TestimonialCardProps) => {
  return (
    <Card className="h-full border-border hover:border-primary/30 transition-colors">
      <CardContent className="p-6 flex flex-col h-full">
        {/* Quote Icon */}
        <div className="mb-4">
          <Quote className="h-8 w-8 text-primary/20" />
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < rating ? "text-warning fill-warning" : "text-muted"
              }`}
            />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-muted-foreground flex-grow mb-4 italic">
          "{text}"
        </p>

        {/* Service Badge */}
        {service && (
          <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-4 self-start">
            {service}
          </span>
        )}

        {/* Author */}
        <div className="border-t border-border pt-4">
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;