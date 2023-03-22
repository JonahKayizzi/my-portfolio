import React from 'react';
import AboutMe from '../components/leftbar/AboutMe';
import Skills from '../components/leftbar/Skills';
import ContactInfo from '../components/leftbar/ContactInfo';
import SpokenLanguages from '../components/leftbar/SpokenLanguages';

const LeftBar = () => (
  <div className="w-1/5 bg-black divide-y divide-amber-800">
    <AboutMe />
    <ContactInfo />
    <Skills />
    <SpokenLanguages />
  </div>
);

export default LeftBar;
