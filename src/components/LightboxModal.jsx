import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, Sparkles, MapPin, Tag } from 'lucide-react';
import { createGalleryWhatsAppUrl } from '../config/businessInfo';
import './LightboxModal.css';

export default function LightboxModal({ item, onClose, onPrev, onNext, hasPrev, hasNext }) {
  // Handle escape key and keyboard arrow navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowLeft' && hasPrev) {
      onPrev();
    } else if (e.key === 'ArrowRight' && hasNext) {
      onNext();
    }
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [handleKeyDown]);

  if (!item) return null;

  const whatsappUrl = createGalleryWhatsAppUrl(item.title, item.category);

  return (
    <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={item.title}>
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        {/* Top Header / Close Button */}
        <button 
          className="lightbox-close-btn" 
          onClick={onClose} 
          aria-label="Close lightbox"
        >
          <X size={24} />
        </button>

        {/* Navigation Arrow Left */}
        {hasPrev && (
          <button 
            className="lightbox-nav-btn lightbox-prev" 
            onClick={onPrev} 
            aria-label="Previous decoration image"
          >
            <ChevronLeft size={28} />
          </button>
        )}

        {/* Navigation Arrow Right */}
        {hasNext && (
          <button 
            className="lightbox-nav-btn lightbox-next" 
            onClick={onNext} 
            aria-label="Next decoration image"
          >
            <ChevronRight size={28} />
          </button>
        )}

        {/* Main Content Area */}
        <div className="lightbox-content-card">
          <div className="lightbox-media-wrap">
            <img 
              src={item.image} 
              alt={item.title} 
              className="lightbox-img"
            />
          </div>

          <div className="lightbox-details">
            <div className="lightbox-tags-row">
              <span className="lightbox-category-tag">
                <Tag size={12} />
                {item.category}
              </span>
              <span className="lightbox-location-tag">
                <MapPin size={12} />
                {item.locationTag || "Aligarh, UP"}
              </span>
            </div>

            <h3 className="lightbox-title">{item.title}</h3>
            <p className="lightbox-desc">{item.description}</p>

            <div className="lightbox-action-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp lightbox-wa-cta"
              >
                <MessageCircle size={18} />
                <span>Enquire This Design on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
