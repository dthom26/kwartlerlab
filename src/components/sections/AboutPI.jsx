import "../../styles/components/AboutPI.css";
export const AboutPI = () => {
  return (
    <>
      <h2 id="meet-the-team" className="section-title">
        Meet the Team
      </h2>
      <section className="about-pi-section-container" id="about-pi-section">
        <div id="pi-photo-container">
          <img
            id="pi-photo"
            src="images/team/Dr. Callie.jpg"
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
              Callie Kwartler, Ph.D., is an Assistant Professor in the
              Department of Internal Medicine, Division of Medical Genetics at
              the UTHealth McGovern Medical School in Houston, TX. Callie did
              her doctoral work at the UTHealth MD Anderson Graduate School of
              Biomedical Sciences in the laboratory of Dr. Dianna Milewicz,
              M.D., Ph.D. Her doctoral research assessed molecular mechanisms of
              thoracic aortic aneurysms and dissections caused by rare genetic
              variants in the MYH11 gene, which encodes smooth muscle myosin
              heavy chain. She moved to UTSouthwestern Medical Center for a
              postdoc in the laboratory of Thomas Carroll, Ph.D., where she
              studied the role of Wnt/β-catenin signaling in the stromal cells
              of the developing kidney to assess if constitutive activation of
              β-catenin in the stroma could drive the pathogenesis of a
              pediatric renal cancer called Wilms tumor. Then, she came back to
              the Milewicz Lab for a second postdoc, where she combined her
              expertise in developmental biology and transcriptional regulation
              with her prior knowledge of smooth muscle cell biology. She
              initiated an induced pluripotent stem cell (iPSC) model system for
              studying molecular control of smooth muscle cell differentiation
              in vitro, and used this system to study a severe vascular disease
              called Smooth Muscle Dysfunction Syndrome, caused by pathogenic
              variants affecting the amino acid Arg179 in smooth muscle α-actin
              (encoded by ACTA2). She discovered a novel role for smooth muscle
              α-actin in the nucleus. Disruption of nuclear smooth muscle
              α-actin prevents complete differentiation of smooth muscle cells
              via dysregulated epigenetics. This discovery forms the basis for
              multiple novel and exciting projects in the lab. Callie grew up in
              Houston and can speak eloquently about the greatness of her city!
              Outside of research, Callie spends lots of time with family and
              enjoys live theater, baseball, reading novels, and travel.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
