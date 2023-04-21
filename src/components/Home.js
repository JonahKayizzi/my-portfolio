import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <div className="bg-black my-3 p-5 shadow-md shadow-black opacity-60">
      <h2 className="text-xl font-thin my-4 text-right mr-4">Strong Skills</h2>
      <ul className="flex justify-around my-2">
        <li className="w-1/3 flex items-center justify-around gap-2 border border-amber-800">
          <img className="w-1/3" src="react.png" alt="react" />
        </li>
        <li className="w-1/3 flex items-center justify-around border border-amber-800">
          <img className="w-1/3" src="java.png" alt="redux" />
        </li>
        <li className="w-1/3 flex items-center justify-around border border-amber-800">
          <img className="w-1/3" src="rails.png" alt="redux" />
        </li>
      </ul>
      <ul className="flex justify-around my-2 text-xs font-thin">
        <li className="flex justify-around gap-2 items-center text-amber-400 m-0 p-1 border border-amber-800 rounded-md">
          <FontAwesomeIcon icon={faStar} />
          REST API
        </li>
        <li className="flex justify-around gap-2 items-center text-amber-400 m-0 p-1 border border-amber-800 rounded-md">
          <FontAwesomeIcon icon={faStar} />
          Microservices
        </li>
        <li className="flex justify-around gap-2 items-center text-amber-400 m-0 p-1 border border-amber-800 rounded-md">
          <FontAwesomeIcon icon={faStar} />
          SQL
        </li>
        <li className="flex justify-around gap-2 items-center text-amber-400 m-0 p-1 border border-amber-800 rounded-md">
          <FontAwesomeIcon icon={faStar} />
          Git
        </li>
        <li className="flex justify-around gap-2 items-center text-amber-400 m-0 p-1 border border-amber-800 rounded-md">
          <FontAwesomeIcon icon={faStar} />
          Redux
        </li>
        <li className="flex justify-around gap-2 items-center text-amber-400 m-0 p-1 border border-amber-800 rounded-md">
          <FontAwesomeIcon icon={faStar} />
          Remote collaboration
        </li>
      </ul>
    </div>
    <div className="bg-black my-3 p-5 shadow-md shadow-black opacity-60">
      <h2 className="text-xl font-thin my-4 text-left ml-4">
        Currently Working On
      </h2>
      <ul className="flex justify-around my-2">
        <li className="w-1/3 flex flex-col gap-2 items-center bg-black shadow shadow-white p-2 m-2">
          <p className="text-center font-thin text-sm">
            <span>Air Navigation Services - Safety Management Sytems App</span>
            <br />
            <span className="italic">
              PHP to Java/React microservices migration
            </span>
          </p>
          <div className="flex justify-around">
            <img className="w-1/6" src="java.png" alt="react" />
            <img className="w-1/6" src="react.png" alt="react" />
          </div>
          <Link
            className="text-amber-400 text-sm font-thin"
            to="https://github.com/JonahKayizzi/ANS-SMS-Java-React"
          >
            View Repo
          </Link>
        </li>
        <li className="w-1/3 flex flex-col gap-2 items-center bg-black shadow shadow-white p-2 m-2">
          <p className="text-center font-thin text-sm">
            <span>Live Chat App</span>
            <br />
            <span className="italic">Rails & React</span>
          </p>
          <div className="flex justify-around">
            <img className="w-1/6" src="rails.png" alt="react" />
            <img className="w-1/6" src="react.png" alt="react" />
          </div>
          <Link className="text-amber-400 text-sm font-thin" to="/projects/1">
            View Repo
          </Link>
        </li>
        <li className="w-1/3 flex flex-col gap-2 items-center bg-black shadow shadow-white p-2 m-2">
          <p className="text-center font-thin text-sm">
            <span>
              B2B networking App for micro, small & medium enterprises
            </span>
            <br />
            <span className="italic">PHP to Rails migration</span>
          </p>
          <div className="flex justify-around">
            <img className="w-1/6" src="rails.png" alt="react" />
            <img className="w-1/6" src="react.png" alt="react" />
          </div>
          <Link
            className="text-amber-400 text-sm font-thin"
            to="https://github.com/JonahKayizzi/Yunga-React-Rails-BackEnd"
          >
            View Repo
          </Link>
        </li>
      </ul>
    </div>
    <div className="bg-black my-5 p-5">
      <p>Learning goals</p>
    </div>
    <div className="bg-black my-5 p-5">
      <p>Outside code</p>
      <span>Mentorship</span>
      <span>Aviation</span>
    </div>
    <div className="bg-black my-5 p-5">
      <p>Industries</p>
    </div>
  </div>
);

export default Home;
