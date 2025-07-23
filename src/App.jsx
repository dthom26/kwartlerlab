import Navbar from "./components/layout/Navbar";
import { AboutPI } from "./components/sections/AboutPI";
import HeroSection from "./components/sections/HeroSection";
import RecentPublications from "./components/sections/RecentPublications";
import TeamMembers from "./components/sections/TeamMembers";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <HeroSection />
      <RecentPublications />
      <AboutPI />
      <TeamMembers />
    </div>
  );
}

export default App;
