import React from "react";

const Card = ({ image, title, description, link, children, className }) => {
  return (
    <div className={`card ${className || ""}`}>
      {image && <img src={image} alt={title} className="card-image" />}
      {link ? (
        <a href={link} className="card-title">
          {title}
        </a>
      ) : (
        <h3 className="card-title">{title}</h3>
      )}
      {description && <p className="card-description">{description}</p>}
      {children}
    </div>
  );
};

export default Card;
