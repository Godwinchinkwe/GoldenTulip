import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import './Hero.css';
import Typewriter from "typewriter-effect"
// import heroimage from './heroimage.jpg';

const Hero = () => {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
  return (
    <section className="hero"
  >
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <h1>Airport Golden Tulip Hotel</h1>
          <p className="tagline"> 
            <Typewriter options={{
                            strings : [ " Experience Luxury Like Never Before.","... ", "Discover unmatched comfort just minutes from the airport with modern finishes that redefine luxury..","Your perfect stay awaits."],
                            loop: true,
                            autoStart:true,
                            typeSpeed: 120,
                            backSpeed: 80,
                            backDelay:1000,
                            deleteSpeed:10,
                        }}/>
           </p>
        
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-rating"
        >
          <div className="rating-stars">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <span>5.0 Rating (4,847 Reviews)</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-buttons"
        >
          <Link to="/booking" onClick={scrollToTop} className="btn btn-primary">
            Book Your Stay
          </Link>
          <Link to="/rooms" onClick={scrollToTop} className="btn btn-primary ">
            View Rooms
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;