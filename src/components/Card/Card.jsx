import PropTypes from 'prop-types';
import './Card.scss';

export default function Card({ link, imgUrl, stack }) {
  return (
    <a href={link} target="_blank" className="project-link" rel="noreferrer">
      <div className="card">
        <img
          src={imgUrl}
          alt="Website project preview"
          className="project-preview-img"
        />
        <div className="card-text">
          {stack.map((tech, index) => (
            <span key={index} className="stack">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

Card.propTypes = {
  link: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
};
