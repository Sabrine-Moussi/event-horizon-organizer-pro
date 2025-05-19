
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "EventPro a transformé notre mariage en un événement magique. Chaque détail était parfait, et nos invités en parlent encore !",
    author: "Sophie & Thomas",
    role: "Mariage à Paris",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5
  },
  {
    quote: "L'organisation de notre conférence annuelle n'a jamais été aussi fluide. L'équipe d'EventPro est professionnelle et extrêmement compétente.",
    author: "Marc Dupont",
    role: "Directeur Marketing, TechCorp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=200&h=200",
    rating: 4
  },
  {
    quote: "Je remercie toute l'équipe pour avoir rendu mon 40e anniversaire si spécial. Tout était exactement comme je l'avais imaginé.",
    author: "Claire Martin",
    role: "Anniversaire VIP",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5
  }
];

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mb-3">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Ce Que Disent Nos Clients</h2>
          <p className="section-subtitle">Découvrez les témoignages de ceux qui ont fait confiance à nos services</p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              loop: true,
              align: "center",
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <div className="event-testimonial p-8 md:p-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <img 
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-20 h-20 rounded-full object-cover border-2 border-event-blue"
                        />
                      </div>
                      <div>
                        <svg className="w-10 h-10 text-event-light-blue mb-4" fill="currentColor" viewBox="0 0 32 32">
                          <path d="M10 8v6a6 6 0 01-6 6H0v2a8 8 0 008 8h2a10 10 0 0010-10V8H10zm20 0v6a6 6 0 01-6 6h-4v2a8 8 0 008 8h2a10 10 0 0010-10V8H30z"></path>
                        </svg>
                        <RatingStars rating={testimonial.rating} />
                        <p className="text-lg md:text-xl text-gray-700 mb-6">"{testimonial.quote}"</p>
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.author}</p>
                          <p className="text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
