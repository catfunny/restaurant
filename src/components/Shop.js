import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Shop = () => {
  useEffect(() => {
    AOS.init({duration : 1000})
  }, [])

  return (
    <div className="shop">
      <div className="container">
        <div data-aos = "fade-right"  className="shop__text">
          <div>
            <h1>Free Delivery With PIZZA OF THE DAY Only 8.99 USD</h1>
            <div className="shop__btn">
              <a href="" className="btn btn-smart">
                SHOP NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
