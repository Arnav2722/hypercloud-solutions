import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ConsultancySection from './components/ConsultancySection';
import TrustSection from './components/TrustSection';
import SolutionsSection from './components/SolutionsSection';
import ClientsSection from './components/ClientsSection';
import ServicesSection from './components/ServicesSection';
import FAQSection from './components/FAQSection';
import BetterBusinessSection from './components/BetterBusinessSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ConsultancySection />
      <TrustSection />
      <SolutionsSection />
      <ClientsSection />
      <ServicesSection />
      <FAQSection />
      <BetterBusinessSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;