import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h2 className="newsletter-title">Subscribe to our Newsletter</h2>
      <p className="newsletter-description">Stay updated with the latest news and special offers.</p>
      <form className="newsletter-form">
        <input type="email" placeholder="Enter your email" className="newsletter-input" />
        <button type="submit" className="newsletter-button">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;