import './Training.css';
import { Clipboard } from 'react-bootstrap-icons';

const Training = () => {

  const trainingData = [
    { 
      title: "Poultry Farming Pro",
      duration: "2 weeks (Online/Offline)", 
      price: "Charged per hr", 
      cert: "Certificate Included", 
      image: "/assets/pultry-farm.jpg",
      features: "Feeding, health, housing, business plan" 
    },
    { 
      title: "Fish Farming (Catfish)", 
      duration: "1 week intensive", 
      price: "Charged per hr", 
      cert: "Certificate + starter guide", 
      image: "/assets/fish-training.png",
      features: "Pond construction, feeding, harvesting" 
    },
    { 
      title: "Commercial Farm Setup", 
      duration: "Custom session", 
      price: "Charged per hr", 
      cert: "Action plan report", 
      image: "/assets/consultation-1.png", 
      features: "Land prep, biosecurity, marketing strategy" 
    },
    {
      title: "Biosecurity Consultation", 
      duration: "Custom session", 
      price: "Charged per hr", 
      cert: "Action plan report", 
      image: "/assets/consultation-2.png", 
      features: "Land prep, biosecurity, marketing strategy" 
    }
  ];

  return (
    <section id="training" style={{ background: '#F8F7F2', padding: '70px 0' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '30px' }}>
          <h2>Empower Your Agribusiness</h2>
          <p>Hands-on training & consultation — online & offline</p>
        </div>

        <div className="training-grid" id="trainingGrid">
          {trainingData.map((item) => {
            return (
              <div className="training-card" key={item.title}>
                
                <div className="training-image-wrapper">
                  <img src={item.image} alt={item.title} className="training-card-img" />
                </div>
                
                <h3>{item.title}</h3>
                <div className="training-duration">{item.duration}</div>
                <div className="price">{item.price}</div>
                
                {/* Clean Bootstrap Icon Implementation */}
                <div className="cert-badge">
                  <Clipboard size={16} className="cert-icon" /> 
                  <span>{item.cert}</span>
                </div>
                
                <p className="training-features">{item.features}</p>
              </div>
            );
          })}
        </div>

        {/* Primary Action Button directed straight to your WhatsApp line */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a 
            href="https://wa.me/2348026118121?text=Hello,%20I%20would%20like%20to%20register%20for%20your%20training%20and%20consultancy%20sessions." 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary" 
            style={{ background: '#0B8F3A', textDecoration: 'none', display: 'inline-block' }}
          >
            Register Now →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Training;