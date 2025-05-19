
import { Calendar, Users, Image, Star } from "lucide-react";

const serviceItems = [
  {
    icon: <Calendar className="w-8 h-8 text-event-blue" />,
    title: "Planification complète",
    description: "De la conceptualisation à l'exécution, nous nous occupons de chaque détail pour que votre événement soit parfait."
  },
  {
    icon: <Users className="w-8 h-8 text-event-blue" />,
    title: "Gestion des invités",
    description: "Système d'invitation, confirmation de présence et organisation de placement pour tous vos invités."
  },
  {
    icon: <Image className="w-8 h-8 text-event-blue" />,
    title: "Design & décoration",
    description: "Création d'environnements uniques et personnalisés pour refléter votre vision et impressionner vos invités."
  },
  {
    icon: <Star className="w-8 h-8 text-event-blue" />,
    title: "Divertissement & animation",
    description: "Sélection des meilleurs prestataires pour animer votre événement et créer une ambiance mémorable."
  }
];

const Services = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Nos Services</h2>
          <p className="section-subtitle">Tout ce dont vous avez besoin pour réussir votre événement</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-event-light-blue p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-event-blue rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-6">Besoin d'aide pour planifier votre prochain événement?</h3>
              <p className="text-blue-100 mb-8">Notre équipe d'experts est prête à vous aider à créer un événement sur mesure qui dépasse vos attentes.</p>
              <div>
                <button className="event-btn event-btn-accent">Demander un devis gratuit</button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" 
                alt="Event planning" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
