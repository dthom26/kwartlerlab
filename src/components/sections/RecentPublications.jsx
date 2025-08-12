import React from "react";
import { publications } from "../../data/publications";
import "../../styles/components/RecentPublications.css";

function RecentPublications() {
  return (
    <section id="recent-publications-section" className="section-alt-bg">
      <h2 className="section-title">Recent Publications</h2>
      <ul className="publications-container">
        {publications.map((row, index) => (
          <li key={index} className="publication-card">
            <div className="card-content">
              <div className="card-image-container">
                <img
                  src={row.image}
                  alt={row.title}
                  className="card-image-publication"
                />
              </div>

              <div className="card-text">
                <h3 className="card-title">{row.title}</h3>
                <p className="card-summary">{row.summary}</p>
              </div>
            </div>
            <a href={row.link} className="card-button">
              Read More
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RecentPublications;
