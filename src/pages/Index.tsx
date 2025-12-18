import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  Home,
  Droplets,
  Leaf,
  Building2,
  Grid3X3,
  Fence,
  ArrowRight,
  MapPin,
  CheckCircle2,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import BeforeAfter from "@/components/BeforeAfter";
import { Button } from "@/components/ui/button";

/* ---------------- SCHEMA ---------------- */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "PressureWashingService",
  "name": "SupreWashing",
  "url": "https://suprewashing.com",
  "telephone": "+1-407-555-1234",
  "priceRange": "$$",
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Central Florida"
  },
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "75"
  },
  "sameAs": [
    "https://www.google.com/search?q=SupreWashing+Pressure+Washing"
  ]
};
/* ---------------------------------------- */

const services = [
  { icon: Home, title: "House Washing", description: "Restore your home's beauty with our gentle yet effective exterior cleaning." },
  { icon: Grid3X3, title: "Driveway & Sidewalk", description: "Remove oil stains, dirt, and grime from concrete and pavers." },
  { icon: Leaf, title: "Roof Washing", description: "Safe soft-wash technique to remove algae, moss, and black streaks." },
  { icon: Building2, title: "Commercial Washing", description: "Professional cleaning solutions for businesses of all sizes." },
  { icon: Droplets, title: "Paver Cleaning", description: "Bring back the original color of your pavers and patios." },
  { icon: Fence, title: "Fence Cleaning", description: "Revitalize wood, vinyl, and metal fences to like-new condition." },
];

const testimonials = [
  { name: "Michael Thompson", location: "Orlando, FL", rating: 5, text: "Amazing driveway cleaning service!", service: "Driveway Cleaning" },
  { name: "Sarah Martinez", location: "Kissimmee, FL", rating: 5, text: "House looks brand new again!", service: "House Washing" },
  { name: "David Chen", location: "Winter Park, FL", rating: 5, text: "Best pressure washing company in Central Florida.", service: "Commercial Washing" },
];

const beforeAfterProjects = [
  { title: "Driveway Restoration", beforeImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64", afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
  { title: "House Exterior Cleaning", beforeImage: "https://images.unsplash.com/photo-1570129477492-45c003edd2be", afterImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6" },
  { title: "Patio Transformation", beforeImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b", afterImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" },
];

const serviceAreas = [
  "Orlando", "Tampa", "Kissimmee", "Lakeland", "Winter Park",
  "Clermont", "Sanford", "Oviedo", "Apopka", "Daytona Beach",
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>SupreWashing | Professional Pressure Washing Central Florida</title>
        <meta
          name="description"
          content="Professional pressure washing in Central Florida. House washing, driveway cleaning, roof washing & commercial pressure washing. Call now!"
        />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
<meta name="google-site-verification" content="yCEZDMBldOol-2CEPsUEQ_5B2n9dbUEfREwqI3xYldo" />

      </Helmet>

      <Navbar />

      <main>
        <Hero />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Our Services"
              title="Complete Exterior Cleaning Solutions"
              subtitle="Residential & commercial pressure washing services in Central Florida."
            />
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((s) => <ServiceCard key={s.title} {...s} />)}
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <SectionHeader badge="Our Results" title="Before & After Transformations" />
            <div className="grid md:grid-cols-3 gap-6">
              {beforeAfterProjects.map((p) => <BeforeAfter key={p.title} {...p} />)}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionHeader badge="Testimonials" title="What Our Customers Say" />
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => <TestimonialCard key={t.name} {...t} />)}
            </div>
          </div>
        </section>

        <section className="py-16 bg-foreground text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready for a Cleaner Property?
          </h2>
          <Button asChild size="lg">
            <Link to="/contact">Get Free Quote</Link>
          </Button>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Index;
