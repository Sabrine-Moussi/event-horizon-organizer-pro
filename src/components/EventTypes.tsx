
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface EventTypeCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const EventTypeCard: React.FC<EventTypeCardProps> = ({
  title,
  description,
  imageUrl,
  link
}) => {
  return (
    <div className="event-card group">
      <div className="relative overflow-hidden h-64">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-200 mb-4">{description}</p>
          <Link 
            to={link} 
            className="text-white flex items-center gap-2 text-sm font-medium hover:text-event-pink transition-colors"
          >
            En savoir plus <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const EventTypes: React.FC = () => {
  const eventTypes = [
    {
      title: "Mariages",
      description: "Créez le mariage de vos rêves avec notre équipe d'experts",
      imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      link: "/events/wedding"
    },
    {
      title: "Événements Corporate",
      description: "Impressionnez vos clients et partenaires avec des événements professionnels",
      imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      link: "/events/corporate"
    },
    {
      title: "Fêtes & Célébrations",
      description: "Rendez vos célébrations mémorables avec notre touche créative",
      imageUrl: "https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      link: "/events/birthday"
    },
    {
      title: "Conférences",
      description: "Organisation complète de conférences et séminaires professionnels",
      imageUrl: "https://images.unsplash.com/photo-1540304453527-62f979142a17?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      link: "/events/conference"
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Nos Spécialités</h2>
          <p className="section-subtitle">Découvrez les différents types d'événements que nous organisons</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventTypes.map((eventType, index) => (
            <EventTypeCard key={index} {...eventType} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTypes;
