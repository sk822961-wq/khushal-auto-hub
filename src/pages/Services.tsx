import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wrench, Shield, Package, Battery, MapPin, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Free First Service",
      description: "Complimentary first service for all new e-rickshaw purchases. Includes complete vehicle inspection, battery check, and performance optimization."
    },
    {
      icon: Shield,
      title: "5-Year Service Warranty",
      description: "Comprehensive warranty coverage on motor, controller, and major electrical components. Peace of mind for your investment."
    },
    {
      icon: Package,
      title: "Genuine Spare Parts",
      description: "Authentic OEM spare parts for Piaggio and Citylife vehicles. Maintain your vehicle's performance with quality components."
    },
    {
      icon: Battery,
      title: "Battery Warranty & Replacement",
      description: "Extended battery warranty and easy replacement services. We ensure your vehicle stays on the road with minimal downtime."
    },
    {
      icon: Clock,
      title: "Annual Maintenance Contracts",
      description: "Cost-effective AMC plans for regular maintenance. Scheduled servicing to keep your e-rickshaw in top condition."
    },
    {
      icon: MapPin,
      title: "Doorstep Service",
      description: "On-site repair and maintenance services available across Varanasi, Chandauli, and Mirzapur for your convenience."
    }
  ];

  const serviceAreas = [
    {
      area: "Varanasi",
      description: "Complete sales and service support in Varanasi city and surrounding areas"
    },
    {
      area: "Chandauli",
      description: "Authorized service center with genuine parts availability"
    },
    {
      area: "Mirzapur",
      description: "Full-service dealership with expert technicians"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive after-sales support to keep your e-rickshaw running smoothly
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Service Areas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {serviceAreas.map((location, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{location.area}</h3>
                <p className="text-muted-foreground text-sm">{location.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-8 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Service or Support?</h2>
          <p className="text-lg mb-6 opacity-95">
            Our expert technicians are ready to assist you. Book your service appointment today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <a href="tel:+919455335010">Call Service Center</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-background/10 backdrop-blur-sm hover:bg-background/20 border-background text-background">
              <Link to="/contact">Request Service</Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Services;