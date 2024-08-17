import React from 'react';
import Slider from './Slider';
import './Home.css'; 
import { MdPhoneCallback } from "react-icons/md";


const App = () => {
  return (
    <div>
      <nav>
        <div className="nav__logo">
          <a href="#">Chennai restaurant</a>
        </div>
        <ul className="nav__links">
          <li className="link"><a href="#">Home</a></li>
          <li className="link"><a href="#menucard">Menu Card</a></li>
          <li className="link"><a href="#location">Location</a></li>
          <li className="link"><a href="#contact" id="nav__btn">Contact</a></li>
        </ul>
      </nav>

      <section className="container">
        <div className="content__container">
          <h1>
            Welcome to <br />
            <span className="heading__1">Chennai restaurant</span><br />
            <span className="heading__2">Fresh Taste for your Tounge</span><br />
          </h1>
          <p>
            Discover an exquisite fusion of flavors and ambiance that promises to
            elevate your dining experience. Indulge in our globally-inspired menu,
            crafted with care and passion. Join us and embark on a journey of
            culinary delight. Your table awaits.
          </p>
       
            <h1>Order to Contact</h1>
            <p style={{fontSize:"30px"}}><MdPhoneCallback />+91 7339566898</p>
            
        
        </div>

        {/* Slider component */}
        <Slider />
      </section>

      {/* Menu Card Section */}
      <section id="menucard">

      </section>
      <section id="location">
     
      </section>

      {/* Add other sections here */}
    </div>
  );
};

export default App;
