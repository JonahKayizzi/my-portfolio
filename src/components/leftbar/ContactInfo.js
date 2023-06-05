import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  faArrowRight,
  faDownload,
  faHouse,
  faMobile,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const ContactInfo = () => (
  <div className="w-2/3 mb-4 flex flex-col items-left">
    <p className="text-5xl">
      <span className="animate-fade-in-out delay-1000">✌️</span>
    </p>
    <h1 className="font-bold text-5xl text-left my-6">
      <p>Hi, I am Jonathan Kayizzi</p>
      <p>
        <span className="text-amber-400 mr-2">Full Stack</span>
        <span>Engineer</span>
      </p>
    </h1>
    <p className="text-md my-2 font-thin px-2 text-gray-400">
      Currently focussed on building innovative, scalable and maintainable
      applications using micro services architecture. Part-timing as a mentor
      for junior full-stack web developers at Microverse. And exploring database
      driven aeronautical chart production.
    </p>
    <div className="w-4/5">
      <ul className="flex justify-around gap-4 text-xs font-thin p-3 text-gray-400">
        <li className="">
          <p className="flex justify-end gap-3 my-2">
            <FontAwesomeIcon className="text-amber-400" icon={faHouse} />
            <span>Kampala, Uganda</span>
          </p>
        </li>
        <li>
          <p className="flex justify-end gap-3 my-2">
            <FontAwesomeIcon className="text-amber-400" icon={faMobile} />
            <span>+256759223526</span>
          </p>
        </li>
        <li>
          <p className="flex justify-end gap-3 my-2">
            <FontAwesomeIcon className="text-amber-400" icon={faEnvelope} />
            <span>jonahkayizzi@gmail.com</span>
          </p>
        </li>
      </ul>
    </div>
    <div className="flex justify-between text-black font-light text-xs my-4 w-2/3">
      <Link
        target="_blank"
        to="mailto:jonahkayizzi@gmail.com?subject=Available for an opportunity?&body=Hi Jonathan,%20I%20would%20like%20to%20get%20to%20contact%20you%20regarding."
        className="transform hover:scale-105 transition duration-300 ease-in-out p-2 border text-amber-400 border-amber-400 rounded"
      >
        <span className="mx-2">CONTACT ME</span>
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
      <Link
        target="_blank"
        to="https://drive.google.com/file/d/1MgIsQ9KdpdOnkUlw4XI4fd1bNPscG-qI/view"
        className="transform hover:scale-105 transition duration-300 ease-in-out p-2 border text-amber-400 border-amber-400 rounded"
      >
        <span className="mx-2">DOWNLOAD CV</span>
        <FontAwesomeIcon icon={faDownload} />
      </Link>
    </div>
  </div>
);

export default ContactInfo;
