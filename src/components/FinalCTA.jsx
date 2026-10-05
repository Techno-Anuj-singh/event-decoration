import React from 'react';
import { MessageCircle, Phone, Sparkles, MapPin } from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../config/businessInfo';
import './FinalCTA.css';

export default function FinalCTA() {
  return (
    <section className="section final-cta-section" aria-label="Call to Action">
      {/* Decorative luxury background */}
      <div className="final-cta-bg">
        <div className="cta-glow glow-1"></div>
        <div className="cta-glow glow-2"></div>
      </div>

      <div className="container final-cta-container">
        <div className="final-cta-content">
          <div className="final-cta-badge">
            <Sparkles size={14} className="badge-sparkle" />
            <span>LET'S MAKE IT MEMORABLE</span>
          </div>

          <h2 className="final-cta-heading">
            Your Celebration Deserves a <span className="cta-gold-text">Beautiful Setup</span>
          </h2>

          <p className="final-cta-text">
            Have an event coming up in Aligarh? Talk to <strong>{businessInfo.businessName}</strong> and share your ideas with us. We will turn your vision into reality.
          </p>

          <div className="final-cta-buttons">
            <a
              href={createWhatsAppUrl(`Hello ${businessInfo.businessName}, I would like to book/discuss decoration for my upcoming event in Aligarh.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg final-cta-wa"
              id="final-cta-whatsapp-btn"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={businessInfo.telLink}
              className="btn btn-call btn-lg final-cta-call"
              id="final-cta-call-btn"
            >
              <Phone size={19} />
              <span>Call Now: {businessInfo.phone}</span>
            </a>
          </div>

          <div className="final-cta-footer-note">
            <MapPin size={14} className="note-icon" />
            <span>Available across Aligarh, UP &amp; surrounding celebration venues</span>
          </div>
        </div>
      </div>
    </section>
  );
}
