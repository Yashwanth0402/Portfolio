import React, { useState, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Research from "./components/Research";
import Footer from "./components/Footer";

function App() {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolling(scrollPosition > 100); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    useEffect(() => {
    if (window.innerWidth < 768) {
      setShowWarning(true);
    }
  }, []);

  return (
    <div>

     {showWarning && (
        <div className="warning-popup">
          <div className="warning-box">
            <p>For the best experience, please open this site on an iPad or a larger screen.</p>
            <div className="warning-buttons">
              <button onClick={() => setShowWarning(false)}>Continue</button>
              <button onClick={() => window.location.href = "https://www.google.com"}>Exit</button>
            </div>
          </div>
        </div>
      )}
      {/* Spline Container */}
      <div className="spline-container">
        <nav className="navbar">
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
        <spline-viewer url="/assets/hello_1.spline"></spline-viewer>
      </div>

      {/* About Section */}
      <div>
        <About />
      </div>

      {/* Research Section */}
      <div>
      <Research />
      </div>


      {/* Projects Section */}
      <div>
      <Projects />
      </div>

      {/* Footer Section */}
      <div>
      <Footer />
      </div>


    </div>
  );
}

export default App;
