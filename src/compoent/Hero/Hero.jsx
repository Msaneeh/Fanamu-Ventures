import { Cart3, Headset, PersonWorkspace } from 'react-bootstrap-icons';
import './Hero.css';


 const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge"> 100% Organic & Trusted</div>
          <h1>Healthy poultry, catfish, farm supplies & pro training</h1>
          <p>We provide healthy poultry products, catfish, farm supplies, and professional poultry training. Fresh from our farm to your table.</p>
          <div className="hero-buttons">
            <a href="#products" className="btn-primary"><Cart3 size={30} /> Order Now</a>
            <a href="#contact" className="btn-outline"><Headset size={30} /> Contact Us</a>
            <a href="#training" className="btn-primary" style={{background:'#A86A2B'}}><PersonWorkspace size={30} />Book Training</a>
          </div>
        </div>
        <div className="hero-image"></div>
      </div>
    </section>
  )
}

export default Hero;