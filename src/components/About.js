import React, {useEffect} from "react";
import pizza from '../img/pizza.jpg'; 
import spring from 'react-spring';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// .

const About = () => {

  useEffect(() => {
    AOS.init({duration : 2000});
  }, [])

  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div  data-aos = "fade-right" className="col-6 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO MAESTRO PIZZINI</h1>
            <p>
              Investigationes demonstraverunt lectores legere me lius quod ii
              legunt saepius. Claritas est etiam processus dynaus, quise
              sequitur mutationem consuetudium lectorum.
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div data-aos = "fade-left" className="col-6">
            <div className="about__img">
              <img src={pizza} alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
