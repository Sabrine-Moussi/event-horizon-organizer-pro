
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-block bg-event-pink text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
            #1 Entreprise d'Événementiel
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Créez des Moments Inoubliables avec EventPro
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Nous transformons vos idées en événements exceptionnels. De la planification à la réalisation, nous nous occupons de tout.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="event-btn event-btn-primary flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Réservez Une Consultation
            </Button>
            <Button variant="outline" className="event-btn event-btn-secondary">
              Découvrir Nos Services
            </Button>
          </div>
          
          <div className="mt-12 flex items-center gap-8">
            <div>
              <p className="text-4xl font-bold text-white">500+</p>
              <p className="text-gray-300">Événements Réussis</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">98%</p>
              <p className="text-gray-300">Clients Satisfaits</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">15+</p>
              <p className="text-gray-300">Années d'Expérience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
