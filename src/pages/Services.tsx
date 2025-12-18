import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Home, Droplets, Leaf, Building2, Grid3X3, Fence } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "House Washing",
    description: "Restore your home's exterior to its original beauty with our professional house washing service. We use a safe soft-wash technique that removes dirt, mold, mildew, and algae without damaging your siding.",
    features: [
      "Safe for all siding types (vinyl, stucco, wood, brick)",
      "Removes mold, mildew, and algae",
      "Protects paint and extends siding life",
      "Eco-friendly cleaning solutions",
    ],
  },
  {
    icon: Grid3X3,
    title: "Driveway & Sidewalk Cleaning",
    description: "Transform your driveway and sidewalks from dull and stained to bright and clean. Our high-pressure cleaning removes years of built-up grime, oil stains, and organic growth.",
    features: [
      "Removes oil, grease, and rust stains",
      "Eliminates tire marks and scuff marks",
      "Safe for concrete, pavers, and asphalt",
      "Improves curb appeal instantly",
    ],
  },
  {
    icon: Leaf,
    title: "Roof Washing",
    description: "Protect your roof investment with our specialized soft-wash roof cleaning. We safely remove black streaks, algae, and moss that can damage shingles and reduce your home's energy efficiency.",
    features: [
      "Gentle soft-wash technique",
      "Removes black streaks (Gloeocapsa magma)",
      "Extends roof lifespan by years",
      "No high-pressure damage to shingles",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Pressure Washing",
    description: "Make a great first impression with a clean business exterior. We provide comprehensive pressure washing services for storefronts, parking lots, sidewalks, and building facades.",
    features: [
      "Flexible scheduling (nights/weekends)",
      "Storefronts and building exteriors",
      "Parking lots and garages",
      "Regular maintenance programs available",
    ],
  },
  {
    icon: Droplets,
    title: "Paver Cleaning & Sealing",
    description: "Bring your pavers back to life with our professional cleaning and optional sealing service. We remove embedded dirt and restore the original color of your patio, pool deck, or walkway.",
    features: [
      "Deep cleans between paver joints",
      "Removes moss, weeds, and stains",
      "Optional sealing for long-lasting protection",
      "Enhances color and prevents fading",
    ],
  },
  {
    icon: Fence,
    title: "Fence Cleaning",
    description: "Revitalize your fence and restore its original appearance. Whether wood, vinyl, or aluminum, we have the right cleaning approach to make your fence look brand new.",
    features: [
      "Safe for wood, vinyl, and metal fences",
      "Removes green algae and mildew",
      "Prepares wood for staining or painting",
      "Extends fence lifespan",
    ],
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Pressure Washing Services | House, Driveway, Roof Cleaning Central Florida</title>
        <meta
          name="description"
          content="Complete pressure washing services in Central Florida. House washing, driveway cleaning, roof washing, commercial washing, paver cleaning & fence cleaning. Free quotes!"
        />
        <meta name="keywords" content="house washing orlando, driveway cleaning tampa, roof washing central florida, commercial pressure washing, paver cleaning kissimmee" />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-sm font-medium bg-primary-foreground/20 text-primary-foreground px-4 py-1.5 rounded-full mb-4">
                Professional Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
                Our Pressure Washing Services
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
                From residential homes to commercial properties, we offer comprehensive exterior 
                cleaning solutions tailored to your specific needs.
              </p>
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="What We Offer"
              title="Comprehensive Cleaning Solutions"
              subtitle="Each service is performed by trained professionals using industry-leading equipment and eco-friendly cleaning products."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} detailed />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Our Process"
              title="How We Work"
              subtitle="A simple, hassle-free process from quote to completion."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { step: "1", title: "Request Quote", description: "Fill out our form or call us for a free, no-obligation estimate." },
                { step: "2", title: "Get Assessment", description: "We'll evaluate your property and provide a detailed quote." },
                { step: "3", title: "Schedule Service", description: "Pick a time that works for you - we offer flexible scheduling." },
                { step: "4", title: "Enjoy Results", description: "Sit back and enjoy your freshly cleaned property!" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-heading font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Contact us today for a free quote. We'll have your property looking its best in no time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-accent text-lg px-8">
                <Link to="/contact">Request Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg">
                <a href="tel:+14075551234">Call (407) 555-1234</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Services;