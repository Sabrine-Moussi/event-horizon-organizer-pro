
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-event-blue">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à créer un événement inoubliable?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et commencez à planifier votre prochain événement avec nos experts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="event-btn event-btn-accent">
              Réservez une consultation
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Découvrir nos offres
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
