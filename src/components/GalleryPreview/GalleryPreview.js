// import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';
import './GalleryPreview.css';
import Frontdesk from "../../Assets/frontdesk.jpg"
import Restaurant from "../../Assets/Restaurant2.jpg"
import Suite from "../../Assets/Suite .jpg"
import Poolside from "../../Assets/poolside.jpg"
import Outside from "../../Assets/outsideview.jpg"
import Restau from "../../Assets/Restau.jpg"


const GalleryPreview = () => {

     function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
  const galleryImages = [
    {
      url: Outside,
      title: 'Hotel Exterior',
      category: 'Exterior',
    },
    {
      url:  Frontdesk,
      title: 'Luxury Lobby',
      category: 'Lobby',
    },
    {
      url: Suite,
      title: 'Premium Suite',
      category: 'Rooms',
    },
    {
      url: Restaurant,
      title: 'Fine Dining',
      category: 'Restaurant',
    },
    {
      url: Poolside,
      title: 'Swimming Pool',
      category: 'Facility',
    },
    {
      url: Restau,
      title: 'Event Space',
      category: 'Events',
    },
  ];

  return (
    <section className="section gallery-preview-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header text-center"
        >
          <h2>Hotel Gallery</h2>
          <p className="section-subtitle">
            Explore our luxurious facilities and accommodations
          </p>
        </motion.div>

        <div className="gallery-preview-grid">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="gallery-preview-item"
            >
              <img src={image.url} alt={image.title} />
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <h4>{image.title}</h4>
                  <p>{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        > <br/>
          <Link to="/gallery" onClick={scrollToTop} className="btn btn-outline">
            View Full Gallery
            <FiChevronRight className="btn-icon" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;