import { Outlet, Link } from 'react-router-dom';
import './Template.scss';
import React, { useEffect, useState } from 'react';
import CopyEmailToClipboard from '../../../utils/CopyEmailToClipboard';

export default function Template() {
  const [burgerMenuState, setBurgerMenuState] = useState(false); // State To track if the menu burger is active or not
  const emailRef = React.useRef(null); //Create a reference for the <p> that contains the email

  const trackBurgerMenuState = () => {
    setBurgerMenuState(!burgerMenuState);
    console.log('Burger Menu Active: ', burgerMenuState);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 840) setBurgerMenuState(false);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const handleCopyEmail = () => {
    if (emailRef.current) CopyEmailToClipboard(emailRef.current.textContent);
  };

  return (
    <>
      <header className="header">
        <div className="header-content-container">
          <Link to="" className="logo-container">
            <img
              src="assets/icons/logo_2.png"
              alt="website logo"
              className="logo"
            />
          </Link>

          <nav className="nav-bar">
            <ul className="nav-bar-links-container">
              <li className="nav-links">
                <a href="/#hero-section" className="link">
                  About Me
                </a>
              </li>
              <li className="nav-links">
                <a href="/#creations-section" className="link">
                  My Work
                </a>
              </li>
              <Link to="/contact" className="call-to-action-btn">
                Contact Me
              </Link>
            </ul>
          </nav>

          {!burgerMenuState ? (
            <img
              src="assets/icons/burger_menu_open.png"
              alt="burger menu open icon"
              className="burger-menu"
              onClick={trackBurgerMenuState}
            />
          ) : (
            <img
              src="assets/icons/burger_menu_close.png"
              alt="burger menu open icon"
              className="burger-menu"
              onClick={trackBurgerMenuState}
            />
          )}
        </div>
        <div
          className={!burgerMenuState ? 'mobile-menu' : 'mobile-menu active'}>
          <ul className="menu-items">
            <li className="item">
              <a
                href="/#hero-section"
                className="link"
                onClick={trackBurgerMenuState}>
                About Me
              </a>
            </li>
            <li className="item">
              <a
                href="/#creations-section"
                className="link"
                onClick={trackBurgerMenuState}>
                My Work
              </a>
            </li>
            <li className="item">
              <Link
                to="/contact"
                className="link"
                onClick={trackBurgerMenuState}>
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <Outlet />
      <footer className="footer">
        <div className="footer-content-container">
          <div className="contact-info">
            <div className="email-container">
              <p className="email" ref={emailRef} onClick={handleCopyEmail}>
                bilal.mekiri@gmail.com
              </p>
              <img
                src="assets/icons/copy_color.png"
                alt="copy icon"
                className="copy-icon"
                onClick={handleCopyEmail}
              />
            </div>

            <div className="social-container">
              <Link
                target="_blank"
                to="https://www.linkedin.com/in/bilal-mekiri"
                className="social-link">
                <img
                  src="assets/icons/linkedin_color.png"
                  alt="Linkedin icon"
                  className="social"
                />
              </Link>
              <Link
                target="_blank"
                to="https://github.com/Bilal-MEKIRI"
                className="social-link">
                <img
                  src="assets/icons/github_color.png"
                  alt="Github icon"
                  className="social"
                />
              </Link>
            </div>
          </div>
          <p className="copyright">© 2023 All rights reserved</p>
        </div>
      </footer>
    </>
  );
}
