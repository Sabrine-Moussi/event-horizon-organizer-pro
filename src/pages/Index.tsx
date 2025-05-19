
import Hero from '@/components/Hero';
import EventTypes from '@/components/EventTypes';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import CallToAction from '@/components/CallToAction';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SpecialtiesCarousel from '@/components/SpecialtiesCarousel';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SpecialtiesCarousel />
      <EventTypes />
      <Services />
      <Gallery />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
