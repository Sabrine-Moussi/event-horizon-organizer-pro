
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const specialties = [
  {
    title: "Mariages",
    description: "Créez le mariage de vos rêves avec notre équipe d'experts",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    link: "/events/wedding"
  },
  {
    title: "Événements Corporate",
    description: "Impressionnez vos clients et partenaires avec des événements professionnels",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    link: "/events/corporate"
  },
  {
    title: "Fêtes & Célébrations",
    description: "Rendez vos célébrations mémorables avec notre touche créative",
    image: "https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    link: "/events/birthday"
  },
  {
    title: "Conférences",
    description: "Organisation complète de conférences et séminaires professionnels",
    image: "https://images.unsplash.com/photo-1540304453527-62f979142a17?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    link: "/events/conference"
  }
];

const SpecialtiesCarousel = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Nos Spécialités</h2>
          <p className="section-subtitle">Découvrez notre expertise dans l'organisation de différents types d'événements</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {specialties.map((specialty, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="border-none shadow-lg overflow-hidden group">
                      <CardContent className="p-0">
                        <div className="relative h-64">
                          <img 
                            src={specialty.image}
                            alt={specialty.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-2xl font-bold text-white mb-2">{specialty.title}</h3>
                            <p className="text-gray-200 mb-4">{specialty.description}</p>
                            <Link 
                              to={specialty.link} 
                              className="text-white flex items-center gap-2 text-sm font-medium hover:text-event-pink transition-colors"
                            >
                              En savoir plus <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="relative static translate-y-0" />
              <CarouselNext className="relative static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesCarousel;
