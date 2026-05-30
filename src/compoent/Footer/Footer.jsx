import './Footer.css';
import { Facebook, Instagram, Whatsapp, Youtube, TelephoneFill, EnvelopeFill, GeoAltFill, Linkedin, TwitterX } from 'react-bootstrap-icons';

const Footer = () => {
  // Safe dynamic encoded message for the custom footer WhatsApp action
  const whatsappFooterUrl = "https://wa.me/2348026118121?text=Hello%20Fanamu%20Ventures,%20I%20visited%20your%20website%20and%20would%20like%20to%20make%20an%20inquiry.";

  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        
        {/* Column 1: About Brand */}
        <div className="footer-col brand-info">
          <h3>Fanamu <span>Ventures</span></h3>
          <p>
            Nourishing communities with sustainable, high-quality agricultural products 
            and empowering the next generation of successful agripreneurs through expert training.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Our Heritage</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#training">Training Hub</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Details */}
        <div className="footer-col contact-col">
          <h4>Contact Us</h4>
          <p>
            <TelephoneFill /> 
            <a href="tel:+2348026118121" style={{ color: 'inherit', textDecoration: 'none', marginLeft: '5px' }}>
              +234 802 611 8121
            </a>
          </p>
          <p>
            <EnvelopeFill /> 
            <a href="mailto:hello@fanamuventures.com" style={{ color: 'inherit', textDecoration: 'none', marginLeft: '5px' }}>
              hello@fanamuventures.com
            </a>
          </p>
          <p><GeoAltFill /> <span style={{ marginLeft: '5px' }}>No 12 Farm Settlement, Ibadan, Nigeria</span></p>
        </div>

        {/* Column 4: Social Communities */}
        <div className="footer-col">
          <h4>Follow Our Journey</h4>
          <p className="social-text">Stay updated with our seasonal harvests, farming tips, and training workshops.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/fanamuventures" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook /></a>
            <a href="https://instagram.com/fanamuventures" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram /></a>
            <a href="https://www.linkedin.com/in/zalihatu-mohammed-bello-169b0310b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href="https://x.com/fanamuventures" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)"><TwitterX /></a>
            <a href={whatsappFooterUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><Whatsapp /></a>
            <a href="https://youtube.com/user/fanamuventures" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube /></a>
          </div>
        </div>

      </div>

      {/* Bottom Bar Container */}
      <div className="footer-bottom">
        <div className="container bottom-flex">
          <p>&copy; {new Date().getFullYear()} Fanamu Ventures. All Rights Reserved.</p>
          <p>Fresh from our farm to your home</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;