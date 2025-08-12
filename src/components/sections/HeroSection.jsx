import "../../styles/components/HeroSection.css";
const HeroSection = () => {
  return (
    <section id="hero-section-container">
      <div>
        <img src="images/lab/bigLogo.svg" alt="Kwartler Logo" />
      </div>
      <div>
        <p>
          <span style={{ fontWeight: "bold" }}>
            Exploring the genetic foundations of vascular disease,{" "}
          </span>
          <span style={{ color: "#a6adb8", fontWeight: "bold" }}>
            cell fate in muscle
            <br /> cell, and nuclear actin
            <br />
            dynamics
          </span>{" "}
          <span style={{ color: "#00a199", fontWeight: "bold" }}>
            -one cell at a time.
          </span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
