import './About.css';
import { Flower1, Sun } from 'react-bootstrap-icons';

const About = () => {
  return (
    <section id="about" >
      <div className="container">
      <div className="about-section">
        <div className="about-grid">
          <div style={{ flex: '1' }}>
            <img 
              src="/assets/logo.jpg" 
              alt="Farm story" 
              style={{
                width: '100%',
                borderRadius: '32px',  
                objectFit: 'cover', 
                boxShadow: '0 12px 24px rgba(0,0,0,0.05)' 
              }} 
            />
          </div>
          <div className="farm-story" style={{ flex: 1 }}>  {/* style as object */}
            <h2 style={{ color: '#0B8F3A' }}>Our Farm Heritage</h2>  {/* style as object */}
            <p>
              <strong>Fanamu Ventures</strong> has over 12+ years of experience in 
              ethical poultry and catfish farming. We combine traditional wisdom 
              with modern sustainable methods. Our mission: deliver premium, 
              antibiotic-free products and empower farmers through expert training.
            </p>
            <p>
              <Flower1 size={20} color='var(--color-primary-green)' />  {/* size as number, not string */}
              <strong>Mission:</strong> To nourish communities with healthy, 
              organic farm produce and create a new generation of successful agripreneurs.
            </p>
            <p>
              <Sun size={20} color='var(--color-earth-brown)' />  {/* size as number, not string */}
              <strong>Vision:</strong> Be Africa's leading integrated farm hub 
              known for quality, innovation, and agricultural education.
            </p>
            <p>
              <i className="fas fa-leaf" style={{ color: '#0B8F3A' }}></i> 
              Why organic? Healthier soil, healthier birds, healthier you.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;