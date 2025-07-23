import "../../styles/components/AboutPI.css";
export const AboutPI = () => {
  return (
    <section className="about-pi-section-container" id="about-pi-section">
      <div id="pi-photo-container">
        <img
          id="pi-photo"
          src="/images/team/image.png"
          alt="Principal Investigator"
        />
      </div>
      <div className="about-pi-text">
        <h2>Callie S. Kwartler, PhD</h2>
        <div className="title-email-row">
          <h3>Principal Investigator</h3>
          <p className="pi-email">callie.s.kwartler@uth.tmc.edu</p>
        </div>
        <div className="about-pi-bio-container">
          <p className="about-pi-bio">
            Dr. Kwartler has investigated mechanisms of pathogenesis in
            genetically triggered thoracic aortic aneurysms and dissections. Her
            research demonstrated the role of rare genetic variants in vascular
            disease when combined with environmental and genetic factors. She
            also contributed to foundational hypotheses on smooth muscle cell
            (SMC) contractility in thoracic aortic disease and SMC proliferation
            in vascular occlusive diseases. Read more
          </p>
        </div>
      </div>
    </section>
  );
};
