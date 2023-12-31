import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home/home"
import About from "./pages/About/about"
import Skills from "./pages/Skills/skills"
import Projects from "./pages/Projects/projects"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
