import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">KHUSHAL ELECTRIC AUTO</h3>
            <p className="text-sm opacity-90 mb-4">
              Your trusted partner for eco-friendly electric auto rickshaws in Varanasi, Chandauli, and Mirzapur.
            </p>
            <div className="flex space-x-3">
              <a
                href="tel:+919455335010"
                className="bg-background text-foreground p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919455335010"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background text-foreground p-2 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors"
                aria-label="WhatsApp us"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Our Brands</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products/piaggio" className="opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                  Piaggio E-Rickshaws
                </Link>
              </li>
              <li>
                <Link to="/products/citylife" className="opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                  Citylife E-Rickshaws
                </Link>
              </li>
            </ul>
            <h4 className="font-semibold text-lg mb-4 mt-6">Service Areas</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Varanasi</li>
              <li>Chandauli</li>
              <li>Mirzapur</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="opacity-90">Padao, Varanasi, Uttar Pradesh, India, 221008</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+919455335010" className="opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                  +91 94553 35010
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <a
                  href="https://wa.me/919455335010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 hover:text-secondary transition-colors"
                >
                  WhatsApp: +91 94553 35010
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-6 text-center text-sm opacity-90">
          <p>&copy; {currentYear} KHUSHAL ELECTRIC AUTO. All rights reserved.</p>
          <p className="mt-2">Sustainable Rides for a Greener Tomorrow</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;