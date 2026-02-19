import React from "react";
import "../../styles/components/LabPhotos.css";
import labPhotos from "../../data/labPhotos";
const LabPhotos = () => {
  return (
    <div id="lab-photos-wrapper">
      <section id="lab-photos-section">
        {labPhotos.map((photo) => (
          <img
            className="lab-photo-card"
            src={photo.imageUrl}
            alt={photo.title}
            key={photo.id}
          />
        ))}
      </section>
    </div>
  );
};

export default LabPhotos;
