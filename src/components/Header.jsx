import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">GrubGo</a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link active-link">Home</Link>
            </li>
            <li className="nav__item">
              <Link to="/about" className="nav__link">About us</Link>
            </li>
            <li className="nav__item">
              <Link to="/contact" className="nav__link">Contact us</Link>
            </li>
            <i className='bx bx-toggle-left change-theme' id="theme-button"></i>
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <i className='bx bx-grid-alt'></i>
        </div>
        <Link to="/signin" className="button button__header">Order Now!</Link>
      </nav>
    </header>
  );
}

export default Header;
