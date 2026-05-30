import { Whatsapp } from 'react-bootstrap-icons';
import './Products.css';

const Products = () => {

  const products = [
    { 
      name: "Day old chick's (pullets)", 
      price: "₦3,000 / chick", 
      availability: "Price subject to change", 
      desc: "Healthy, fully vaccinated, high-yielding egg layers", 
      image: "/assets/Day-old.png", 
      category: "poultry", 
      whatsappMsg: "Check Availability" 
    },
    { 
      name: "Day old chicks (broiler)", 
      price: "₦1,200 / chick", 
      availability: "Price subject to change", 
      desc: "Fast-growing, premium commercial meat strains", 
      image: "/assets/Broiler-meat.jpg", 
      category: "poultry", 
      whatsappMsg: "Check Availability" 
    },
    { 
      name: "Point of Lay Birds", 
      price: "₦8,500 / bird", 
      availability: "Limited Stock", 
      desc: "Ready to lay out excellent yields, 18 weeks old", 
      image: "/assets/point-lay.jpg",
      whatsappMsg: "Order on WhatsApp"  
    },
    { 
      name: "Table Eggs (crate)", 
      price: "₦5,300 / crate", 
      availability: "Fresh daily", 
      desc: "Farm fresh selection, grade A large size", 
      image: "/assets/Teble-egss.jpg",
      whatsappMsg: "Order on WhatsApp"  
    },
    { 
      name: "Dressed Broiler (kg)", 
      price: "₦5,500 / kg", 
      availability: "Freshly Processed", 
      desc: "Hygienically dressed, juicy, antibiotic-free meat", 
      image: "/assets/Broiler-meat.jpg",
      whatsappMsg: "Order on WhatsApp"  
    },
    { 
      name: "Catfish (live/kg)", 
      price: "₦3,800 / kg", 
      availability: "Available", 
      desc: "Table-size premium catfish grown in clean ponds", 
      image: "/assets/catfish.jpg",
      whatsappMsg: "Order on WhatsApp" 
    },
    { 
      name: "Organic Poultry Meds", 
      price: "Varies by treatment", 
      availability: "In Stock", 
      desc: "LAB/Probiotics, Anti-Coccidiosis, Anti-CRD, & Organic Antibiotics", 
      image: "/assets/poultry-medicine.png",
      whatsappMsg: "Inquire Treatments"
    },
    { 
      name: "Poultry Litter", 
      price: "₦16,000 / Alkhairi bag", 
      availability: "Ready", 
      desc: "High-absorption, premium-grade dry wood shavings", 
      image: "/assets/poultry-litter.jpg",
      whatsappMsg: "Order on WhatsApp"
    }
  ];

  return (
    <section id="products" style={{ padding: '70px 0 60px' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '30px' }}>
          <h2>Fresh From Our Farm</h2>
          <p>Premium poultry, fishery, farm supplies & organic treatments</p>
        </div>
        
        <div className="products-grid" id="productsGrid">
          {products.map((product) => {
            const whatsappUrl = `https://wa.me/2348026118121?text=Hello,%20I%20am%20interested%20in%20ordering:%20${encodeURIComponent(product.name)}`;

            return (
              <div className="product-card" key={product.name}>
                <div className="product-img-wrapper">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <span className={`availability-badge ${product.availability.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                    {product.availability}
                  </span>
                </div>
                
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-desc">{product.desc}</p>
                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    
                    <a 
                      href={whatsappUrl}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="whatsapp-btn"
                      style={{ textDecoration: 'none' }}
                    >
                      <Whatsapp size={20} color='var(--color-off-white)' /> {product.whatsappMsg}
                    </a>
                  </div>
                </div> 
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Products;