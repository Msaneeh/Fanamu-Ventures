import { Whatsapp } from 'react-bootstrap-icons';
import './Products.css';

const Products = () => {

  const products = [
    { 
      name: "Day Old Chicks", 
      price: "₦450 / chick", 
      availability: "In Stock", 
      desc: "Healthy, vaccinated, fast-growing", 
      image: "/assets/Day-old.png", 
      category: "poultry", 
      whatsappMsg: "Order on WhatsApp" 
    },
    { 
      name: "Point of Lay Birds", 
      price: "₦3,200 / bird", 
      availability: "Limited", 
      desc: "Ready to lay, 18 weeks old", 
      image: "/assets/point-lay.jpg",
      whatsappMsg: "Order on WhatsApp"  
    },
    { 
      name: "Table Eggs (crate)", 
      price: "₦1,800", 
      availability: "Fresh daily", 
      desc: "Farm fresh, grade A", 
      image: "/assets/Teble-egss.jpg",
      whatsappMsg: "Order on WhatsApp"  
    },
    { 
      name: "Broiler Meat (kg)", 
      price: "₦2,500/kg", 
      availability: "Fresh", 
      desc: "Juicy, antibiotic-free", 
      image: "/assets/Broiler-meat.jpg",
      whatsappMsg: "Order on WhatsApp"  
    },
    { 
      name: "Catfish (live/kg)", 
      price: "₦2,200/kg", 
      availability: "Available", 
      desc: "Grown in clean ponds", 
      image: "/assets/catfish.jpg",
      whatsappMsg: "Order on WhatsApp" 
    },
    { 
      name: "Organic Poultry Meds", 
      price: "₦3,500/pack", 
      availability: "In Stock", 
      desc: "Natural immunity boosters", 
      image: "/assets/poultry-medicine.png",
      whatsappMsg: "Order on WhatsApp"
    },
    { 
      name: "Poultry Litter", 
      price: "₦1,200/bag", 
      availability: "Ready", 
      desc: "High-quality wood shavings", 
      image: "/assets/poultry-litter.jpg",
      whatsappMsg: "Order on WhatsApp"
    },
    { 
      name: "Fresh Vegetables", 
      price: "₦500 - 2,000", 
      availability: "Seasonal", 
      desc: "Organic spinach, pumpkin, etc", 
      image: "/assets/Vegetable.jpg",
      whatsappMsg: "Order on WhatsApp"
    }
  ];

  return (
    <section id="products" style={{ padding: '70px 0 60px' }}>
      <div className="container">
        <div className="section-header" style={{marginBottom: '30px'}}>
          <h2>Fresh From Our Farm</h2>
          <p>Premium poultry, fishery, farm supplies & organic vegetables</p>
        </div>
        
        <div className="products-grid" id="productsGrid">
          {products.map((product) => {
            return (
              <div className="product-card" key={product.name}>
                <div className="product-img-wrapper">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <span className={`availability-badge ${product.availability.toLowerCase().replace(' ', '-')}`}>
                    {product.availability}
                  </span>
                </div>
                
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-desc">{product.desc}</p>
                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <button className="whatsapp-btn">
                      <Whatsapp size={26} color='var(--color-off-white)' /> {product.whatsappMsg}
                    </button>
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