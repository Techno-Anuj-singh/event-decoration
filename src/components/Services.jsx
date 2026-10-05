import React from 'react';
import { MessageCircle, Sparkles, Check, ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { createServiceWhatsAppUrl, businessInfo } from '../config/businessInfo';
import './Services.css';

export default function Services() {
  return (
    <section id="services" className="section section-alt services-section" aria-label="Services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={13} />
            WHAT WE OFFER
          </div>
          <h2 className="section-title">Our Event Decoration Services</h2>
          <p className="section-subtitle">
            Beautiful setups designed to make every celebration memorable in Aligarh &amp; nearby areas.
          </p>
          <div className="ornament-divider">
            <span className="ornament-line"></span>
            <span className="ornament-symbol">✦</span>
            <span className="ornament-line"></span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {servicesData.map((service) => {
            const whatsappUrl = createServiceWhatsAppUrl(service.name);

            return (
              <article key={service.id} className="service-card card">
                {/* Service Card Image Banner */}
                <div className="service-card-media">
                  <img 
                    src={service.image} 
                    alt={`${service.name} in Aligarh by Radharani Event Planner`} 
                    className="service-card-img"
                    loading="lazy"
                  />
                  <div className="service-card-tag">
                    <span>{service.category}</span>
                  </div>
                  {service.popular && (
                    <div className="service-popular-badge">
                      <Sparkles size={11} />
                      <span>Popular</span>
                    </div>
                  )}
                </div>

                {/* Service Card Content */}
                <div className="service-card-body">
                  <h3 className="service-card-title">{service.name}</h3>
                  <p className="service-card-tagline">{service.tagline}</p>
                  <p className="service-card-desc">{service.description}</p>

                  {/* Feature Highlights */}
                  <ul className="service-features-mini">
                    {service.features.map((item, fIdx) => (
                      <li key={fIdx} className="service-feature-mini-item">
                        <Check size={13} className="mini-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Card Action */}
                  <div className="service-card-action">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-sm service-wa-btn"
                      aria-label={`Enquire about ${service.name} on WhatsApp`}
                    >
                      <MessageCircle size={15} />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Banner Helper */}
        <div className="services-bottom-cta">
          <div className="bottom-cta-text">
            <h4>Have a custom event theme or specific decoration idea?</h4>
            <p>Send us your reference photo or vision and we'll prepare a tailored setup for you.</p>
          </div>
          <a 
            href={createServiceWhatsAppUrl("Custom Event Decoration")} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            <MessageCircle size={18} />
            <span>Chat With Us on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
