import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Menu, X, Sparkles, MapPin } from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../config/businessInfo';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top micro-bar for direct contact & location */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <span className="top-bar-item">
              <MapPin size={13} className="top-bar-icon" />
              <span>{businessInfo.city}</span>
            </span>
            <span className="top-bar-divider">•</span>
            <span className="top-bar-item">
              <Sparkles size={13} className="top-bar-icon" />
              <span>{businessInfo.taglineHindi}</span>
            </span>
          </div>
          <div className="top-bar-right">
            <a href={businessInfo.telLink} className="top-bar-link">
              <Phone size={13} />
              <span>{businessInfo.displayPhone}</span>
            </a>
            <span className="top-bar-divider">•</span>
            <a 
              href={createWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="top-bar-link top-bar-wa"
            >
              <MessageCircle size={13} />
              <span>Instant WhatsApp Enquiry</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="navbar" aria-label="Main Navigation">
        <div className="container navbar-container">
          {/* Brand Logo & Name */}
          <a href="#home" className="navbar-brand" onClick={closeMobileMenu}>
            <div className="brand-badge-icon">
              <Sparkles size={20} className="sparkle-icon" />
            </div>
            <div className="brand-text-wrap">
              <span className="brand-title">Radharani</span>
              <span className="brand-tagline">Event Planner &amp; Decoration</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-menu desktop-menu">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a href="#gallery" className="nav-link">Gallery</a>
            </li>
            <li className="nav-item">
              <a href="#why-us" className="nav-link">Why Us</a>
            </li>
            <li className="nav-item">
              <a href="#faq" className="nav-link">FAQ</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>

          {/* Desktop Action Buttons */}
          <div className="navbar-actions desktop-actions">
            <a 
              href={businessInfo.telLink}
              className="btn-nav-call"
              title="Call Radharani Events"
            >
              <Phone size={16} />
              <span>Call Us</span>
            </a>
            <a 
              href={createWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp btn-sm nav-wa-btn"
              id="nav-whatsapp-btn"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button 
            type="button" 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li>
            <a href="#home" onClick={closeMobileMenu} className="mobile-nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMobileMenu} className="mobile-nav-link">
              About Us
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMobileMenu} className="mobile-nav-link">
              Services &amp; Decoration
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={closeMobileMenu} className="mobile-nav-link">
              Photo Gallery
            </a>
          </li>
          <li>
            <a href="#why-us" onClick={closeMobileMenu} className="mobile-nav-link">
              Why Choose Us
            </a>
          </li>
          <li>
            <a href="#how-it-works" onClick={closeMobileMenu} className="mobile-nav-link">
              How It Works
            </a>
          </li>
          <li>
            <a href="#location" onClick={closeMobileMenu} className="mobile-nav-link">
              Location &amp; Area
            </a>
          </li>
          <li>
            <a href="#faq" onClick={closeMobileMenu} className="mobile-nav-link">
              FAQs
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMobileMenu} className="mobile-nav-link">
              Contact &amp; Enquiry
            </a>
          </li>
        </ul>

        <div className="mobile-nav-actions">
          <a 
            href={createWhatsAppUrl()} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-whatsapp mobile-drawer-btn"
            onClick={closeMobileMenu}
          >
            <MessageCircle size={18} />
            <span>Chat on WhatsApp</span>
          </a>
          <a 
            href={businessInfo.telLink} 
            className="btn btn-call mobile-drawer-btn"
            onClick={closeMobileMenu}
          >
            <Phone size={18} />
            <span>Call: {businessInfo.phone}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
