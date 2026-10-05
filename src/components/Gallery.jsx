import React, { useState } from 'react';
import { Sparkles, Eye, MessageCircle, Filter, ZoomIn } from 'lucide-react';
import { galleryCategories, galleryData } from '../data/galleryData';
import LightboxModal from './LightboxModal';
import { createGalleryWhatsAppUrl, createWhatsAppUrl } from '../config/businessInfo';
import './Gallery.css';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeItemIndex, setActiveItemIndex] = useState(null);

  // Filter gallery items based on active category
  const filteredItems = selectedCategory === "All"
    ? galleryData
    : galleryData.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleOpenLightbox = (index) => {
    setActiveItemIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveItemIndex(null);
  };

  const handlePrev = () => {
    if (activeItemIndex > 0) {
      setActiveItemIndex(activeItemIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeItemIndex < filteredItems.length - 1) {
      setActiveItemIndex(activeItemIndex + 1);
    }
  };

  return (
    <section id="gallery" className="section gallery-section" aria-label="Decoration Gallery">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={13} />
            OUR WORK PORTFOLIO
          </div>
          <h2 className="section-title">Our Decoration Gallery</h2>
          <p className="section-subtitle">
            Explore some of our event decoration ideas, themes, and celebrations crafted across Aligarh.
          </p>
          <div className="ornament-divider">
            <span className="ornament-line"></span>
            <span className="ornament-symbol">✦</span>
            <span className="ornament-line"></span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="gallery-filter-wrap">
          <div className="gallery-filters" role="tablist" aria-label="Gallery category filters">
            {galleryCategories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={selectedCategory === category}
                className={`gallery-filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(category);
                  setActiveItemIndex(null);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item, index) => {
            const waUrl = createGalleryWhatsAppUrl(item.title, item.category);

            return (
              <div 
                key={item.id} 
                className="gallery-item-card"
                onClick={() => handleOpenLightbox(index)}
              >
                <div className="gallery-img-container">
                  <img
                    src={item.thumbnail}
                    alt={`${item.title} - ${item.category} Decoration in Aligarh`}
                    className="gallery-image"
                    loading="lazy"
                  />
                  {/* Subtle Hover Overlay */}
                  <div className="gallery-hover-overlay">
                    <div className="gallery-zoom-icon">
                      <ZoomIn size={22} />
                    </div>
                    <div className="gallery-item-info">
                      <span className="gallery-item-category">{item.category}</span>
                      <h4 className="gallery-item-title">{item.title}</h4>
                      <p className="gallery-item-hint">Tap to view full setup</p>
                    </div>
                  </div>
                </div>

                {/* Mobile/Card Mini Bar */}
                <div className="gallery-card-footer">
                  <div className="footer-title-wrap">
                    <span className="footer-category">{item.category}</span>
                    <h4 className="footer-title">{item.title}</h4>
                  </div>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gallery-quick-wa"
                    onClick={(e) => e.stopPropagation()}
                    title="Enquire on WhatsApp"
                    aria-label={`Enquire about ${item.title} on WhatsApp`}
                  >
                    <MessageCircle size={18} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="gallery-bottom-banner">
          <p className="gallery-bottom-text">
            Looking for something specific? We can create custom setups matching any photo or theme you have in mind.
          </p>
          <a
            href={createWhatsAppUrl("Hello Radharani Events, I have a decoration reference photo that I would like to share with you on WhatsApp.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageCircle size={18} />
            <span>Send Us Your Reference Photo</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItemIndex !== null && filteredItems[activeItemIndex] && (
        <LightboxModal
          item={filteredItems[activeItemIndex]}
          onClose={handleCloseLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={activeItemIndex > 0}
          hasNext={activeItemIndex < filteredItems.length - 1}
        />
      )}
    </section>
  );
}
