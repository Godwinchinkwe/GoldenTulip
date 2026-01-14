import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import './Footer.css';
import Logo from "../../Assets/logo.png"
import Typewriter from "typewriter-effect"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

  const footerLinks = {
    quickLinks: [
      { path: '/', label: 'Home' },
      { path: '/rooms', label: 'Rooms & Suites' },
      { path: '/booking', label: 'Book Now' },
      { path: '/about', label: 'About Us' },
      { path: '/contact', label: 'Contact' },
    ],
    services: [
      // 'Fine Dining',
      { path: 'https://services.airportgoldentuliphotel.com/menu-and-prices/', label:'Menu'},
      { path: '/rooms', label:'Luxury Accomodation'},
      { path: '/gallery', label:'Gallery'},
      { path: '/gallery', label:'Fine Dining'},
      { path: '/blog', label:'Our Blog'},
      // 'Spa & Wellness',
      // 'Event Spaces',
      // 'Concierge Services',
    ],
  };

  const socialLinks = [
    { icon: FiFacebook, href: 'https://www.facebook.com/goldentuliphotellagos', label: 'Facebook' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* <-- Company Info --> */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="footer-section footer-company"
          >
            <div className="footer-logo">
              <img src={Logo} onClick={scrollToTop} className="logo-icon" alt=""/>
            </div>
            <p className="footer-description"><Typewriter options={{
                            strings : [ "Comfort reserve just minutes from the Lagos International Airport, with a luxurious ambiance and excellent International standards, it is conveniently located for anyone coming in or leaving for the Airport." ],
                            loop: true,
                            autoStart:true,
                            typeSpeed: 150,
                            backSpeed: 80,
                            backDelay:1000,
                            deleteSpeed:10,
                        }}/>
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="social-link"
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* <!-- Quick Links --> */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="footer-section" >

            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}  className="footer-link"
                  onClick={scrollToTop}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* <!-- Services --> */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="footer-section"
          >
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-links">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}  className="footer-link"
                  onClick={scrollToTop}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* <!-- Contact Info --> */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="footer-section"
          >
            <h4 className="footer-title">Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>40- 42 Murtala Muhammed Int’l Airport Road, Oshodi- Ikeja, Lagos.</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span><a href="tel:+2348157003333">Receptionist</a></span>,
                <span><a href="tel:+234815003333">Front-Desk</a></span>
              </div>
           
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span><a href="mailto:reservations@airportgoldentuliphotel.com">Reservation</a></span>
              </div>
              <div className="contact-item">
                <FaClock className="contact-icon" />
                <span>24/7 Customer Service</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* <!-- Footer Bottom --> */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Golden Tulip Hotel. All rights reserved. | <a href="/privacypolicy">Privacy Policy</a> | <a href="/teamsofservice">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;