import { Link } from "react-router-dom";
import {
  Droplets,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Company Info */}
          <div className="space-y-4">
            <a
              href="https://share.google/AxOD0H4lBjeUD5oWH"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <div className="p-2 bg-primary rounded-lg">
                <Droplets className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-heading font-bold">
                KJS Pressure Washing LLC
              </span>
            </a>

            <p className="text-background/70 text-sm leading-relaxed">
              Central Florida’s trusted pressure washing experts delivering
              professional residential and commercial exterior cleaning.
            </p>

            <div className="flex gap-3">
              <a className="p-2 bg-background/10 rounded-lg hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a className="p-2 bg-background/10 rounded-lg hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a className="p-2 bg-background/10 rounded-lg hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">

              {/* SEO Anchor Link */}
              <li>
                <a
                  href="https://kjsupremepressurewashing.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Pressure Washing Services in Deltona
                </a>
              </li>

              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Our Services" },
                { href: "/about", label: "About Us" },
                { href: "/service-areas", label: "Service Areas" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "House Washing",
                "Driveway Cleaning",
                "Roof Washing",
                "Commercial Washing",
                "Paver Cleaning",
                "Fence Cleaning",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+12138416924" className="text-background/70 text-sm">
                  +1 213-841-6924
                </a>
              </li>

              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:info@suprewashing.com"
                  className="text-background/70 text-sm"
                >
                  info@suprewashing.com
                </a>
              </li>

              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-background/70 text-sm">
                  Serving Central Florida<br />Orlando & Surrounding Areas
                </span>
              </li>

              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-background/70 text-sm">Open 24/7</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between text-sm text-background/60">
          <p>© {new Date().getFullYear()} KJS Pressure Washing LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-primary">Privacy Policy</a>
            <a className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
