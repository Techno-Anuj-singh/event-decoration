import React from 'react';
import { MapPin, Navigation, Sparkles, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../config/businessInfo';
import './LocationSection.css';

export default function LocationSection() {
  return (
    <section id="location" className="section section-alt location-section" aria-label="Location and Service Area">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MapPin size={13} />
            SERVICE AREA
          </div>
          <h2 className="section-title">Serving Aligarh &amp; Nearby Areas</h2>
          <p className="section-subtitle">
            Providing on-site event planning and decoration services across Aligarh and surrounding regions in Uttar Pradesh.
          </p>
          <div className="ornament-divider">
            <span className="ornament-line"></span>
            <span className="ornament-symbol">✦</span>
            <span className="ornament-line"></span>
          </div>
        </div>

        <div className="location-grid">
          {/* Left Column: Coverage & Info */}
          <div className="location-info-card">
            <div className="location-city-badge">
              <MapPin size={22} className="loc-pin-icon" />
              <div>
                <h3 className="loc-city-name">{businessInfo.fullLocation}</h3>
                <span className="loc-country">Uttar Pradesh, India</span>
              </div>
            </div>

            <p className="loc-desc">
              We travel to your event location — whether it is a private residence, farmhouse, banquet hall, marriage lawn, or hotel across Aligarh.
            </p>

            <div className="service-areas-wrap">
              <h4 className="service-areas-title">Key Areas Covered in Aligarh:</h4>
              <div className="service-tags-list">
                {businessInfo.serviceAreas.map((area, idx) => (
                  <span key={idx} className="service-area-tag">
                    <CheckCircle2 size={13} className="tag-check" />
                    <span>{area}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="location-action-btns">
              <a
                href={businessInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Navigation size={17} />
                <span>Get Directions on Google Maps</span>
              </a>

              <a
                href={createWhatsAppUrl(`Hello ${businessInfo.businessName}, I want to check if you provide decoration services at my venue location in Aligarh.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={17} />
                <span>Check Venue Availability</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="location-map-frame card">
            <iframe
              title="Radharani Event Planner &amp; Decoration Aligarh Location"
              src={businessInfo.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-iframe"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
