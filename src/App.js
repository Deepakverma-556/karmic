import './App.css';
import Hero from "./components/Hero"
import UpcomingProjects from "./components/UpcomingProjects"
import Services from "./components/Services"
import BackToTop from './common/BackToTop';
function App() {
  return (
    <>
      <Hero />
      <UpcomingProjects />
      <Services />
      <BackToTop/>
    </>
  );
}

export default App;
