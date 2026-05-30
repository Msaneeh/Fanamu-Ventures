import './Contact.css';
import { TelephoneFill, Whatsapp, EnvelopeFill, GeoAltFill } from 'react-bootstrap-icons';

const Contact = () => {
  // Production-ready dynamic WhatsApp direct chat link
  const whatsappContactUrl = "https://wa.me/2348026118121?text=Hello%20Fanamu%20Ventures,%20I%20would%20like%20to%20make%20an%20inquiry%20regarding%20your%20farm%20products%20and%20consultancy.";

  return (
    <section id="contact" style={{ padding: '20px 0 40px' }}>
      <div className="container">
        <div className="section-header">
          <h2>Reach Out To Us</h2>
          <p>We’d love to hear from you. orders, training, inquiries</p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info">
            <p>
              <TelephoneFill size={24} color="var(--color-primary-green)" style={{ marginRight: '12px' }} /> 
              <a href="tel:+2348026118121" style={{ color: 'inherit', textDecoration: 'none' }}>+234 802 611 8121</a>
            </p>
            <p>
              <Whatsapp size={24} color="#25D366" style={{ marginRight: '12px' }} /> 
              <a href={whatsappContactUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                +234 802 611 8121 (WhatsApp)
              </a>
            </p>
            <p>
              <EnvelopeFill size={24} color="var(--color-primary-green)" style={{ marginRight: '12px' }} /> 
              <a href="mailto:hello@fanamuventures.com" style={{ color: 'inherit', textDecoration: 'none' }}>hello@fanamuventures.com</a>
            </p>
            <p>
              <GeoAltFill size={24} color="var(--color-earth-brown)" style={{ marginRight: '12px' }} /> 
              <span>Brigade, Gwagwarwa, Kano, Nigeria</span>
            </p>
            
            {/* Standard React-compatible maps iframe implementation */}
            <div style={{
                marginTop: '24px',
                borderRadius: '20px', 
                overflow: 'hidden',
                height: '250px', 
                background: '#e2e8f0'
            }}>
              <iframe 
                src="https://maps.google.com/maps?q=Brigade,%20Gwagwarwa,%20Kano&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="250" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Fanamu Ventures Location Map"
              ></iframe>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send a Message</h3>
            <form id="contactForm">
              <input type="text" placeholder="Your Name" required id="contactName" />
              <input type="email" placeholder="Email Address" required id="contactEmail" />
              <textarea rows="4" placeholder="I'm interested in... (products or training)" required id="contactMsg"></textarea>
              
              <button type="submit" className="btn-primary" style={{
                width: '100%',
                justifyContent: 'center'
              }}>Send Inquiry</button>
            </form>
            <p id="formFeedback" style={{ marginTop: '12px', fontSize: '0.9rem' }}></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;