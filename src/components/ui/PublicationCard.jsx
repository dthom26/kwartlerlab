import React from "react";

const Card = ({ image, title, link, children }) => {
  return (
    <div className="card-image-container">
      {image && (
        <img src={image} alt={title} className="card-image-publication" />
      )}
      {title && (
        <a href={link} className="card-title-overlay">
          {title}
        </a>
      )}
      {children}
    </div>
  );
};

export default Card;
