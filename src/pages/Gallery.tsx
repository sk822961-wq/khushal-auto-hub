import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import piaggioBada1 from "@/assets/gallery/piaggio-bada-1.jpg";
import piaggioBada2 from "@/assets/gallery/piaggio-bada-2.jpg";
import piaggioBada3 from "@/assets/gallery/piaggio-bada-3.jpg";
import piaggioBada4 from "@/assets/gallery/piaggio-bada-4.jpg";
import piaggioMetro1 from "@/assets/gallery/piaggio-metro-1.jpg";
import piaggioMetro2 from "@/assets/gallery/piaggio-metro-2.jpg";
import piaggioMetro3 from "@/assets/gallery/piaggio-metro-3.jpg";
import piaggioMetro4 from "@/assets/gallery/piaggio-metro-4.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      image: piaggioBada1,
      title: "Piaggio Ape Auto BADA",
      alt: "Piaggio Ape Auto BADA front view"
    },
    {
      image: piaggioBada2,
      title: "Piaggio Ape Auto BADA",
      alt: "Piaggio Ape Auto BADA side view"
    },
    {
      image: piaggioBada3,
      title: "Piaggio Ape Auto BADA",
      alt: "Piaggio Ape Auto BADA interior"
    },
    {
      image: piaggioBada4,
      title: "Piaggio Ape Auto BADA",
      alt: "Piaggio Ape Auto BADA details"
    },
    {
      image: piaggioMetro1,
      title: "Piaggio Ape City METRO",
      alt: "Piaggio Ape City METRO front view"
    },
    {
      image: piaggioMetro2,
      title: "Piaggio Ape City METRO",
      alt: "Piaggio Ape City METRO side view"
    },
    {
      image: piaggioMetro3,
      title: "Piaggio Ape City METRO",
      alt: "Piaggio Ape City METRO interior"
    },
    {
      image: piaggioMetro4,
      title: "Piaggio Ape City METRO",
      alt: "Piaggio Ape City METRO details"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Vehicle Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of premium electric auto rickshaws
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <div className="flex flex-col gap-3">
                  <Button asChild className="w-full">
                    <a href="tel:+919455335010">
                      <Phone className="w-4 h-4 mr-2" />
                      Enquiry Now
                    </a>
                  </Button>
                  <Button variant="secondary" asChild className="w-full">
                    <a href="https://wa.me/919455335010" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 bg-primary text-primary-foreground">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Interested in Any Model?
            </h2>
            <p className="text-lg mb-6 opacity-95">
              Contact us for pricing, test drives, and financing options in Varanasi, Chandauli & Mirzapur
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <a href="tel:+919455335010">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-background/10 backdrop-blur-sm hover:bg-background/20 border-background text-background">
                <a href="https://wa.me/919455335010" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
