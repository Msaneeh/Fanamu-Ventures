import './Training.css';
import { Clipboard } from 'react-bootstrap-icons';


const Training = () => {

  const trainingData = [
    { 
      title: "Poultry Farming Pro",
      duration: "2 weeks (Online/Offline)", 
      price: "₦45,000", 
      cert: "Certificate Included", 
      image: "/assets/pultry-farm.jpg",
      features: "Feeding, health, housing, business plan" 
    },
    { 
      title: "Fish Farming (Catfish)", 
      duration: "1 week intensive", 
      price: "₦35,000", 
      cert: "Certificate + starter guide", 
      image: "/assets/fish-training.png",
      features: "Pond construction, feeding, harvesting" 
    },
    { 
      title: "Commercial Farm Setup", // Made title unique
      duration: "Custom session", 
      price: "₦20,000 - ₦80,000", 
      cert: "Action plan report", 
      image: "/assets/consultation-1.png", // Moved to image path
      features: "Land prep, biosecurity, marketing strategy" 
    },
    {
      title: "Biosecurity Consultation", // Made title unique
      duration: "Custom session", 
      price: "₦20,000 - ₦80,000", 
      cert: "Action plan report", 
      image: "/assets/consultation-2.png", // Moved to image path
      features: "Land prep, biosecurity, marketing strategy" 
    }
  ];

  return (
    <section id="training" style={{ background: '#F8F7F2', padding: '70px 0' }}>
      <div className="container">
        <div className="section-header" style={{marginBottom: '30px'}}>
          <h2>Empower Your Agribusiness</h2>
          <p>Hands-on training & consultation — online & offline</p>
        </div>

        {/* FIX 1: The grid container sits OUTSIDE the map function */}
        <div className="training-grid" id="trainingGrid">
          
          {/* FIX 2: Rename parameter to singular 'item' to avoid shadowing */}
          {trainingData.map((item) => {
            return (
              /* FIX 3: Added unique key attribute */
              <div className="training-card" key={item.title}>
                
                {/* FIX 4: Render actual image element using your public image paths */}
                <div className="training-image-wrapper">
                  <img src={item.image} alt={item.title} className="training-card-img" />
                </div>
                
                <h3>{item.title}</h3>
                <div className="training-duration">{item.duration}</div>
                <div className="price">{item.price}</div>
                
                {/* Integrated your imported Clipboard icon next to the certificate text */}
                <div className="cert-badge">
                  <Clipboard style={{ marginRight: '6px' }} /> {item.cert}
                </div>
                
                <p className="training-features">{item.features}</p>
              </div>
            );
          })}

        </div>

        {/* Inline style property names fixed to camelCase */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a href="#contact" className="btn-primary" style={{ background: '#0B8F3A' }}>
            <i className="fas fa-clipboard-list"></i> Register Now →
          </a>
        </div>
      </div>
    </section>
  );
};


export default Training;