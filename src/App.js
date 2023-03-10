import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Employment from './components/Employment';
import Projects from './components/Projects';
import Education from './components/Education';
import Recommendations from './components/Recommendations';
import Publications from './components/Publications';
import Awards from './components/Awards';
import Banner from './pages/Banner';

const App = () => {
  <div>
    <Banner />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/recommendations" element={<Recommendations />} />
      <Route exact path="/employment" element={<Employment />} />
      <Route exact path="/education" element={<Education />} />
      <Route exact path="/publications" element={<Publications />} />
      <Route exact path="/awards" element={<Awards />} />
    </Routes>
  </div>;
};

export default App;
