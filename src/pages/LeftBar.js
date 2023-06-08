import React from 'react';
import AboutMe from '../components/leftbar/AboutMe';
import ContactInfo from '../components/leftbar/ContactInfo';

const LeftBar = () => (
  <div className="w-full lg:px-8 px-2 flex lg:flex-row flex-col  shadow-md shadow-black">
    <ContactInfo />
    <AboutMe />
  </div>
);

export default LeftBar;
