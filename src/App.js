import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'; 
import Footer from './Components/Footer'; 
import Projects from './Pages/Projects';
import Home from './Pages/Home';
import Aboutme from './Pages/Aboutme';

function App() {
  return (
    <Router>
      <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutme" element={<Aboutme />}/>
        <Route path="/projects" element={<Projects />} />
        
      </Routes>
      <Footer/>
      </div>
      
    </Router>
  );
}

export default App;