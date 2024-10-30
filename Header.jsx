// Header.js
import React from 'react';

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <a href="index.html" id="branding">
          <img src="dummy/logo.png" alt="Site Title" />
          <small className="site-description">Slogan goes here</small>
        </a>
        <nav className="main-navigation">
          <button type="button" className="toggle-menu">
            <i className="fa fa-bars"></i>
          </button>
          <ul className="menu">
            <li className="menu-item current-menu-item">
              <a href="index.html">Home</a>
            </li>
            {/* Добавьте остальные пункты меню */}
          </ul>
        </nav>
        <div className="mobile-menu"></div>
      </div>
    </header>
  );
}

export default Header;
