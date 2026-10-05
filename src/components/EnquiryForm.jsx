import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, AlertCircle, Calendar, MapPin, User, Phone, Tag, MessageSquareText } from 'lucide-react';
import { businessInfo } from '../config/businessInfo';
import './EnquiryForm.css';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    eventType: 'Wedding',
    eventDate: '',
    eventLocation: 'Aligarh',
    requirements: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const eventTypeOptions = [
    "Wedding",
    "Birthday",
    "Engagement",
    "Anniversary",
    "Haldi / Mehndi",
    "Baby Shower",
    "Party",
    "Stage Decoration",
    "Corporate Event",
    "Other"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Please enter your mobile number";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.mobileNumber.trim())) {
      newErrors.mobileNumber = "Please enter a valid mobile number";
    }
    if (!formData.eventType) {
      newErrors.eventType = "Please select an event type";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    // Build the formatted WhatsApp message as requested
    const messageLines = [
      `Hello ${businessInfo.businessName},`,
      `I would like to enquire about event decoration.`,
      ``,
      `Name: ${formData.fullName.trim()}`,
      `Mobile: ${formData.mobileNumber.trim()}`,
      `Event Type: ${formData.eventType}`,
      `Event Date: ${formData.eventDate ? formData.eventDate : "To be decided"}`,
      `Location: ${formData.eventLocation.trim() || businessInfo.city}`,
      `Requirements:`,
      `${formData.requirements.trim() || "Please share sample ideas, decoration packages, and pricing."}`,
      ``,
      `Please share availability and pricing.`,
      `Thank you.`
    ];

    const finalMessage = messageLines.join('\n');
    const whatsappUrl = `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(finalMessage)}`;

    setSubmittedSuccess(true);

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="enquiry-form-card">
      <div className="enquiry-form-header">
        <h3 className="enquiry-form-title">Send Us Your Event Details</h3>
        <p className="enquiry-form-desc">
          Fill out the form below to connect instantly on WhatsApp with pre-filled details.
        </p>
      </div>

      {submittedSuccess && (
        <div className="form-success-banner">
          <CheckCircle2 size={20} className="success-icon" />
          <div>
            <strong>Opening WhatsApp...</strong>
            <p>If WhatsApp did not open automatically, <a href={`https://wa.me/${businessInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">click here to chat directly</a>.</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="enquiry-form">
        <div className="form-grid">
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              Full Name <span className="req">*</span>
            </label>
            <div className="input-with-icon">
              <User size={18} className="input-icon" />
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                required
              />
            </div>
            {errors.fullName && <span className="error-text">{errors.fullName}</span>}
          </div>

          {/* Mobile Number */}
          <div className="form-group">
            <label htmlFor="mobileNumber" className="form-label">
              Mobile Number <span className="req">*</span>
            </label>
            <div className="input-with-icon">
              <Phone size={18} className="input-icon" />
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="e.g. 8533813659"
                className={`form-input ${errors.mobileNumber ? 'has-error' : ''}`}
                required
              />
            </div>
            {errors.mobileNumber && <span className="error-text">{errors.mobileNumber}</span>}
          </div>

          {/* Event Type */}
          <div className="form-group">
            <label htmlFor="eventType" className="form-label">
              Event Type <span className="req">*</span>
            </label>
            <div className="input-with-icon">
              <Tag size={18} className="input-icon" />
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="form-select"
                required
              >
                {eventTypeOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Event Date */}
          <div className="form-group">
            <label htmlFor="eventDate" className="form-label">
              Event Date
            </label>
            <div className="input-with-icon">
              <Calendar size={18} className="input-icon" />
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>

          {/* Event Location */}
          <div className="form-group form-full-width">
            <label htmlFor="eventLocation" className="form-label">
              Event Location in / near Aligarh
            </label>
            <div className="input-with-icon">
              <MapPin size={18} className="input-icon" />
              <input
                type="text"
                id="eventLocation"
                name="eventLocation"
                value={formData.eventLocation}
                onChange={handleChange}
                placeholder="e.g. Ramghat Road / Banquet Hall / Home Address"
                className="form-input"
              />
            </div>
          </div>

          {/* Decoration Requirements */}
          <div className="form-group form-full-width">
            <label htmlFor="requirements" className="form-label">
              Decoration Requirements &amp; Notes
            </label>
            <div className="input-with-icon textarea-icon-wrap">
              <MessageSquareText size={18} className="input-icon textarea-icon" />
              <textarea
                id="requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                rows={3}
                placeholder="Tell us about your preferred colors, stage size, floral preferences, or specific theme..."
                className="form-textarea"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Form Submit Button */}
        <div className="form-submit-wrap">
          <button
            type="submit"
            className="btn btn-whatsapp btn-lg form-submit-btn"
            id="submit-enquiry-wa-btn"
          >
            <MessageCircle size={20} />
            <span>Send Enquiry on WhatsApp</span>
          </button>
          <span className="form-subnote">
            ⚡ Instant direct chat with Radharani Event Planner on WhatsApp.
          </span>
        </div>
      </form>
    </div>
  );
}
