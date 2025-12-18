import { Helmet } from "react-helmet";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const services = [
  "House Washing",
  "Driveway & Sidewalk Cleaning",
  "Roof Soft Washing",
  "Commercial Pressure Washing",
  "Paver Cleaning",
  "Fence Cleaning",
  "Emergency Pressure Washing",
  "Other",
];

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+1 213-841-6924",
    link: "tel:+12138416924",
    description: "Call or text us 24/7",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@supremepressurewashingservices.com",
    link: "mailto:info@supremepressurewashingservices.com",
    description: "Fast response – usually within minutes",
  },
  {
    icon: MapPin,
    title: "Service Area",
    value: "Central Florida",
    description:
      "Orlando, Tampa, Kissimmee, Lakeland, Clermont, Davenport, Winter Park, Altamonte Springs, Sanford, Apopka, Oviedo, Lake Mary, Deltona, DeLand & surrounding areas",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Open 24 Hours",
    description: "Emergency & same-day service available",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Quote Request Received!",
      description:
        "Supreme Pressure Washing Services will contact you shortly with a free estimate.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Helmet>
        <title>
          Contact Supreme Pressure Washing Services | 24/7 Pressure Washing
          Central Florida
        </title>
        <meta
          name="description"
          content="Contact Supreme Pressure Washing Services for 24/7 pressure washing in Central Florida. Serving Orlando, Tampa, Kissimmee, Lakeland, Clermont, Davenport, Winter Park and all surrounding areas. Call now for a free quote."
        />
        <meta
          name="keywords"
          content="pressure washing Central Florida, power washing Orlando, driveway cleaning Kissimmee, roof washing Tampa, house washing Lakeland, 24 hour pressure washing near me"
        />
      </Helmet>

      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative py-20 lg:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Contact Supreme Pressure Washing Services
            </h1>
            <p className="text-lg opacity-90">
              We provide 24/7 professional pressure washing across Central
              Florida. From Orlando to Tampa, Kissimmee to Lakeland — call now
              for fast, reliable service.
            </p>
          </div>
        </section>

        {/* FORM + INFO */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 grid lg:grid-cols-5 gap-12">
            {/* FORM */}
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="p-6 lg:p-8">
                  <h2 className="text-2xl font-bold mb-4">
                    Request a Free Quote
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          setFormData((p) => ({ ...p, service: value }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((s) => (
                            <SelectItem key={s} value={s}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <Textarea
                      name="message"
                      placeholder="Tell us about your property, location, and service needed."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                    />

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Get Free Quote"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* CONTACT INFO */}
            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map((info) => (
                <Card key={info.title}>
                  <CardContent className="p-4 flex gap-4">
                    <info.icon className="text-primary" />
                    <div>
                      <h3 className="font-semibold">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-primary font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p>{info.value}</p>
                      )}
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Why Choose Us?</h3>
                  <ul className="space-y-2">
                    {[
                      "24/7 availability",
                      "Free quotes",
                      "Residential & commercial",
                      "Eco-friendly cleaning",
                      "Satisfaction guaranteed",
                    ].map((i) => (
                      <li key={i} className="flex gap-2">
                        <CheckCircle2 />
                        {i}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SEO CONTENT */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-6">
              Pressure Washing Services Across Central Florida
            </h2>
            <p className="mb-4">
              Supreme Pressure Washing Services proudly serves Orlando,
              Kissimmee, Tampa, Lakeland, Clermont, Davenport, Winter Park,
              Altamonte Springs, Sanford, Apopka, Oviedo, Lake Mary, Deltona,
              DeLand, and all surrounding Central Florida communities.
            </p>
            <p>
              We specialize in house washing, driveway cleaning, roof soft
              washing, commercial pressure washing, and emergency cleaning
              services. Available 24 hours a day.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold">
                  Do you offer 24 hour pressure washing?
                </h3>
                <p>
                  Yes, Supreme Pressure Washing Services is open 24 hours for
                  residential and commercial jobs.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  What areas do you serve in Central Florida?
                </h3>
                <p>
                  We serve all of Central Florida including Orlando, Tampa,
                  Kissimmee, Lakeland and nearby cities.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  How do I get a free quote?
                </h3>
                <p>
                  Call{" "}
                  <a href="tel:+12138416924" className="text-primary underline">
                    +1 213-841-6924
                  </a>{" "}
                  or fill out our contact form anytime.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
