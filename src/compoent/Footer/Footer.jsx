import './Footer.css';
import { Facebook, Instagram, Whatsapp, Youtube, TelephoneFill, EnvelopeFill, GeoAltFill } from 'react-bootstrap-icons';

const Footer = () => {
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
          <p><TelephoneFill /> <span>+234 812 345 6789</span></p>
          <p><EnvelopeFill /> <span>hello@fanamuventures.com</span></p>
          <p><GeoAltFill /> <span>No 12 Farm Settlement, Ibadan, Nigeria</span></p>
        </div>

        {/* Column 4: Social Communities */}
        <div className="footer-col">
          <h4>Follow Our Journey</h4>
          <p className="social-text">Stay updated with our seasonal harvests, farming tips, and training workshops.</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><Facebook /></a>
            <a href="#" aria-label="Instagram"><Instagram /></a>
            <a href="#" aria-label="WhatsApp"><Whatsapp /></a>
            <a href="#" aria-label="YouTube"><Youtube /></a>
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