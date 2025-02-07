import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <section className="signup section container" style={{ marginTop: "80px" }}>
      <div className="signup__content">
        <div className="signup__logo-container">
          <img src="/logo.png" alt="Logo" className="signup__logo" /> {/* Add logo */}
        </div>
        <div className="signup__form-container">
          <h1 className="signup__title">Sign Up</h1>
          <form className="signup__form">
            <div className="signup__input-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required />
            </div>
            <div className="signup__input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className="signup__input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required />
            </div>
            <div className="signup__input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type="password" id="confirm-password" required />
            </div>
            <button type="submit" className="button">Sign Up</button>
          </form>
          <p className="signup__footer-text">
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignUp;