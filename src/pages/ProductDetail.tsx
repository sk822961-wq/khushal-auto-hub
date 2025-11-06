import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MessageCircle, Battery, Zap, Users, Gauge } from "lucide-react";
import piaggioDetail from "@/assets/piaggio-detail.jpg";
import citylifeDetail from "@/assets/citylife-detail.jpg";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const products = {
    piaggio: {
      name: "Piaggio Ape E-City",
      tagline: "Reliability Redefined",
      image: piaggioDetail,
      description: "The Piaggio Ape E-City represents decades of Italian engineering excellence adapted for Indian roads. Known for its robust build and low maintenance costs, it's the preferred choice for commercial operators.",
      features: [
        "Powerful electric motor for efficient performance",
        "Long-lasting battery with excellent range",
        "Spacious seating with comfortable passenger capacity",
        "Low maintenance and operational costs",
        "Strong chassis built for Indian road conditions",
        "Advanced safety features"
      ],
      specifications: {
        "Motor Power": "1000W - 1500W",
        "Battery": "48V / 100Ah - 150Ah",
        "Range": "80-120 km per charge",
        "Passenger Capacity": "4+1 (Driver + 4 passengers)",
        "Charging Time": "6-8 hours",
        "Top Speed": "35-40 km/h",
        "Warranty": "5 years on motor & controller"
      }
    },
    citylife: {
      name: "Citylife E-Rickshaw",
      tagline: "Style and Comfort",
      image: citylifeDetail,
      description: "Citylife e-rickshaws combine modern aesthetics with practical functionality. Designed for comfort and style, they're perfect for passenger transport with a premium feel.",
      features: [
        "Contemporary and stylish design",
        "Comfortable seating with premium upholstery",
        "Smooth and quiet operation",
        "Energy-efficient battery system",
        "Easy-to-use controls",
        "Weather-resistant body"
      ],
      specifications: {
        "Motor Power": "850W - 1200W",
        "Battery": "48V / 100Ah",
        "Range": "70-100 km per charge",
        "Passenger Capacity": "4+1 (Driver + 4 passengers)",
        "Charging Time": "5-7 hours",
        "Top Speed": "30-35 km/h",
        "Warranty": "5 years comprehensive"
      }
    }
  };

  const product = slug ? products[slug as keyof typeof products] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product not found</h1>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <Link to="/products" className="text-primary hover:underline mb-6 inline-block">
          ← Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img
              src={product.image}
              alt={`${product.name} detail view`}
              className="w-full rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
            <p className="text-xl text-primary font-semibold mb-4">{product.tagline}</p>
            <p className="text-muted-foreground mb-6">{product.description}</p>
            
            <div className="bg-muted p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-lg mb-3">Key Benefits:</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Battery className="w-5 h-5 text-primary" />
                  <span>Long battery life & range</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>Powerful & efficient motor</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Comfortable passenger seating</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Gauge className="w-5 h-5 text-primary" />
                  <span>Optimal speed & performance</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <a href="tel:+919455335010">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Price
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="https://wa.me/919455335010" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Enquiry
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Request Test Drive</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Specifications</h2>
            <div className="space-y-3">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between border-b border-border pb-2">
                  <span className="font-medium">{key}:</span>
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-8 mt-8 bg-primary text-primary-foreground text-center">
          <h2 className="text-2xl font-bold mb-4">Want a Test Drive or Best Price for {product.name}?</h2>
          <p className="mb-6">Contact us today for personalized pricing and a free test drive in your area!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <a href="tel:+919455335010">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-background/10 backdrop-blur-sm hover:bg-background/20 border-background text-background">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;