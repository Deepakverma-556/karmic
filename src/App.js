import './App.css';
import Hero from "./components/Hero"
import UpcomingProjects from "./components/UpcomingProjects"
import Services from "./components/Services"
import BackToTop from './common/BackToTop';
import Projects from './components/Projects';
import Karmic from './components/Karmic';
import Values from './components/Values';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Hero />
      <UpcomingProjects />
      <Services />
      <Projects />
      <Karmic />
      <Values />
      <Footer/>
      <BackToTop/>
    </>
  );
}

export default App;
