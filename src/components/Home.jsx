import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home section container" id="home" style={{ marginTop: "40px" }} >
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">Order Products <br /> Faster Easier</h1>
          <p className="home__description">Order your favorite foods at any time and we will deliver them right to where you are.</p>
          <Link to="/signin" className="button">Get Started</Link>
        </div>
        <img src="/logo.png" alt="Logo" className="home__logo" />
      </div>

      {/* Rectangle for additional content */}
      {/* Rectangle for additional content */}
<div className="info-rectangle" style={{ marginTop: "40px" }}>
        <div className="info-columns">
          <div className="info-column">
            <h3 className="info-title">Our Services</h3>
            <ul>
              <li>Report a bug</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="info-column">
            <h3 className="info-title">Our Company</h3>
            <ul>
              <li>Blog</li>
              <li>Our Mission</li>
            </ul>
          </div>
          <div className="info-column">
            <h3 className="info-title">Community</h3>
            <ul>
              <li>Questions</li>
              <li>Join Us</li>
            </ul>
          </div>
        </div>
      </div>


    </section>
  );
}

export default Home;
