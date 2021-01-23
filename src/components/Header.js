import React, {useEffect} from "react";
import Navbar from "./Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Header = () => {

  useEffect(() => {
    AOS.init({duration : 2000});
  }, [])

  return (
    <div className="banner">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div data-aos = "fade-right"  className="banner__text">
            <h3>Pizza Devlivery</h3>
            <h1>MAESTRO PIZINNI</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              minus ut mollitia error molestiae quia.
            </p>
            <div className="banner__btn">
              <a href="" className="btn btn-smart">
                DEVLERY NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
