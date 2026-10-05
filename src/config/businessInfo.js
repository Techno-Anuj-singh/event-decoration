/**
 * Central Configuration File for Radharani Event Planner & Decoration
 * Modify all business details, contact information, social links, and locations from this single file.
 */

export const businessInfo = {
  // Core Business Identity
  businessName: "Radharani Event Planner & Decoration",
  shortName: "Radharani Events",
  tagline: "Event Planning & Decoration in Aligarh",
  taglineHindi: "सजावट जो हर उत्सव को खास बना दे",
  subtitle: "From intimate celebrations to grand occasions, we bring creativity, elegance, and captivating decoration to your special events.",

  // Location Details
  city: "Aligarh, Uttar Pradesh",
  fullLocation: "Khirni Gate Police Chowki, Aligarh",
  serviceAreaHeadline: "Serving Aligarh & Nearby Areas",
  serviceAreas: [
    "Aligarh City",
    "Civil Lines",
    "Ramghat Road",
    "G.T. Road",
    "Quarsi",
    "Sarrafa Bazaar",
    "Sasni Gate",
    "Tala Nagari",
    "Iglas Road",
    "Nearby Regions & Districts"
  ],

  // Contact Details
  phone: "8533813659",
  displayPhone: "+91 85338 13659",
  telLink: "tel:+918533813659",
  whatsapp: "918533813659",
  email: "py2388445@gmail.co",
  mailtoLink: "mailto:py2388445@gmail.co",

  // Social Media
  instagramUsername: "@radharanidecoration2025",
  instagramHandle: "radharanidecoration2025",
  instagramUrl: "https://www.instagram.com/radharanidecoration2025/",

  // Maps & Location Coordinates/Embed
  // Central place to change the business location link or iframe source
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Khirni+Gate+Police+Chowki,+Aligarh,+Uttar+Pradesh",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d220.4301299862744!2d78.07490730109235!3d27.874892471318155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1791024665620!5m2!1sen!2sin",
  // Feature Highlights
  highlights: [
    "Creative Themes",
    "Beautiful Decor",
    "Personalized Service"
  ],

  // Operating Hours
  hours: "Monday - Sunday: 9:00 AM - 9:00 PM (Instant WhatsApp Enquiries 24/7)"
};

/**
 * Helper utility to build WhatsApp URLs with custom pre-filled encoded messages
 */
export const createWhatsAppUrl = (customText = "") => {
  const base = `https://wa.me/${businessInfo.whatsapp}`;
  if (!customText) {
    const defaultText = `Hello ${businessInfo.businessName}, I would like to enquire about event decoration in ${businessInfo.city}.`;
    return `${base}?text=${encodeURIComponent(defaultText)}`;
  }
  return `${base}?text=${encodeURIComponent(customText)}`;
};

/**
 * Service-specific WhatsApp enquiry generator
 */
export const createServiceWhatsAppUrl = (serviceName) => {
  const text = `Hello ${businessInfo.businessName}, I am interested in ${serviceName}. Please share details, availability and pricing.`;
  return createWhatsAppUrl(text);
};

/**
 * Gallery item specific WhatsApp enquiry generator
 */
export const createGalleryWhatsAppUrl = (title, category) => {
  const text = `Hello ${businessInfo.businessName}, I saw this decoration design "${title}" (${category}) on your website. Please share if a similar setup is available for my event and the pricing details.`;
  return createWhatsAppUrl(text);
};
