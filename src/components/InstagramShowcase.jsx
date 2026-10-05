import React from 'react';
import { Instagram, Sparkles, ExternalLink, Heart, MessageCircle } from 'lucide-react';
import { businessInfo } from '../config/businessInfo';
import { instagramPosts } from '../data/instagramData';
import './InstagramShowcase.css';

export default function InstagramShowcase() {
  return (
    <section id="instagram" className="section section-alt instagram-section" aria-label="Instagram Showcase">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Instagram size={13} />
            INSTAGRAM GALLERY
          </div>
          <h2 className="section-title">See More of Our Work</h2>
          <p className="section-subtitle">
            Follow <strong>{businessInfo.businessName}</strong> on Instagram for more decoration ideas, setup videos, and recent work in Aligarh.
          </p>
          <div className="ornament-divider">
            <span className="ornament-line"></span>
            <span className="ornament-symbol">✦</span>
            <span className="ornament-line"></span>
          </div>
        </div>

        {/* Profile Card Header */}
        <div className="ig-profile-bar">
          <div className="ig-profile-info">
            <div className="ig-avatar-wrap">
              <div className="ig-avatar-inner">
                <Sparkles size={22} className="ig-sparkle" />
              </div>
            </div>
            <div className="ig-user-details">
              <span className="ig-username">{businessInfo.instagramUsername}</span>
              <span className="ig-bio">Aligarh Event &amp; Celebration Decorators ✨</span>
            </div>
          </div>

          <a
            href={businessInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm ig-follow-btn"
          >
            <Instagram size={16} />
            <span>Follow on Instagram</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* 8-Post Image Grid */}
        <div className="ig-grid">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={businessInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ig-post-card"
              title={`View ${post.tag} decoration on Instagram`}
            >
              <div className="ig-img-wrap">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="ig-post-img"
                  loading="lazy"
                />
                <div className="ig-post-overlay">
                  <div className="ig-overlay-top">
                    <Instagram size={20} className="ig-hover-icon" />
                    <span className="ig-post-tag">{post.tag}</span>
                  </div>
                  <p className="ig-post-caption">{post.caption}</p>
                  <div className="ig-overlay-bottom">
                    <span className="ig-likes">
                      <Heart size={14} className="heart-icon" />
                      <span>{post.likes}</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="ig-bottom-action">
          <a
            href={businessInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <Instagram size={18} />
            <span>Visit @{businessInfo.instagramHandle}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
