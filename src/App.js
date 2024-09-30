import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import useThemeStore from './themeStore';
import './App.css'; // Import för CSS-styling

function App() {
  // Hämta det nuvarande temat och funktionen för att växla tema från Zustand store
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <Router>
        <div>
          {/* Navigeringsmeny */}
          <nav>
            <ul>
              <li><Link to="/">Om mig</Link></li>
              <li><Link to="/projects">Projekt</Link></li>
              <li><Link to="/contact">Kontakt</Link></li>
            </ul>
          </nav>

          {/* Knapp för att växla mellan mörkt och ljust tema */}
          <button onClick={toggleTheme}>
            Växla till {theme === 'light' ? 'Mörkt' : 'Ljust'} läge
          </button>

          {/* Routing till olika sidor */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;