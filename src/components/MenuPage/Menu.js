import React, { useState, useEffect, useRef } from 'react';
import './Menu.css';
import { menuData } from './menuData';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const menuItemsRef = useRef([]);
  const categoryNavRef = useRef(null);

  // Scroll to top when category changes
  useEffect(() => {
    if (categoryNavRef.current) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeCategory]);

  // Intersection Observer for scroll animations
  // useEffect(() => {
  //   const observerOptions = {
  //     threshold: 0.1,
  //     rootMargin: '0px 0px -50px 0px'
  //   };

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('menu-item-visible');
  //       }
  //     });
  //   }, observerOptions);

  //   // Observe all menu items
  //   menuItemsRef.current.forEach(item => {
  //     if (item) observer.observe(item);
  //   });

  //   return () => {
  //     menuItemsRef.current.forEach(item => {
  //       if (item) observer.unobserve(item);
  //     });
  //   };
  // }, [activeCategory, searchQuery]);

  useEffect(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('menu-item-visible');
      }
    });
  }, observerOptions);

  // ✅ Capture the current ref list once
  const items = [...menuItemsRef.current];

  // Observe all menu items
  items.forEach(item => {
    if (item) observer.observe(item);
  });

  return () => {
    // Cleanup uses the same list captured earlier
    items.forEach(item => {
      if (item) observer.unobserve(item);
    });
  };

}, [activeCategory, searchQuery]);

  // Handle category switch
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSearchQuery(''); // Clear search when switching categories
  };

  // Handle search
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim()) {
      setActiveCategory('all'); // Show all sections when searching
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  // Filter items based on search query
  const filterItems = (items) => {
    if (!searchQuery.trim()) return items;
    
    const query = searchQuery.toLowerCase();
    return items.filter(item => 
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.price.toLowerCase().includes(query)
    );
  };

  // Check if section should be displayed
  const shouldShowSection = (category) => {
    if (activeCategory === 'all') return true;
    return activeCategory === category;
  };

  // Render menu section
  const renderMenuSection = (category, sectionTitle) => {
    if (!shouldShowSection(category)) return null;

    const categoryData = menuData[category];
    let itemIndex = 0;

    return (
      <section className={`menu-section ${category}-section active`} key={category}>
        <h2 className="section-title">{sectionTitle}</h2>
        
        {categoryData.map((subcategoryData, subIndex) => {
          const filteredItems = filterItems(subcategoryData.items);
          
          if (filteredItems.length === 0) return null;

          return (
            <div className="subcategory" key={subIndex}>
              <h3 className="subcategory-title">{subcategoryData.subcategory}</h3>
              <div className="menu-grid">
                {filteredItems.map((item, itemIdx) => {
                  const currentIndex = itemIndex++;
                  return (
                    <div 
                      className="menu-item"
                      key={itemIdx}
                      ref={el => menuItemsRef.current[currentIndex] = el}
                    >
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="item-image"
                        loading="lazy"
                      />
                      <div className="item-details">
                        <h4 className="item-name">{item.name}</h4>
                        <p className="item-description">{item.description}</p>
                        <p className="item-price">{item.price}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    );
  };

  return (
    <div className="menu-page">
      {/* Header */}
      <header className="menu-header">
        <div className="container">
          <h1 className="hotel-name">Airport Golden Tulip Hotel</h1>
          <p className="hotel-tagline">Exquisite Dining Experience</p>
        </div>
      </header>

      {/* Category Navigation */}
      <nav className="category-nav" ref={categoryNavRef}>
        <div className="container">
          <div className="category-buttons">
            {/* <button
              className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('all')}
            >
              All Menu
            </button> */}
            <button
              className={`category-btn ${activeCategory === 'food' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('food')}
            >
              Food
            </button>
            <button
              className={`category-btn ${activeCategory === 'drinks' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('drinks')}
            >
              Drinks
            </button>
          </div>

          {/* Search Bar */}
          <div className="menu-search-container">
            <input
              type="text"
              className="menu-search-input"
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            {searchQuery && (
              <button 
                className="menu-search-clear"
                onClick={clearSearch}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Menu Container */}
      <main className="menu-container">
        <div className="container">
          {renderMenuSection('food', 'Food Menu')}
          {renderMenuSection('drinks', 'Drinks Menu')}
        </div>
      </main>

      {/* Footer */}
      <footer className="menu-footer">
        <div className="container">
          <p>&copy; 2024 Airport Golden Tulip Hotel. All rights reserved.</p>
          <p>Prices are in Nigerian Naira (₦) and subject to change.</p>
        </div>
      </footer>
    </div>
  );
};

export default Menu;
