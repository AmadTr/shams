import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"

const App = () => {
  return (
 
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
        
      {/* path="*" fonctionne si aucune route est déclaré au dessus */}
      <Route path="*" element={<Home/>}/>
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
