
import React from "react";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" 
                alt="Notre équipe" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg border border-gray-100 hidden md:block">
              <div className="text-4xl font-bold text-event-blue">10+</div>
              <div className="text-gray-600">ans d'expertise</div>
            </div>
          </div>
          
          <div>
            <h2 className="section-title">À Propos d'EventPro</h2>
            <p className="text-gray-600 mb-6">
              Fondée en 2014, EventPro est devenue une référence dans l'organisation d'événements sur mesure en France. 
              Notre équipe passionnée met son expertise au service de chaque client pour créer des moments uniques et mémorables.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-event-blue mt-1 w-5 h-5" />
                <div>
                  <h3 className="font-semibold text-lg">Excellence et créativité</h3>
                  <p className="text-gray-600">Nous plaçons la qualité et l'innovation au cœur de tous nos événements.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-event-blue mt-1 w-5 h-5" />
                <div>
                  <h3 className="font-semibold text-lg">Service personnalisé</h3>
                  <p className="text-gray-600">Chaque client bénéficie d'une approche sur mesure adaptée à ses besoins spécifiques.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-event-blue mt-1 w-5 h-5" />
                <div>
                  <h3 className="font-semibold text-lg">Réseau de partenaires</h3>
                  <p className="text-gray-600">Nous collaborons avec les meilleurs prestataires pour garantir des événements d'exception.</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-event-blue">500+</div>
                <div className="text-gray-600">événements organisés</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-event-blue">15</div>
                <div className="text-gray-600">experts passionnés</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-event-blue">98%</div>
                <div className="text-gray-600">clients satisfaits</div>
              </div>
            </div>
            
            <button className="event-btn event-btn-primary">
              Notre histoire complète
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
