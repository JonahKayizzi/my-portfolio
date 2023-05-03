import React from 'react';
import AboutMe from '../components/leftbar/AboutMe';
import ContactInfo from '../components/leftbar/ContactInfo';

const LeftBar = () => (
  <div className="lg:w-1/4 w-full">
    <ContactInfo />
    <AboutMe />
  </div>
);

export default LeftBar;
