// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Use Routes instead of Route
import Home from './Home';
import About from './About';
import Enter from './Enter';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/enter" element={<Enter />} />
      </Routes>
    </Router>
  );
};

export default App;
