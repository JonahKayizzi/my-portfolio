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

const AboutMe = () => (
  <div className="w-1/3 p-5 text-center text-sm">
    <div className="flex items-center justify-between">
      <div className="w-4/5">
        <div className="p-3">
          <img className="rounded-full" src="head-shot.jpg" alt="Profile Pic" />
        </div>
      </div>
      <ul className="w-1/5 flex flex-col text-amber-400 gap-3 justify-between p-1 text-xl">
        <li>
          <Link to="https://github.com/JonahKayizzi" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com/in/jonathan-kayizzi/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </li>
        <li>
          <Link
            to="https://www.youtube.com/@jonathankayizzi1241"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
        </li>
        <li>
          <Link to="https://twitter.com/JonahKayizzi" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
        </li>
        <li>
          <Link to="https://www.instagram.com/jonahkayizzi/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default AboutMe;
