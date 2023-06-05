import React from 'react';
import AboutMe from '../components/leftbar/AboutMe';
import ContactInfo from '../components/leftbar/ContactInfo';

const LeftBar = () => (
  <div className="w-full px-8 flex shadow-md shadow-black">
    <ContactInfo />
    <AboutMe />
  </div>
);

export default LeftBar;
