import React from 'react';
import { Phone, MessageCircle, Mail, Instagram, Sparkles, Clock, MapPin } from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../config/businessInfo';
import EnquiryForm from './EnquiryForm';
import './ContactSection.css';

export default function ContactSection() {
  const contactCards = [
    {
      id: "call",
      title: "CALL US",
      subtitle: "Direct Phone Call",
      value: businessInfo.phone,
      displayValue: businessInfo.displayPhone,
      btnText: "Call Now",
      btnClass: "btn-call",
      href: businessInfo.telLink,
      icon: Phone,
      external: false
    },
    {
      id: "whatsapp",
      title: "WHATSAPP",
      subtitle: "Instant Chat & Photos",
      value: businessInfo.phone,
      displayValue: businessInfo.displayPhone,
      btnText: "Chat on WhatsApp",
      btnClass: "btn-whatsapp",
      href: `https://wa.me/${businessInfo.whatsapp}`,
      icon: MessageCircle,
      external: true
    },
    {
      id: "email",
      title: "EMAIL",
      subtitle: "Official Inquiries",
      value: businessInfo.email,
      displayValue: businessInfo.email,
      btnText: "Email Us",
      btnClass: "btn-secondary",
      href: businessInfo.mailtoLink,
      icon: Mail,
      external: false
    },
    {
      id: "instagram",
      title: "INSTAGRAM",
      subtitle: "Follow & Message",
      value: businessInfo.instagramUsername,
      displayValue: businessInfo.instagramUsername,
      btnText: "Visit Instagram",
      btnClass: "btn-primary",
      href: businessInfo.instagramUrl,
      icon: Instagram,
      external: true
    }
  ];

  return (
    <section id="contact" className="section contact-section" aria-label="Contact and Enquiry">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={13} />
            GET IN TOUCH
          </div>
          <h2 className="section-title">Let's Plan Your Celebration</h2>
          <p className="section-subtitle">
            Have an upcoming event? Contact us and discuss your decoration requirements. We are ready to help!
          </p>
          <div className="ornament-divider">
            <span className="ornament-line"></span>
            <span className="ornament-symbol">✦</span>
            <span className="ornament-line"></span>
          </div>
        </div>

        {/* Four Prominent Contact Cards */}
        <div className="contact-cards-grid">
          {contactCards.map((card) => {
            const IconComp = card.icon;
            return (
              <div key={card.id} className="contact-card card">
                <div className="contact-card-icon-wrap">
                  <IconComp size={24} className="contact-card-icon" />
                </div>
                <div className="contact-card-header">
                  <span className="contact-card-badge">{card.title}</span>
                  <p className="contact-card-sub">{card.subtitle}</p>
                </div>
                <div className="contact-card-value-wrap">
                  <span className="contact-card-val">{card.displayValue}</span>
                </div>
                <div className="contact-card-action">
                  <a
                    href={card.href}
                    target={card.external ? "_blank" : "_self"}
                    rel={card.external ? "noopener noreferrer" : undefined}
                    className={`btn ${card.btnClass} contact-btn-full`}
                  >
                    <IconComp size={16} />
                    <span>{card.btnText}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Enquiry Form & Help Info */}
        <div className="contact-form-layout">
          <div className="contact-form-left">
            <EnquiryForm />
          </div>

          <div className="contact-info-aside">
            <div className="aside-info-card">
              <h3 className="aside-title">Why Talk to Us First?</h3>
              <ul className="aside-points">
                <li>
                  <Sparkles size={16} className="aside-point-icon" />
                  <div>
                    <strong>Custom Quotes:</strong> Instant tailored estimates based on your exact venue and design choices.
                  </div>
                </li>
                <li>
                  <Sparkles size={16} className="aside-point-icon" />
                  <div>
                    <strong>Date Reservation:</strong> Check auspicious date availability in advance before booking slots fill.
                  </div>
                </li>
                <li>
                  <Sparkles size={16} className="aside-point-icon" />
                  <div>
                    <strong>Photo Sharing:</strong> Share Pinterest or Instagram references directly on WhatsApp.
                  </div>
                </li>
              </ul>
            </div>

            <div className="aside-hours-card">
              <div className="hours-row">
                <Clock size={18} className="hours-icon" />
                <div>
                  <span className="hours-label">Business Hours</span>
                  <span className="hours-val">{businessInfo.hours}</span>
                </div>
              </div>
              <div className="hours-row">
                <MapPin size={18} className="hours-icon" />
                <div>
                  <span className="hours-label">Service City</span>
                  <span className="hours-val">{businessInfo.city}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
