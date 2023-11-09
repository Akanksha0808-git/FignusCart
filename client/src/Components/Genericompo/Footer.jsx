import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logog">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbVKmPdUKwsmJJT0dxySl2aUFk2e1FB4ULTDDhvXyT51vt-NxfWGExkt4zcuU-JiJOhI8&usqp=CAU"
            alt="img here"
          />
          <h5>Fignus</h5>
        </div>

        <div className="footer-description">
          <p>FignusCart is one of the most affordable e-commerce sites that offers high-quality products at affordable prices.
          </p>
        </div>
<div className='footer-quick-links'></div>
        <div className="footer-quick-links">
          <ul>
            <li>
              <strong>Quick Links</strong>
            </li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mobile">Mobile</Link></li>
            <li><Link to="/laptop">Laptops</Link></li>
            <li><Link to="/tablet">Tablets</Link></li>
            <li><Link to="/homekitchen">Home&Kitchen</Link></li>
            <li><Link to="/beauty">Beauty</Link></li>
          </ul>
        </div>

        <div className="footer-quick-links">
          <ul>
            <li>
              <strong>About</strong>
            </li>
            <li><Link to="/AboutUs">About Us</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Feedback">Feedback</Link></li>
          </ul>
        </div>

        <div className="footer-social-icons">
          <strong>Lets Social!</strong>
          <Link to="https://www.facebook.com" className="link"><FontAwesomeIcon icon={faFacebook} className="icon" /></Link>
          <Link to="https://www.Twitter.com" className="link"><FontAwesomeIcon icon={faTwitter} className="icon" /></Link>
          <Link to="https://www.linkedin.com/in/akanksha-sharma-0808ak" className="link"><FontAwesomeIcon icon={faInstagram} className="icon" /></Link>
          <Link to="https://github.com/Akanksha0808-git" className="link"><FontAwesomeIcon icon={faGithub} className="icon" /></Link>
        </div>
      </div>

      <div className="emailbox">
        <h4>Get special discounts in your inbox</h4>
        <input type="email" placeholder="Your Email" className="inputbox" />
        <button className="buttn">SEND</button>
      </div>
{/* 
      <div className="map-container">
        <iframe
          title="Google Map"
          width="100%"
          height="100"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.162760163613!2d-122.08373968558647!3d37.422232979800354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858041d3e92a75%3A0x271cfd8f9e9a7ce1!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1659477501494!5m2!1sen!2sus"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div> */}

      <div className="footer-copyright">
        <p>&copy; Akanksha Sharma with love</p>
      </div>
    </footer>
  );
};

export default Footer;
