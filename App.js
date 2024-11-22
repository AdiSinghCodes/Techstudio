import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import Contactus from './Components/Contactus';
import Blogs from './Components/Blogs'; // Ensure this is the correct import for blogs
import Aboutus from './Components/Aboutus';
import Portfolio from './Components/Portfolio';
function App() {

  const handleGoogleFormOpen = () => {
    // Open Google Form in a new tab
    window.open('https://forms.gle/r8NmUTWjDu93PDWn8', '_blank');
  }
  return (
    <Router>
      <Navbar /> {/* Self-closing tag for Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/services" element={<Services onGoogleFormOpen={handleGoogleFormOpen}/>} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<Blogs />} /> {/* Use the Blogs component */}
      </Routes>
    </Router>
  );
}

export default App;
