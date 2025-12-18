import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Award, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      aria-label="KJS Supreme Pressure Washing LLC Central Florida"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground">
              Licensed & Insured • Serving All Central Florida • Open 24/7
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight animate-fade-in">
            Central Florida{' '}
            <span className="text-primary">Pressure Washing Services</span>
            <br />
            by KJS Supreme
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-in">
            Professional house washing, driveway cleaning, roof soft washing, and
            commercial pressure washing across Central Florida including Orlando,
            Tampa, Kissimmee, Lakeland, Clermont, and surrounding areas.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
            <Button asChild size="lg" className="bg-primary hover:bg-accent text-lg px-8">
              <Link to="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg"
            >
              <a href="tel:+12138416924">
                <Phone className="mr-2 h-5 w-5" />
                +1 213-841-6924
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in">
            {[
              {
                icon: Shield,
                label: "Licensed & Insured",
                value: "100% Property Protection",
              },
              {
                icon: Award,
                label: "5-Star Local Service",
                value: "Trusted Across Central Florida",
              },
              {
                icon: Clock,
                label: "Open 24 Hours",
                value: "Same-Day & Emergency Service",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 bg-primary-foreground/5 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/10"
              >
                <div className="p-2 bg-primary/20 rounded-lg">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">{item.label}</p>
                  <p className="font-semibold text-primary-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
