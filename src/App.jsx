import React from "react";
import Skills from "./components/Skills";
import Skills_with_loader from "./components/Skills";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Work_eaperience from "./components/Work_experience";
import Contact from "./components/Contact";
import { ReactLenis } from "lenis/react";
import Navbar from "./components/Navbar";
import GoToTop from "./components/GoToTop";
import ThreeDModel1 from "./components/ThreeDModel1";
import Progress from "./components/Progress";
function App() {

  return (
    <ReactLenis root>
      <div className="app_class min-h-screen" style={{ fontFamily: "Poppins" }}>

        {/* <ThreeDModel1></ThreeDModel1> */}
        <Navbar />
        <div id="home" className="pt-1">
          <Hero />
        </div>

        <div id="about" className="pt-12">
          <About />
        </div>
        <div id="skills" className="pt-4">
          <Skills />
        </div>
        {/* <Skills_with_loader/> */}
        <div id="experience" className="pt-0">
          <Work_eaperience />
        </div>
        <div id="project" >
          <Projects />
        </div>
        <div id="contact" className="pt-1">
          <Contact />
        </div>
        <Footer />
       
        <GoToTop/>
        {/* <Progress></Progress> */}
       
        
      </div>
    </ReactLenis>
  );
}

export default App;
