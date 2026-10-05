import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageCircle } from 'lucide-react';
import { faqData } from '../data/faqData';
import { createWhatsAppUrl, businessInfo } from '../config/businessInfo';
import './FAQSection.css';

export default function FAQSection() {
  // By default, first FAQ open
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq-section" aria-label="Frequently Asked Questions">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <HelpCircle size={13} />
            COMMON QUESTIONS
          </div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find quick answers about our event decoration services, booking process, and pricing inquiries.
          </p>
          <div className="ornament-divider">
            <span className="ornament-line"></span>
            <span className="ornament-symbol">✦</span>
            <span className="ornament-line"></span>
          </div>
        </div>

        {/* Accordion Container */}
        <div className="faq-accordion-wrap">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={item.id} 
                className={`faq-item-card ${isOpen ? 'active' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <span className="faq-toggle-icon">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>

                <div
                  id={`faq-answer-${item.id}`}
                  className={`faq-answer-collapse ${isOpen ? 'open' : ''}`}
                  role="region"
                >
                  <div className="faq-answer-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="faq-still-questions">
          <h3 className="still-title">Have a question not answered here?</h3>
          <p className="still-desc">
            We are always happy to help you with personalized answers and decoration advice.
          </p>
          <a
            href={createWhatsAppUrl("Hello Radharani Events, I have a quick question about your decoration services in Aligarh.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageCircle size={18} />
            <span>Ask Us Directly on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
