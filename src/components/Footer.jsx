import React from 'react';
import { Sparkles, Phone, MessageCircle, Mail, Instagram, MapPin, ArrowUp, Heart } from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../config/businessInfo';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-main-container">
        <div className="footer-grid">
          {/* Column 1: Brand & Tagline */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <div className="footer-brand-icon">
                <Sparkles size={20} />
              </div>
              <div>
                <span className="footer-brand-title">{businessInfo.businessName}</span>
                <span className="footer-brand-subtitle">{businessInfo.tagline}</span>
              </div>
            </div>

            <p className="footer-brand-desc">
              Dedicated to creating stunning, vibrant, and elegant decorations for weddings, birthdays, anniversaries, and festive celebrations across Aligarh and surrounding areas.
            </p>

            <div className="footer-social-row">
              <a
                href={businessInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="Follow on Instagram"
                aria-label="Instagram Profile"
              >
                <Instagram size={18} />
              </a>
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn footer-social-wa"
                title="Chat on WhatsApp"
                aria-label="WhatsApp Contact"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={businessInfo.telLink}
                className="footer-social-btn"
                title="Call Directly"
                aria-label="Phone Call"
              >
                <Phone size={18} />
              </a>
              <a
                href={businessInfo.mailtoLink}
                className="footer-social-btn"
                title="Send Email"
                aria-label="Email Address"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#gallery">Photo Gallery</a></li>
              <li><a href="#why-us">Why Choose Us</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Decoration Services</h4>
            <ul className="footer-links-list">
              <li><a href="#services">Wedding Decoration</a></li>
              <li><a href="#services">Birthday Decoration</a></li>
              <li><a href="#services">Engagement Decoration</a></li>
              <li><a href="#services">Haldi &amp; Mehndi Decor</a></li>
              <li><a href="#services">Baby Shower (Godh Bharai)</a></li>
              <li><a href="#services">Stage &amp; Backdrop Setup</a></li>
              <li><a href="#services">Theme Party Decoration</a></li>
              <li><a href="#services">Fresh Floral Decoration</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="footer-contact-col">
            <h4 className="footer-heading">Contact Information</h4>
            <div className="footer-contact-items">
              <a href={businessInfo.telLink} className="footer-contact-item">
                <Phone size={16} className="footer-contact-icon" />
                <div>
                  <span className="footer-contact-label">Phone / WhatsApp</span>
                  <span className="footer-contact-val">{businessInfo.displayPhone}</span>
                </div>
              </a>

              <a href={businessInfo.mailtoLink} className="footer-contact-item">
                <Mail size={16} className="footer-contact-icon" />
                <div>
                  <span className="footer-contact-label">Email Address</span>
                  <span className="footer-contact-val">{businessInfo.email}</span>
                </div>
              </a>

              <div className="footer-contact-item">
                <MapPin size={16} className="footer-contact-icon" />
                <div>
                  <span className="footer-contact-label">Location</span>
                  <span className="footer-contact-val">{businessInfo.city}</span>
                </div>
              </div>

              <a
                href={businessInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
              >
                <Instagram size={16} className="footer-contact-icon" />
                <div>
                  <span className="footer-contact-label">Instagram</span>
                  <span className="footer-contact-val">{businessInfo.instagramUsername}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Strip */}
      <div className="footer-bottom-strip">
        <div className="container footer-bottom-container">
          <p className="footer-copy">
            &copy; 2026 <strong>{businessInfo.businessName}</strong>. All Rights Reserved.
          </p>

          <div className="footer-bottom-right">
            <span className="footer-locality">Aligarh, Uttar Pradesh, India</span>
            <button
              type="button"
              className="footer-back-to-top"
              onClick={scrollToTop}
              aria-label="Back to top"
              title="Scroll to top"
            >
              <ArrowUp size={16} />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
