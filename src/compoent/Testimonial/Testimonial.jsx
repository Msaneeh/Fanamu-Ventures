import './Testimonial.css';
import { PersonCircle, Mortarboard, Stethoscope, Cake2 } from 'react-bootstrap-icons';

export const Testimonial = () => {

  const testimonials = [
    { 
      name: "Mrs. Grace O.", 
      role: "Restaurant Owner", 
      text: "Best catfish and eggs in town! Consistent quality and fast delivery.", 
      imgIcon: PersonCircle 
    },
    { 
      name: "Emmanuel K.", 
      role: "Training Alumni", 
      text: "The poultry training gave me confidence to start my 500-bird farm. Highly practical!", 
      imgIcon: Mortarboard 
    },
    { 
      name: "Dr. Adebayo", 
      role: "Vet Partner", 
      text: "Their organic medication and litter transformed our flock health. Amazing team.", 
      imgIcon: Stethoscope 
    },
    { 
      name: "Fatima B.", 
      role: "Home Baker", 
      text: "Table eggs always fresh, bright yolks. My cakes have never been better!", 
      imgIcon: Cake2 
    }
  ];

  return (
    <section id="testimonials" style={{ padding: '40px 0 70px' }}>
      <div className="container">
        <div className="section-header">
          <h2>Happy Customers & Graduates</h2>
          <p>Trusted by families, restaurants and aspiring farmers</p>
        </div>

        <div className="testimonial-grid" id="testimonialsGrid">
          {testimonials.map((testimonial, index) => {
            const IconComponent = testimonial.imgIcon;

            return (
              <div className="testi-card" key={index}>
                <div className="testi-icon">
                  <IconComponent size={32} color="var(--color-primary-green, #0B8F3A)" />
                </div>
                <div className="testi-text">"{testimonial.text}"</div>
                <div className="testi-author">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};