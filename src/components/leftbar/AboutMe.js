import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import {
  faHouse,
  faMobile,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const AboutMe = () => (
  <div className="w-9/10 p-5 text-center text-sm bg-teal-900 rounded-md shadow-md shadow-black">
    <div className="flex items-center justify-between">
      <ul className="w-1/5 flex flex-col text-amber-400 gap-5 justify-between p-1 text-base">
        <li>
          <Link to="https://github.com/JonahKayizzi">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/jonathan-kayizzi/">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </li>
        <li>
          <Link to="https://www.youtube.com/@jonathankayizzi1241">
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
        </li>
        <li>
          <Link to="https://twitter.com/JonahKayizzi">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
        </li>
        <li>
          <Link to="https://www.instagram.com/jonahkayizzi/">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </li>
      </ul>
      <div className="w-4/5">
        <ul className="flex-col text-xs font-thin px-3 py-2">
          <li>
            <p className="flex justify-end gap-3 my-2">
              <FontAwesomeIcon icon={faHouse} />
              <span>Kampala, Uganda</span>
            </p>
          </li>
          <li>
            <p className="flex justify-end gap-3 my-2">
              <FontAwesomeIcon icon={faMobile} />
              <span>+256759223526</span>
            </p>
          </li>
          <li>
            <p className="flex justify-end gap-3 my-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>jonahkayizzi@gmail.com</span>
            </p>
          </li>
        </ul>
        <div className="p-3">
          <img className="rounded-full" src="head-shot.jpg" alt="Profile Pic" />
        </div>
      </div>
    </div>
  </div>
);

export default AboutMe;
