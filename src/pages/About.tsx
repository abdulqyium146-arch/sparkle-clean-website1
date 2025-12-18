import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  Shield,
  Award,
  Users,
  Clock,
  Target,
  Heart,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "15+", label: "Years of Pressure Washing Experience" },
  { value: "5,000+", label: "Residential & Commercial Properties Cleaned" },
  { value: "200+", label: "Verified 5-Star Customer Reviews" },
  { value: "100%", label: "Customer Satisfaction Commitment" },
];

const values = [
  {
    icon: Shield,
    title: "Integrity & Transparency",
    description:
      "We provide honest pricing, clear communication, and dependable pressure washing services with no hidden fees.",
  },
  {
    icon: Award,
    title: "Quality Workmanship",
    description:
      "Our supreme pressure washing services are performed using professional equipment and proven cleaning methods.",
  },
  {
    icon: Users,
    title: "Customer Satisfaction",
    description:
      "Every pressure washing project is completed with attention to detail and respect for your property.",
  },
  {
    icon: Heart,
    title: "Local Community Commitment",
    description:
      "We proudly serve homeowners and businesses throughout Central Florida with reliable local service.",
  },
];

const certifications = [
  "Licensed & Fully Insured Pressure Washing Company",
  "EPA-Compliant Cleaning Practices",
  "Residential & Commercial Pressure Washing Specialists",
  "Eco-Friendly Cleaning Solutions",
  "Background-Checked & Trained Technicians",
  "Trusted Local Central Florida Business",
];

const About = () => {
  return (
    <>
      {/* SEMANTIC SEO META */}
      <Helmet>
        <title>
          About KJS Supreme Pressure Washing LLC | Professional Pressure Washing Services
        </title>
        <meta
          name="description"
          content="Learn about KJS Supreme Pressure Washing LLC, a trusted provider of professional pressure washing services and supreme pressure washing services across Central Florida and Deltona."
        />
        <meta
          name="keywords"
          content="pressure washing services, supreme pressure washing services, KJS Supreme Pressure Washing LLC, pressure washing company Central Florida, pressure washing Deltona"
        />
        <link
          rel="canonical"
          href="https://kjsupremepressurewashing.com/about"
        />
      </Helmet>

      <Navbar />

      <main itemScope itemType="https://schema.org/LocalBusiness">
        {/* HERO – PRIMARY ENTITY */}
        <section className="relative py-20 lg:py-32 bg-primary text-center">
          <div className="container mx-auto px-4">
            <span className="inline-block text-sm font-medium bg-primary-foreground/20 text-primary-foreground px-4 py-1.5 rounded-full mb-4">
              About Our Company
            </span>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6"
              itemProp="name"
            >
              KJS Supreme Pressure Washing LLC
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80" itemProp="description">
              Providing professional pressure washing services and supreme pressure
              washing services for residential and commercial properties across
              Central Florida.
            </p>
          </div>
        </section>

        {/* EXPERIENCE & AUTHORITY */}
        <section className="py-12 bg-card border-b border-border">
          <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-heading font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COMPANY STORY – TOPICAL RELEVANCE */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <article>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                A Trusted Pressure Washing Company in Central Florida
              </h2>

              <p className="text-muted-foreground mb-4">
                KJS Supreme Pressure Washing LLC was founded to deliver reliable,
                high-quality pressure washing services for homeowners and
                businesses throughout Central Florida and Deltona.
              </p>

              <p className="text-muted-foreground mb-4">
                Our supreme pressure washing services include house washing,
                driveway cleaning, roof soft washing, and commercial exterior
                cleaning — all designed to protect and enhance property value.
              </p>

              <p className="text-muted-foreground">
                We focus on long-term results, safe cleaning techniques, and
                customer satisfaction on every project we complete.
              </p>
            </article>

            <figure>
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt="Professional pressure washing services by KJS Supreme Pressure Washing LLC"
                className="rounded-2xl shadow-xl"
                itemProp="image"
              />
            </figure>
          </div>
        </section>

        {/* MISSION – TRUST SIGNAL */}
        <section className="py-16 lg:py-24 bg-secondary text-center">
          <Target className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            To provide dependable, affordable, and professional pressure washing
            services that exceed expectations while building long-term
            relationships with our customers.
          </p>
        </section>

        {/* VALUES – E-E-A-T */}
        <section className="py-16 lg:py-24 bg-background">
          <SectionHeader
            badge="Our Core Values"
            title="Why Customers Choose Our Pressure Washing Services"
            subtitle="Professional standards that define our supreme pressure washing services."
          />
          <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title}>
                <CardContent className="p-6 text-center">
                  <value.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS – TRUST */}
        <section className="py-16 lg:py-24 bg-primary">
          <SectionHeader
            badge="Licensing & Safety"
            title="Licensed, Insured & Professional"
            subtitle="Your property is protected with our certified pressure washing services."
            light
          />
          <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-3 bg-primary-foreground/10 rounded-lg px-4 py-3"
              >
                <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                <span className="text-primary-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA – CONVERSION */}
        <section className="py-16 lg:py-24 bg-foreground text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Schedule Professional Pressure Washing Services Today
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            Contact KJS Supreme Pressure Washing LLC for trusted pressure washing
            services in Central Florida and Deltona.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:+12138416924">Call Now</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
