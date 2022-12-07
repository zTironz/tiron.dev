import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Navbar />
      </header>
      
        <Hero />
     
      <Projects />
    </div>
  );
}

export default App;
 