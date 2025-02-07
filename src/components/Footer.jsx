import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer-text">© {new Date().getFullYear()} GrubGo. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;