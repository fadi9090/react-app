import './contact.css';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// Your EmailJS credentials (get from https://www.emailjs.com/)
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const templateParams = {
        to_email: 'fadimohmmed0@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'New Contact Form Message',
        message: formData.message,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setStatus({ 
        type: 'success', 
        message: '✅ Message sent successfully! I will get back to you soon.' 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus({ 
        type: 'error', 
        message: '❌ Failed to send message. Please try again.' 
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">📧</div>
            <h3>Email</h3>
            <p>fadimohmmed0@gmail.com</p>
            <a href="mailto:fadimohmmed0@gmail.com"> →</a>
          </div>
          
          <div className="info-card">
            <div className="info-icon">📱</div>
            <h3>Phone</h3>
            <p>+35796833947</p>
            <a href="tel:+35796833947">Call me →</a>
          </div>
          
          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Location</h3>
            <p>Larnaca, Cyprus</p>
            <span>Available for remote work</span>
          </div>
        </div>
        
        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          {status.message && (
            <div className={`status-message ${status.type}`}>
              {status.message}
            </div>
          )}
          <div className="form-group">
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              name="subject"
              placeholder="Subject" 
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <textarea 
              name="message"
              placeholder="Your Message" 
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Message ✉️'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;