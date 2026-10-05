import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import InstagramShowcase from './components/InstagramShowcase';
import ContactSection from './components/ContactSection';
import LocationSection from './components/LocationSection';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileContactBar from './components/MobileContactBar';

export default function App() {
  return (
    <div className="app-root">
      {/* Sticky Navigation */}
      <Navbar />

      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Section */}
        <About />

        {/* 3. Services Section */}
        <Services />

        {/* 4. Gallery Section (with Lightbox Modal) */}
        <Gallery />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 6. How It Works Section */}
        <HowItWorks />

        {/* 7. Instagram Showcase */}
        <InstagramShowcase />

        {/* 8. Contact Section & Interactive Enquiry Form */}
        <ContactSection />

        {/* 9. Location & Service Area in Aligarh */}
        <LocationSection />

        {/* 10. Frequently Asked Questions */}
        <FAQSection />

        {/* 11. Final High-Conversion Call To Action */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button for Desktop/Tablet */}
      <FloatingWhatsApp />

      {/* Fixed Bottom Contact Bar for Mobile */}
      <MobileContactBar />
    </div>
  );
}
