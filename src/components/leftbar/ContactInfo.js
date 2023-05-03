import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons';

const ContactInfo = () => (
  <div className="w-full bg-cyan-900 rounded-md mb-4 p-3 flex flex-col items-center shadow-md shadow-black">
    <h1 className="font-light text-3xl text-center my-6">
      <p>Hi, I am Jonathan Kayizzi</p>
      <p className="text-2xl">
        <span className="text-amber-400 mr-2">Full Stack</span>
        <span>Engineer</span>
      </p>
    </h1>
    <p className="text-md text-center my-2 font-thin px-2">
      Currently focussed on building innovative, scalable and maintainable
      applications using micro services architecture.
    </p>
    <div className="flex flex-col items-center gap-2 text-black font-light text-xs my-4 w-2/3">
      <Link
        to="mailto:jonahkayizzi@gmail.com?subject=Available for an opportunity?&body=Hi Jonathan,%20I%20would%20like%20to%20get%20to%20contact%20you%20regarding."
        className="animate-bounce transform hover:scale-105 transition duration-300 ease-in-out p-2 border text-amber-400 border-amber-400 rounded"
      >
        <span className="mx-2">CONTACT ME</span>
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
      <Link
        to="https://drive.google.com/file/d/1MgIsQ9KdpdOnkUlw4XI4fd1bNPscG-qI/view"
        target="_blank"
        className="animate-bounce transform hover:scale-105 transition duration-300 ease-in-out p-2 border text-amber-400 border-amber-400 rounded"
      >
        <span className="mx-2">DOWNLOAD CV</span>
        <FontAwesomeIcon icon={faDownload} />
      </Link>
    </div>
  </div>
);

export default ContactInfo;
