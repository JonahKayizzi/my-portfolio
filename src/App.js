import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Jonathan from './components/Jonathan';
import TechProjects from './components/TechProjects';
import AviationProfficiency from './components/AviationProfficiency';
import Recommendations from './components/Recommendations';
import History from './components/History';
import Awards from './components/Awards';

const App = () => {
  <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Jonathan />} />
      <Route exact path="/tech-projects" element={<TechProjects />} />
      <Route exact path="aviation" element={<AviationProfficiency />} />
      <Route exact path="/recommendations" element={<Recommendations />} />
      <Route exact path="/history" element={<History />} />
      <Route exact path="/awards" element={<Awards />} />
    </Routes>
  </>;
};

export default App;
