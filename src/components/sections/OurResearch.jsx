import "../../styles/components/OurResearch.css";

const OurResearch = () => {
  return (
    <div>
      <h1 className="section-title">Our Research</h1>
      <section className="image-text-section">
        <img
          src="images/ChatGPT Image Aug 7, 2025, 11_39_50 AM.png"
          alt="stock image"
          className="image-text-image"
        />
        <div className="image-text-content">
          <p>
            The Kwartler Lab is a dynamic research team focused on understanding
            molecular mechanisms of cell fate specification that are disrupted
            with rare genetic variants. The Kwartler Lab approaches research as
            a team, combining interdisciplinary techniques and multiple model
            systems to understand cellular differentiation and disease
            pathogenesis. You can expect to find a team of passionate
            researchers working in a truly collaborative environment doing
            exciting translational science.
          </p>
        </div>
      </section>
      <p className="section-text">
        The Kwartler Lab laboratory was established in 2022 and focuses on two
        major research directions: 1) epigenetic functions of actins and 2)
        epigenetic control of smooth muscle cell differentiation.
      </p>
    </div>
  );
};

export default OurResearch;
