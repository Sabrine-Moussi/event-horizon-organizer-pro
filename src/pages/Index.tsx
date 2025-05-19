
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import CallToAction from '@/components/CallToAction';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SpecialtiesCarousel from '@/components/SpecialtiesCarousel';
import AboutSection from '@/components/AboutSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <SpecialtiesCarousel />
      <Services />
      <Gallery />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
