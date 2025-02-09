import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import TermsOfService from './TermsOfService';

function Home() {
  return (
    <>
      <section className="home section container" id="home" style={{ marginTop: "40px" }}>
        <div className="home__content">
          <div className="home__data">
            <h1 className="home__title">Order Products <br /> Faster Easier</h1>
            <p className="home__description">Order your favorite foods at any time and we will deliver them right to where you are.</p>
            <Link to="/signin" className="button">Get Started</Link>
          </div>
          <img src="/logo.png" alt="Logo" className="home__logo" />
        </div>

        <div className="info-rectangle" style={{ marginTop: "40px" }}>
          <div className="info-columns">
            <div className="info-column">
              <h3 className="info-title">Our Services</h3>
              <ul>
                <li>Report a bug</li>
                <li><Link to="/terms" className="terms-link">Terms of Service</Link></li>
                <li><Link to="/license" className="terms-link">MIT License</Link></li>
              </ul>
            </div>
            <div className="info-column">
              <h3 className="info-title">Our Company</h3>
              <ul>
                <li>Blog</li>
                <li>Our Mission</li>
                <li><a href="https://www.linkedin.com/pulse/grubgo-community-driven-food-delivery-platform-local-b-suraj-patra-negac" target="_blank" rel="noopener noreferrer">Article</a></li>
              </ul>
            </div>
            <div className="info-column">
              <h3 className="info-title">Community</h3>
              <ul>
                <li>Questions</li>
                <li>Join Us</li>
                <li>Events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Routes>
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </>
  );
}

export default Home;
