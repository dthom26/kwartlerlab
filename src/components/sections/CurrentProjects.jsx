import React from "react";
import { publications } from "../../data/publications";
import Card from "../ui/PublicationCard";
import "../../styles/components/RecentPublications.css";

function CurrentProjects() {
  return (
    <section className="recent-publications-section">
      <h2 className="section-title">Recent Publications</h2>
      <ul className="publications-grid">
        {publications.map((row, index) => (
          <li key={index}>
            <Card title={row.title} link={row.link} image={row.image} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CurrentProjects;
