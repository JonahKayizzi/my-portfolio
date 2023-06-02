import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Employment from './components/Employment';
import Projects from './components/Projects';
import Education from './components/Education';
import Recommendations from './components/Recommendations';
import Publications from './components/Publications';
import Awards from './components/Awards';

const App = () => (
  <div className="w-full px-8 shadow-md shadow-black">
    <Routes>
      <Route exact path="/skills" element={<Home />} />
      <Route exact path="/" element={<Projects />} />
      <Route exact path="/recommendations" element={<Recommendations />} />
      <Route exact path="/employment" element={<Employment />} />
      <Route exact path="/education" element={<Education />} />
      <Route exact path="/publications" element={<Publications />} />
      <Route exact path="/awards" element={<Awards />} />
    </Routes>
  </div>
);

export default App;
