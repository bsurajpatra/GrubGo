import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: '', // Field for role
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="signup section container" style={{ marginTop: "80px" }}>
      <Header />
      <div className="signup__content">
        <div className="signup__logo-container">
          <img src="/logo.png" alt="Logo" className="signup__logo" /> {/* Add logo */}
        </div>
        <div className="signup__form-container">
          <h1 className="signup__title">Sign Up</h1>
          <form onSubmit={handleSubmit} className="signup__form">
            <div className="signup__input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="signup__input-group">
              <label htmlFor="role">Role</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                style={{
                  width: '100%', 
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px', 
                  fontSize: '16px', 
                  height: '44px', 
                  appearance: 'none', 
                  backgroundColor: 'white', 
                  backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'10\' height=\'10\' viewBox=\'0 0 10 10\'><polygon points=\'0,0 10,0 5,5\' fill=\'%23333\'/></svg>")', // Custom arrow
                  backgroundRepeat: 'no-repeat', 
                  backgroundPosition: 'right 10px center', 
                  backgroundSize: '10px', 
                }}
              >
                <option value="">Select your role</option>
                <option value="super_admin">🏆 Super Admin (Platform Owner)</option>
                <option value="community_president">🤝 Community Head (Moderator)</option>
                <option value="restaurant_owner">🍽 Restaurant Owner</option>
                <option value="delivery_partner">🛵 Delivery Partner</option>
                <option value="customer">👤 Customer</option>
              </select>
            </div>
            <div className="signup__input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="signup__input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
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