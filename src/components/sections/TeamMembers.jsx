import React from "react";
import { useState } from "react";
import { teamMembers } from "../../data/team";
import CardWrapper from "../ui/CardWrapper";
import Modal from "../ui/Modal";
import "../../styles/components/TeamMembers.css";

const TeamMembers = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (person) => {
    setSelectedPerson(person);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPerson(null), 300); // Delay to allow exit animation
  };

  return (
    <>
      <section className="team-section-container" id="team-section-container">
        <div className="team-grid">
          {teamMembers.map((person) => (
            <CardWrapper
              key={person.id}
              onClick={() => handleCardClick(person)}
              image={person.image}
              title={person.name}
              description={person.position}
              className="card--team"
            >
              {person.email && person.email.trim() !== "" && (
                <p className="team-icon">{person.email}</p>
              )}
              <div className="read-more-hint">Click for more info</div>
            </CardWrapper>
          ))}
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        person={selectedPerson}
      />
    </>
  );
};

export default TeamMembers;
