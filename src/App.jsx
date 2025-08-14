import { Footer } from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import News from "./components/layout/News";
import { AboutPI } from "./components/sections/AboutPI";
import CurrentProjects from "./components/sections/CurrentProjects";
import HeroSection from "./components/sections/HeroSection";
import LabPhotos from "./components/sections/LabPhotos";
import OurResearch from "./components/sections/OurResearch";
import RecentPublications from "./components/sections/RecentPublications";
import TeamMembers from "./components/sections/TeamMembers";
import TextInfo from "./components/sections/TextInfo";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <HeroSection />
      <OurResearch />
      <CurrentProjects />
      <RecentPublications />
      <AboutPI />
      <TeamMembers />
      <News />
      <TextInfo />
      <LabPhotos />
      <Footer />
    </div>
  );
}

export default App;
