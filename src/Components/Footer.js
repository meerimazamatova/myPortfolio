import React from 'react';
import '../Styles/Footer.css'; // Ensure to create and link the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p><strong>Email:</strong> <a href="mailto:meerimazamtova@gmail.com">meerimazamtova@gmail.com</a></p>
          <p className="footer-secondary"><strong>Address:</strong> 1234 Example St, Your City, Your State</p>
        </div>
        <div className="footer-center">
          <p>&copy; {new Date().getFullYear()}</p>
          <p className="footer-name">Meerim Azamatova</p>
        </div>
        <div className="footer-right">
          <p><strong>Country:</strong> Your Country</p>
          <p className="footer-secondary"><strong>Current Location:</strong> Your Current Place</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
