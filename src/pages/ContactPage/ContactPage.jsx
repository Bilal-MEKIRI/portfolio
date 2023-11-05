import React from 'react';
import { Link } from 'react-router-dom';
import CopyEmailToClipboard from '../../../utils/CopyEmailToClipboard';
import './ContactPage.scss';

export default function ContactPage() {
  const emailRef = React.useRef(null); //Create a reference for the <p> that contains the email

  const handleCopyEmail = () => {
    if (emailRef.current) CopyEmailToClipboard(emailRef.current.textContent);
  };

  return (
    <main className="contact-page">
      <div className="contact-page-content-container">
        <h1 className="page-title">Contact Me</h1>
        <div className="contact-info-container">
          <div className="email-container" onClick={handleCopyEmail}>
            <p ref={emailRef} className="email">
              bilal.mekiri@gmail.com
            </p>
            <img
              src="assets/icons/copy_black.png"
              alt="Copy icon"
              className="copy-icon"
            />
          </div>
          <div className="social-container">
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/bilal-mekiri"
              className="social-link">
              <img
                src="/assets/icons/linkedin_black.png"
                alt="Linkedin icon"
                className="social"
              />
            </Link>
            <Link
              target="_blank"
              to="https://github.com/Bilal-MEKIRI"
              className="social-link">
              <img
                src="/assets/icons/github_black.png"
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
