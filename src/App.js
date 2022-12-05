import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Navbar />
      </header>
      <section className='hero'>
        <Hero />
      </section>
    </div>
  );
}

export default App;
 