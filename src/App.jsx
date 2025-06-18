import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import EducationExperienceSection from './pages/EducationExperience';
import Projects from './pages/Projects';
import LetsConnect from './pages/LetsConnect';

function App() {
  return (
    <Router>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="education"><EducationExperienceSection /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="connect"><LetsConnect /></div>
    </Router>
  );
}

export default App;
