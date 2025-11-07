import { Link } from "react-router-dom";
import { Phone, MessageCircle, Shield, Wrench, Banknote, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-erickshaw.jpg";
import piaggioImage from "@/assets/piaggio-banner.jpg";
import citylifeImage from "@/assets/citylife-banner.jpg";
const Home = () => {
  const features = [{
    icon: Shield,
    title: "5-Year Service Warranty",
    description: "Comprehensive warranty coverage for peace of mind"
  }, {
    icon: Wrench,
    title: "Free First Service",
    description: "Complimentary first service on all vehicles"
  }, {
    icon: Banknote,
    title: "On-Spot Finance",
    description: "Easy financing options available instantly"
  }, {
    icon: MapPin,
    title: "Free Test Drive",
    description: "Available in Varanasi, Chandauli & Mirzapur"
  }];
  const serviceAreas = ["Varanasi", "Chandauli", "Mirzapur"];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Electric Auto Rickshaw on road in Varanasi" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-hero" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-background">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Your Journey to Smart & Eco-Friendly Travel Starts Here
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              KHUSHAL ELECTRIC AUTO - Varanasi's Most Trusted E-Rickshaw Dealer
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <a href="tel:+919455335010">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-background/10 backdrop-blur-sm hover:bg-background/20 text-background border-background">
                <a href="https://wa.me/919455335010" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-background/10 backdrop-blur-sm hover:bg-background/20 text-background border-background">
                <a href="#models">
                  View Models
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Banners */}
      <section id="models" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Premium Range</h2>
            <p className="text-lg text-muted-foreground">Choose from our authorized dealer brands</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <Link to="/products/piaggio" className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[3/2] overflow-hidden">
                
              </div>
              
            </Link>

            <Link to="/products/citylife" className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[3/2] overflow-hidden">
                
              </div>
              
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose KHUSHAL ELECTRIC AUTO?</h2>
            <p className="text-lg text-muted-foreground">Your trusted partner for electric mobility solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">We Serve Across</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {serviceAreas.map((area, index) => <div key={index} className="flex items-center space-x-2">
                <MapPin className="w-6 h-6" />
                <span className="text-xl font-semibold">{area}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Own Your E-Rickshaw?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Get the best price, finance options, and after-sales service. Contact us now!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <a href="tel:+919455335010">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-background/10 backdrop-blur-sm hover:bg-background/20 border-background text-background">
              <a href="https://wa.me/919455335010" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-background/10 backdrop-blur-sm hover:bg-background/20 border-background text-background">
              <Link to="/contact">
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;