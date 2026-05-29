import './Contact.css';
import { TelephoneFill, Whatsapp, EnvelopeFill, GeoAltFill } from 'react-bootstrap-icons';

 const Contact = () => {
  return (
    <section id="contact" style={{ padding: '20px 0 40px' }}>
      <div className="container">
        <div className="section-header">
          <h2>Reach Out To Us</h2>
          <p>We’d love to hear from you — orders, training, inquiries</p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info">
            <p><TelephoneFill size={30} color="var(--color-primary-green)" /> +234 812 345 6789</p>
            <p><Whatsapp size={30} color="#25D366" /> +234 812 345 6789 (WhatsApp)</p>
            <p><EnvelopeFill size={30} color="var(--color-primary-green)" /> hello@fanamuventures.com</p>
            <p><GeoAltFill size={30} color="var(--color-earth-brown)" /> No 12 Farm Settlement, Ibadan, Nigeria</p>
            
            {/* Fixed: camelCase keys for styles */}
            <div style={{
                marginTop: '24px',
                borderRadius: '20px', 
                overflow: 'hidden',
                height: '250px', 
                background: '#e2e8f0'
            }}>
              {/* Fixed: Valid iframe embed format and standard React style object */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.2733470984124!2d3.850000!3d7.400000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjQnMDAuMCJOIDPCsDUxJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng" 
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
              {/* Fixed: Input tags are now cleanly self-closed '/>' */}
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
      {/* Fixed: Removed the duplicate trailing duplicate div tag that was right here */}
    </section>
  );
};

export default Contact;