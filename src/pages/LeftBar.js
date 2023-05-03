import React from 'react';
import AboutMe from '../components/leftbar/AboutMe';
import ContactInfo from '../components/leftbar/ContactInfo';

const LeftBar = () => (
  <div className="md:w-1/4 sm:w-full">
    <ContactInfo />
    <AboutMe />
  </div>
);

export default LeftBar;
