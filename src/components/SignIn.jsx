import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';


function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to Dashboard after Sign-In without validation
    navigate('/dashboard');  
  };

  return (
    <section className="signin section container" style={{ marginTop: "110px" }}>
      <Header />
      <div className="signin__content">
        <div className="signin__logo-container">
          <img src="/logo.png" alt="Logo" className="signin__logo" /> 
        </div>
        <div className="signin__form-container">
          <h1 className="signin__title">Sign In</h1>
          <form className="signin__form" onSubmit={handleSubmit}>
            <div className="signin__input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className="signin__input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required />
            </div>
            <button type="submit" className="button">Sign In</button>
          </form>
          <p className="signin__footer-text">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
