import React, { useState } from 'react';
import './Header.css';

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="navbar" id="headerNav">
        <div className="navbar-row">
          <a className="navbar-brand-title" href="/">R & I</a>

          {/* Hamburger menu (only shows on mobile) */}
          <button
            className="hamburger d-md-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            &#9776;
          </button>

          {/* Desktop nav (visible on md and up) */}
          <div className="nav-right d-none d-md-flex">
            <a className="navbar-brand" href="/">HOME</a>
            <a className="navbar-brand" href="/story">OUR STORY</a>
            <a className="navbar-brand" href="/details">DETAILS</a>
            <a className="navbar-brand" href="/entourage">ENTOURAGE</a>
            <a className="navbar-brand" href="/rsvp">RSVP</a>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="mobile-menu d-md-none">
            <a className="navbar-brand" href="/home">HOME</a>
            <a className="navbar-brand" href="/story">OUR STORY</a>
            <a className="navbar-brand" href="/details">DETAILS</a>
            <a className="navbar-brand" href="/entourage">ENTOURAGE</a>
            <a className="navbar-brand" href="/rsvp">RSVP</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default HeaderComponent;
