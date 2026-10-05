import React from 'react';
import { Sparkles, MessageSquare, Palette, PartyPopper, MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../config/businessInfo';
import './HowItWorks.css';

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: MessageSquare,
      title: "Tell Us About Your Event",
      description: "Connect with us on WhatsApp or call us with your event date, occasion type, venue in Aligarh, and preferred design ideas."
    },
    {
      step: "02",
      icon: Palette,
      title: "Choose Your Theme & Decoration",
      description: "Explore our sample photos, customize colors, floral elements, lighting, and finalize the setup according to your requirements."
    },
    {
      step: "03",
      icon: PartyPopper,
      title: "Enjoy Your Celebration",
      description: "Our dedicated decoration team arrives on schedule, builds the setup with care, and ensures your celebration looks magnificent."
    }
  ];

  return (
    <section id="how-it-works" className="section how-it-works-section" aria-label="How It Works">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={13} />
            SIMPLE 3-STEP PROCESS
          </div>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Booking your event decoration with Radharani is effortless and straightforward.
          </p>
          <div className="ornament-divider">
            <span className="ornament-line"></span>
            <span className="ornament-symbol">✦</span>
            <span className="ornament-line"></span>
          </div>
        </div>

        {/* 3-Step Process Cards */}
        <div className="steps-container">
          <div className="steps-grid">
            {steps.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="step-card">
                  <div className="step-top-row">
                    <span className="step-number">{item.step}</span>
                    <div className="step-icon-wrap">
                      <IconComp size={22} className="step-icon" />
                    </div>
                  </div>
                  <h3 className="step-title">{item.title}</h3>
                  <p className="step-description">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="steps-cta-center">
          <a
            href={createWhatsAppUrl("Hello Radharani Events, I want to discuss decoration for my upcoming event in Aligarh.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
          >
            <MessageCircle size={19} />
            <span>Discuss Your Event on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
