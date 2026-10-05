import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { createWhatsAppUrl, businessInfo } from '../config/businessInfo';
import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  const whatsappUrl = createWhatsAppUrl(`Hello ${businessInfo.businessName}, I would like to enquire about event decoration in Aligarh.`);

  return (
    <div className="floating-whatsapp-wrapper">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Chat with Radharani Event Planner on WhatsApp"
        id="floating-whatsapp-action"
      >
        <div className="wa-pulse-ring"></div>
        <MessageCircle size={30} className="floating-wa-icon" />
        <span className="floating-wa-tooltip">
          Chat on WhatsApp <Sparkles size={12} className="tooltip-sparkle" />
        </span>
      </a>
    </div>
  );
}
