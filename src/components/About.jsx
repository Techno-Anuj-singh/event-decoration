import React from 'react';
import { Palette, Sparkles, Layers, ShieldCheck, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../config/businessInfo';
import './About.css';

export default function About() {
  const features = [
    {
      icon: Palette,
      title: "Creative Decoration",
      description: "Artistic floral arrangements, elegant lighting designs, and eye-catching stage backdrops crafted to elevate your celebrations."
    },
    {
      icon: Layers,
      title: "Customized Themes",
      description: "Tailored setups according to your chosen color preferences, cultural traditions, venue layout, and personal event vision."
    },
    {
      icon: ShieldCheck,
      title: "Professional Setup",
      description: "Dedicated execution with attention to every detail, ensuring your venue looks breathtaking and ready on time for your guests."
    }
  ];

  return (
    <section id="about" className="section about-section" aria-label="About Us">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Visual Showcase Card */}
          <div className="about-visual-column">
            <div className="about-image-card">
              <img 
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80" 
                alt="Radharani Event Planner Celebration Decoration Setup in Aligarh" 
                className="about-primary-img"
                loading="lazy"
              />
              <div className="about-image-badge">
                <Sparkles size={18} className="badge-sparkle" />
                <div>
                  <span className="badge-title">Aligarh, Uttar Pradesh</span>
                  <span className="badge-sub">Local Event Decoration Experts</span>
                </div>
              </div>
            </div>
            
            {/* Secondary Floating Highlight */}
            <div className="about-floating-highlight">
              <span className="highlight-tag">Personalized Service</span>
              <p className="highlight-text">
                Every wedding, birthday, and celebration is decorated with care, creativity, and elegance.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="about-content-column">
            <div className="section-badge">
              <Sparkles size={13} />
              ABOUT RADHARANI EVENTS
            </div>

            <h2 className="about-heading">
              Making Your Special Moments Beautiful
            </h2>

            <div className="about-text-lead">
              <p>
                At <strong>Radharani Event Planner &amp; Decoration</strong>, we believe every milestone in life deserves a captivating setting. Based in Aligarh, we specialize in transforming event venues into festive, elegant, and memorable celebration spaces.
              </p>
              <p>
                From colorful Haldi ceremonies and grand wedding mandaps to lively birthday parties and intimate anniversary celebrations, our focus is entirely on creative design, harmonious aesthetics, and delivering an unforgettable visual experience for you and your guests.
              </p>
            </div>

            {/* Three Key Features */}
            <div className="about-features-list">
              {features.map((feat, idx) => {
                const IconComp = feat.icon;
                return (
                  <div key={idx} className="about-feature-item">
                    <div className="about-feature-icon-wrap">
                      <IconComp size={22} className="about-feature-icon" />
                    </div>
                    <div className="about-feature-text">
                      <h3 className="about-feature-title">{feat.title}</h3>
                      <p className="about-feature-desc">{feat.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Natural Contact Action */}
            <div className="about-actions">
              <a 
                href={createWhatsAppUrl("Hello Radharani Event Planner, I would like to learn more about your decoration services in Aligarh.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={18} />
                <span>Discuss Your Event on WhatsApp</span>
              </a>
              <a 
                href={businessInfo.telLink} 
                className="btn btn-secondary"
              >
                <Phone size={17} />
                <span>Call {businessInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
