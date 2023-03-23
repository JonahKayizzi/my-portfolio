import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons';

const Banner = () => (
  <div className="bg-black flex justify-between items-center gap-3 p-5">
    <div className="w-3/5">
      <h1 className="font-bold text-3xl text-center my-2">
        <p>I am Jonathan Kayizzi</p>
        <p>
          <span className="text-amber-400 mr-2">Full Stack</span>
          <span>Engineer</span>
        </p>
      </h1>
      <p className="text-xs text-center my-2">
        Full Stack Engineer with 3 years of experience in building web
        applications. I have worked on 20+ projects using React, Redux, Node,
        Ruby on Rails, and PostgreSQL. I am passionate about building scalable
        and maintainable applications using micro services and REST APIs. I have
        6+ years of industrial experience in Aviation, 1 year in Banking and 1
        year in Telecommunications
      </p>
      <div className="flex justify-around text-black font-bold text-xs my-5">
        <Link
          to="mailto:jonahkayizzi@gmail.com?subject=Available for an opportunity?&body=Hi Jonathan,%20I%20would%20like%20to%20get%20to%20contact%20you%20regarding."
          className="p-2 bg-amber-400 rounded"
        >
          <span className="mx-2">CONTACT ME</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
        <Link
          to="https://drive.google.com/file/d/1MgIsQ9KdpdOnkUlw4XI4fd1bNPscG-qI/view"
          target="_blank"
          className="p-2 bg-amber-400 rounded"
        >
          <span className="mx-2">DOWNLOAD CV</span>
          <FontAwesomeIcon icon={faDownload} />
        </Link>
      </div>
    </div>
    <div className="w-2/5">
      <img src="jk.png" alt="Banner" />
    </div>
  </div>
);

export default Banner;
