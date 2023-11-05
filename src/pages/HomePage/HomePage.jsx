import React from 'react';
import { Link } from 'react-router-dom';
import CopyEmailToClipboard from '../../../utils/CopyEmailToClipboard';
import '../../../utils/reset.scss';
import './HomePage.scss';

export default function HomePage() {
  const emailRef = React.useRef(null);

  const handleCopyEmail = () => {
    if (emailRef.current) CopyEmailToClipboard(emailRef.current.textContent);
  };

  return (
    <main className="home-page">
      <div className="home-page-content-container">
        <div className="hero-section">
          <div className="bio">
            <span className="bio-title">{"Hey there, I'm Bilal! "}</span>
            <p className="bio-text">
              I've got a knack for coding and a passion for piecing together
              digital creations, especially using{' '}
              <span className="bio-stack">React</span>. My journey kicked off in
              electrical engineering, but these days, I'm all about transforming
              code into interactive web experiences. I’m currently on the
              lookout for a place where I can share what I've learned and keep
              growing alongside fellow tech enthusiasts.
            </p>
          </div>
          <img
            src="assets/images/illustration_1.png"
            alt="web developer profile photo"
            className="profile-img"
          />
        </div>

        <div className="contact-info">
          <div className="email-container" onClick={handleCopyEmail}>
            <p ref={emailRef} className="email">
              bilal.mekiri@gmail.com
            </p>
            <img
              src="assets/icons/copy_color.png"
              alt="Copy icon"
              className="copy-icon"
            />
          </div>

          <div className="social-container">
            <Link
              to="https://www.linkedin.com/in/bilal-mekiri"
              target="_blank"
              className="social-link">
              <img
                src="assets/icons/linkedin_color.png"
                alt="Linkedin icon"
                className="social"
              />
            </Link>
            <Link
              to="https://github.com/Bilal-MEKIRI"
              target="_blank"
              className="social-link">
              <img
                src="assets/icons/github_color.png"
                alt="Github icon"
                className="social"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
