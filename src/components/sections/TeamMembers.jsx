import React from "react";
import { teamMembers } from "../../data/team";
import Card from "../ui/Card";
import "../../styles/components/TeamMembers.css";

const TeamMembers = () => {
  return (
    <section className="team-section-container" id="team-section-container">
      <div className="team-grid">
        {teamMembers.map((person) => (
          <Card
            key={person.name}
            image={person.image}
            title={person.name}
            description={person.position}
            className="card--team"
          >
            {person.email && person.email.trim() !== "" && (
              <p className="team-icon">{person.email}</p>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
