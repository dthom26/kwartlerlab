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
      <div className="recent-publications-footer">
        <a
          href="https://www.ncbi.nlm.nih.gov/myncbi/1POYdMvhm81AI/bibliography/public/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View all Dr. Callie's publications on PubMed (external site)"
          className="pubmed-link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="currentColor"
              d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"
            />
            <path fill="currentColor" d="M5 5h6v2H7v10h10v-4h2v6H5V5z" />
          </svg>
          View more publications on PubMed
        </a>
      </div>
    </section>
  );
}

export default RecentPublications;
