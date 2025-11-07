import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import piaggioImage from "@/assets/piaggio-logo.png";
import citylifeImage from "@/assets/citylife-logo.png";

const Products = () => {
  const products = [
    {
      name: "Piaggio",
      slug: "piaggio",
      image: piaggioImage,
      tagline: "Reliability Redefined",
      description: "Experience the legendary Piaggio quality with our range of electric auto rickshaws. Built for durability and performance."
    },
    {
      name: "Citylife",
      slug: "citylife",
      image: citylifeImage,
      tagline: "Style and Comfort",
      description: "Modern design meets comfort in Citylife e-rickshaws. Perfect for urban mobility with a touch of elegance."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our E-Rickshaw Range</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our premium selection of electric auto rickshaws from leading brands
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <Card key={product.slug} className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.name} electric auto rickshaw`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                <p className="text-primary font-semibold mb-3">{product.tagline}</p>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                <Button asChild className="w-full">
                  <Link to={`/products/${product.slug}`}>
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;