import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Info from './pages/Info';
import './App.css';
import NavBar from './components/NavBar';
import { FaHome, FaBookOpen, FaInfoCircle, FaMoon, FaSun } from 'react-icons/fa'; // Import icons

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div>
        
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<Article />} /> {/* Dynamic route for articles */}
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;