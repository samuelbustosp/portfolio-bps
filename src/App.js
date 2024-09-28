import TheFooter from "./components/TheFooter";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";

function App() {
  return (
    <div className="App ">
      <Navbar/> 
      
      <section id="home">
        <Home/>
      </section>
      
      <section id="skills">
        <SkillsPage/>
      </section>
      
      <section id="projects">
        <ProjectsPage/>
      </section>

      <section id="footer">
        <TheFooter/>
      </section>
      
    </div>
  );
}

export default App;
