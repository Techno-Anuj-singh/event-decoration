import React from 'react';
import { MessageCircle, Eye, Sparkles, MapPin, CheckCircle2, PhoneCall } from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../config/businessInfo';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section" aria-label="Introduction">
      {/* Background Image with Dark Soft Luxury Overlay */}
      <div className="hero-background-wrapper">
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=85" 
          alt="Grand Wedding and Event Decoration Setup by Radharani Event Planner" 
          className="hero-bg-img"
          loading="eager"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Main Small Label / Badge */}
          <div className="hero-badge-wrap">
            <span className="hero-badge">
              <Sparkles size={14} className="hero-badge-icon" />
              EVENT PLANNING &amp; DECORATION
            </span>
            <span className="hero-location-badge">
              <MapPin size={13} />
              Aligarh, UP
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title">
            Beautiful Decorations for Your <span className="hero-title-highlight">Special Moments</span>
          </h1>

          {/* Supporting Text */}
          <p className="hero-description">
            From intimate celebrations to grand occasions, <strong>Radharani Event Planner &amp; Decoration</strong> brings creativity, elegance and beautiful decoration to your special events in Aligarh.
          </p>

          {/* Call to Action Buttons */}
          <div className="hero-cta-group">
            <a 
              href={createWhatsAppUrl("Hello Radharani Event Planner & Decoration, I would like to discuss decoration for my upcoming event in Aligarh.")} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp btn-lg hero-btn-primary"
              id="hero-whatsapp-cta"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Us</span>
            </a>

            <a 
              href="#gallery" 
              className="btn btn-outline-gold btn-lg hero-btn-secondary"
            >
              <Eye size={19} />
              <span>View Our Work</span>
            </a>

            <a 
              href={businessInfo.telLink} 
              className="hero-call-quick"
              title="Call directly"
            >
              <PhoneCall size={16} />
              <span>Direct Call: {businessInfo.displayPhone}</span>
            </a>
          </div>

          {/* Small Feature Row */}
          <div className="hero-feature-row">
            <div className="feature-pill">
              <CheckCircle2 size={15} className="feature-pill-icon" />
              <span>Creative Themes</span>
            </div>
            <span className="feature-bullet">•</span>
            <div className="feature-pill">
              <CheckCircle2 size={15} className="feature-pill-icon" />
              <span>Beautiful Decor</span>
            </div>
            <span className="feature-bullet">•</span>
            <div className="feature-pill">
              <CheckCircle2 size={15} className="feature-pill-icon" />
              <span>Personalized Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Decorative Wave/Curve */}
      <div className="hero-bottom-curve">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60C320 20 640 0 720 0C800 0 1120 20 1440 60V60H0Z" fill="var(--color-ivory)" />
        </svg>
      </div>
    </section>
  );
}
