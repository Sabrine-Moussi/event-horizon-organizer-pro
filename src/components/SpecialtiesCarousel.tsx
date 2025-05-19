
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const specialties = [
  {
    title: "Mariages élégants",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    description: "Créez un jour inoubliable avec notre planification de mariage sur mesure"
  },
  {
    title: "Événements d'entreprise",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    description: "Impressionnez vos clients et collaborateurs avec des événements professionnels"
  },
  {
    title: "Célébrations privées",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    description: "Des anniversaires aux fêtes familiales, créez des souvenirs mémorables"
  },
  {
    title: "Conférences et séminaires",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    description: "Organisation complète de vos événements professionnels"
  }
];

const SpecialtiesCarousel = () => {
  return (
    <section className="py-20 bg-white">
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
                    <Card className="border-none shadow-lg overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative aspect-video">
                          <img 
                            src={specialty.image}
                            alt={specialty.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                            <h3 className="text-xl font-bold text-white mb-2">{specialty.title}</h3>
                            <p className="text-sm text-gray-100">{specialty.description}</p>
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
