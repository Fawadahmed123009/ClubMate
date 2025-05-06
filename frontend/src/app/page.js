import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import CallToActions from '@/components/CallToActions';

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutSection />
      <CallToActions />
      <Footer />
    </div>
  );
}
