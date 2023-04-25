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
  <div className="flex-col w-9/10 px-5 py-3 text-center text-sm">
    <div className="p-3">
      <img className="rounded-full" src="head-shot.jpg" alt="Profile Pic" />
    </div>
    <p className="font-normal m-1">Jonathan Kayizzi</p>
    <p className="m-1 font-thin">Full Stack Engineer</p>
    <ul className="flex text-amber-400 gap-2 justify-between p-1 text-base">
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
  </div>
);

export default AboutMe;
