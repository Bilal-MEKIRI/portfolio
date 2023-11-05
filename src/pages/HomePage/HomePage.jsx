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

      <section className="my-stack-container">
        <div className="stack-container">
          <img
            src="assets/icons/javascript.svg"
            alt="Javascript logo"
            className="stack-img"
          />
          <p className="stack-name">Javascript</p>
        </div>

        <div className="stack-container">
          <img
            src="assets/icons/react.svg"
            alt="React.js logo"
            className="stack-img"
          />
          <p className="stack-name">React.js</p>
        </div>

        <div className="stack-container">
          <img
            src="assets/icons/nodejs.svg"
            alt="Node.js logo"
            className="stack-img"
          />
          <p className="stack-name">Node.js</p>
        </div>

        <div className="stack-container">
          <img
            src="assets/icons/git.svg"
            alt="Git logo"
            className="stack-img"
          />
          <p className="stack-name">Git</p>
        </div>

        <div className="stack-container">
          <img
            src="assets/icons/mongodb.svg"
            alt="MongoDB logo"
            className="stack-img"
          />
          <p className="stack-name">MongoDB</p>
        </div>

        <div className="stack-container">
          <img
            src="assets/icons/html.svg"
            alt="Sass logo"
            className="stack-img"
          />
          <p className="stack-name">HTML</p>
        </div>

        <div className="stack-container">
          <img
            src="assets/icons/css.svg"
            alt="Sass logo"
            className="stack-img"
          />
          <p className="stack-name">CSS</p>
        </div>

        <div className="stack-container">
          <img
            src="assets/icons/sass.svg"
            alt="Sass logo"
            className="stack-img"
          />
          <p className="stack-name">Sass</p>
        </div>
      </section>
    </main>
  );
}
