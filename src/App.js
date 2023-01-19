import './components/css/header.css';
import './components/css/hero.css';
import './components/css/projects.css';
import './components/css/footer.css';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Home from './pages/Home';
import Project from './pages/Project';

function App() {
  return (
    <div className="App">
      {/* <header className="header">
        <Navbar />
      </header> */}
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route index element={<Home />} />
      <Route path="Project" element={<Project />} />
      </Routes>
      </BrowserRouter>
      {/* <Hero />
      <Projects /> */}
      <Footer />
    </div>
  );
}

export default App;
 