import React from 'react';
import { Sparkles, Palette, Sliders, Eye, Clock, CalendarCheck, HeartHandshake, MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../config/businessInfo';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Palette,
      title: "Creative & Beautiful Designs",
      description: "Original decor concepts, harmonious floral arrangements, and captivating visual styling crafted to make your celebration stand out."
    },
    {
      icon: Sliders,
      title: "Customized Decoration",
      description: "Flexible decoration options designed to match your chosen colors, preferences, venue size, and personal event aspirations."
    },
    {
      icon: Eye,
      title: "Attention to Detail",
      description: "Careful precision in every element — from stage drapery alignment and floral freshness to backdrop lighting balance."
    },
    {
      icon: Clock,
      title: "Professional Setup",
      description: "Punctual, organized, and reliable on-site setup team ensuring your venue is fully ready before your guests arrive."
    },
    {
      icon: CalendarCheck,
      title: "Event-Specific Themes",
      description: "Dedicated aesthetics crafted specifically for weddings, Haldi, birthdays, baby showers, engagements, or house parties."
    },
    {
      icon: HeartHandshake,
      title: "Personalized Service",
      description: "Direct, friendly, and attentive communication from initial idea discussion through event day setup completion."
    }
  ];

  return (
    <section id="why-us" className="section section-dark why-us-section" aria-label="Why Choose Us">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={13} />
            OUR STRENGTHS
          </div>
          <h2 className="section-title">Why Choose Radharani?</h2>
          <p className="section-subtitle">
            We take pride in bringing your celebration dreams to life with dedication, artistic taste, and reliable execution.
          </p>
          <div className="ornament-divider">
            <span className="ornament-line"></span>
            <span className="ornament-symbol">✦</span>
            <span className="ornament-line"></span>
          </div>
        </div>

        {/* Why Choose Grid */}
        <div className="why-us-grid">
          {reasons.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="why-us-card">
                <div className="why-us-icon-wrap">
                  <IconComp size={24} className="why-us-icon" />
                </div>
                <h3 className="why-us-card-title">{item.title}</h3>
                <p className="why-us-card-desc">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Center CTA Button */}
        <div className="why-us-cta-center">
          <a
            href={createWhatsAppUrl("Hello Radharani Events, I would like to consult with you regarding decoration for my event.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            <MessageCircle size={19} />
            <span>Consult With Us on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
