import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide affordable, reliable, and eco-friendly transportation solutions that empower communities and contribute to a sustainable future."
    },
    {
      icon: Award,
      title: "Quality Commitment",
      description: "We partner with leading brands like Piaggio and Citylife to ensure our customers receive only the best quality electric vehicles."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority. We provide comprehensive support from purchase to after-sales service."
    },
    {
      icon: TrendingUp,
      title: "Growth & Innovation",
      description: "Continuously expanding our services and adopting new technologies to serve you better."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About KHUSHAL ELECTRIC AUTO</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in electric mobility solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                KHUSHAL ELECTRIC AUTO has been serving the communities of Varanasi, Chandauli, and Mirzapur with dedication and integrity. We started with a simple vision: to make eco-friendly transportation accessible and affordable for everyone.
              </p>
              <p className="text-lg">
                Today, we are proud to be the authorized dealer for premium brands like Piaggio and Citylife, offering a wide range of electric auto rickshaws that combine quality, performance, and reliability.
              </p>
              <p className="text-lg">
                Our commitment goes beyond just selling vehicles. We provide comprehensive after-sales support, including warranty services, genuine spare parts, and maintenance solutions to ensure your e-rickshaw delivers optimal performance for years to come.
              </p>
              <p className="text-lg font-semibold text-foreground">
                With on-spot finance assistance, free test drives, and a team of experienced professionals, we make your transition to electric mobility seamless and hassle-free.
              </p>
            </div>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-8 bg-muted text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <p className="text-muted-foreground">Years of Excellence</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <p className="text-muted-foreground">Service Locations</p>
            </div>
          </div>
          <p className="text-lg mb-6 text-muted-foreground">
            Join hundreds of satisfied customers who have made the switch to eco-friendly transportation with us.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/products">View Our Products</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;