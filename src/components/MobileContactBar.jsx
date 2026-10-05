import React from 'react';
import { Phone, MessageCircle, Instagram } from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../config/businessInfo';
import './MobileContactBar.css';

export default function MobileContactBar() {
  const whatsappUrl = createWhatsAppUrl(`Hello ${businessInfo.businessName}, I am visiting your website and would like to enquire about event decoration in Aligarh.`);

  return (
    <div className="mobile-fixed-contact-bar" role="navigation" aria-label="Quick Mobile Actions">
      <div className="mobile-bar-grid">
        {/* Call Button */}
        <a 
          href={businessInfo.telLink} 
          className="mobile-bar-btn btn-bar-call"
          aria-label="Call Radharani Events"
          id="mobile-call-action"
        >
          <Phone size={19} className="mobile-btn-icon" />
          <span className="mobile-btn-label">Call Now</span>
        </a>

        {/* WhatsApp Button (Prominent Center) */}
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mobile-bar-btn btn-bar-wa"
          aria-label="Chat on WhatsApp"
          id="mobile-whatsapp-action"
        >
          <MessageCircle size={21} className="mobile-btn-icon" />
          <span className="mobile-btn-label">WhatsApp</span>
        </a>

        {/* Instagram Button */}
        <a 
          href={businessInfo.instagramUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mobile-bar-btn btn-bar-ig"
          aria-label="Visit Instagram"
          id="mobile-instagram-action"
        >
          <Instagram size={19} className="mobile-btn-icon" />
          <span className="mobile-btn-label">Instagram</span>
        </a>
      </div>
    </div>
  );
}
