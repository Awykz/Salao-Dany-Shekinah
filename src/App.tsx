import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Pricing />
        <Gallery />
        <Testimonials />
        <CallToAction />
        <MapSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
