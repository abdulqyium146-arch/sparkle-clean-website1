import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MapPin, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const regions = [
  {
    name: "Orange County",
    cities: ["Orlando", "Winter Park", "Apopka", "Ocoee", "Winter Garden", "Maitland"],
  },
  {
    name: "Osceola County",
    cities: ["Kissimmee", "St. Cloud", "Celebration", "Poinciana"],
  },
  {
    name: "Seminole County",
    cities: ["Sanford", "Lake Mary", "Altamonte Springs", "Casselberry", "Longwood", "Oviedo"],
  },
  {
    name: "Polk County",
    cities: ["Lakeland", "Winter Haven", "Bartow", "Auburndale", "Haines City"],
  },
  {
    name: "Volusia County",
    cities: ["Daytona Beach", "Deltona", "Ormond Beach", "Port Orange", "DeLand"],
  },
  {
    name: "Lake County",
    cities: ["Clermont", "Leesburg", "Mount Dora", "Eustis", "Tavares"],
  },
];

const allCities = regions.flatMap(r => r.cities);

const ServiceAreas = () => {
  return (
    <>
      <Helmet>
        <title>
          Pressure Washing Service Areas in Central Florida | KJS Supreme Pressure Washing LLC
        </title>
        <meta
          name="description"
          content="KJS Supreme Pressure Washing LLC provides professional pressure washing services across Central Florida. We specialize in house washing, driveway cleaning, roof soft washing, concrete and commercial pressure washing. Call +1 213-841-6924."
        />
        <meta
          name="keywords"
          content="pressure washing central florida, pressure washing orlando fl, pressure washing deltona fl, driveway pressure washing near me, house soft washing central florida, roof soft washing florida, concrete cleaning central florida, commercial pressure washing services"
        />
        <link
          rel="canonical"
          href="https://kjsupremepressurewashing.com/service-areas"
        />
      </Helmet>

      <Navbar />

      <main id="main-content">
        {/* Hero */}
        <header className="relative py-20 lg:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <span className="inline-block text-sm font-medium bg-primary-foreground/20 px-4 py-1.5 rounded-full mb-4">
              Service Areas
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Pressure Washing Services Across Central Florida
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-6">
              KJS Supreme Pressure Washing LLC proudly delivers affordable and reliable
              pressure washing services throughout Central Florida.
            </p>
            <div className="flex items-center justify-center gap-2 opacity-80">
              <MapPin className="h-5 w-5" />
              <span>Residential & Commercial • Fully Licensed & Insured</span>
            </div>
          </div>
        </header>

        {/* Coverage */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Coverage Area"
              title="Central Florida Pressure Washing Coverage"
              subtitle="We proudly serve homes, businesses, and communities throughout Central Florida."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regions.map(region => (
                <Card key={region.name}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <CardTitle>{region.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {region.cities.map(city => (
                        <li key={city} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-success" />
                          Pressure Washing in {city}, FL
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Cities */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="All Locations"
              title="Cities We Serve in Central Florida"
              subtitle="Local, reliable pressure washing services near you."
            />

            <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
              {allCities.map(city => (
                <span
                  key={city}
                  className="px-4 py-2 bg-card border rounded-full text-sm font-medium"
                >
                  {city}, FL
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-foreground text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              Need Pressure Washing in Central Florida?
            </h2>
            <p className="text-lg opacity-80 mb-8">
              Call KJS Supreme Pressure Washing LLC today for fast service,
              fair pricing, and guaranteed results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-accent">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+12138416924">Call +1 213-841-6924</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServiceAreas;
