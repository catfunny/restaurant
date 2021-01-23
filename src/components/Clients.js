import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Clients = () => {
  
  useEffect(() => {
    AOS.init({duration : 1000});
  }, [])

  return (
    <div data-aos = "fade-left" className="clients">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="client">
              <h1>120</h1>
              <p>Awesome Employees</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>58</h1>
              <p>Pizza Types</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>14868</h1>
              <p>atisfied Clients</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>2031</h1>
              <p>Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
