import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faPlane,
  faBuildingColumns,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
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
      <h2 className="text-xl font-thin my-4 text-right mr-4">
        Next Learning Goals
      </h2>
      <ul className="flex justify-around gap-2 my-2">
        <li className="w-1/3 flex flex-col gap-2 items-center justify-around gap-2">
          <img
            className="w-full rounded-full shadow shadow-white"
            src="web3.png"
            alt="react"
          />
          <h3 className="text-amber-400 text-sm font-thin">web3</h3>
        </li>
        <li className="w-1/3 flex flex-col gap-2 items-center justify-around ">
          <img
            className="w-full rounded-full shadow shadow-white"
            src="cicd.png"
            alt="redux"
          />
          <h3 className="text-amber-400 text-sm font-thin">CI/CD tools</h3>
        </li>
        <li className="w-1/3 flex flex-col gap-2 items-center justify-around ">
          <img
            className="w-full rounded-full shadow shadow-white"
            src="clouddev.png"
            alt="redux"
          />
          <h3 className="text-amber-400 text-sm font-thin">
            Developing Cloud Solutions
          </h3>
        </li>
      </ul>
    </div>
    <div className="bg-black my-5 p-5">
      <h2 className="text-xl font-thin my-4 text-left ml-4">Besides Code</h2>
      <h3 className="text-amber-400 text-sm font-thin">Mentorship</h3>
      <ul className="flex justify-around gap-2 my-2">
        <li className="w-3/5 flex flex-col gap-2 items-center justify-around ">
          <img className="w-full rounded-lg" src="mentor2.jpg" alt="mentor2" />
        </li>
        <li className="w-2/5 flex flex-col gap-2 items-center justify-around gap-2">
          <h4 className="text-white text-sm font-thin italic">
            <span>
              &ldquo;technical support to Junior developers through code
              reviews&rdquo;
            </span>
            <br />
            <br />
            <span>
              &ldquo;advice and tips on how to maintain motivation and longevity
              in their careers&rdquo;
            </span>
            <br />
            <br />
            <span>
              &ldquo;propose improvements to code organization to improve code
              quality and overall performance&rdquo;
            </span>
          </h4>
        </li>
      </ul>
      <h3 className="text-amber-400 text-sm font-thin mt-4">Aviation</h3>
      <ul className="flex justify-around gap-2 my-2">
        <li className="w-2/5 flex flex-col gap-2 items-center justify-around ">
          <h4 className="text-white text-sm font-thin italic">
            <span>
              &ldquo;profficient in aeronautical information management&rdquo;
            </span>
            <br />
            <br />
            <span>
              &ldquo;experience in cartography, flight plan validation, notam
              management, flight cordination, publication of aeronautical
              products and maitaining &rdquo;
            </span>
            <br />
            <br />
            <span>
              &ldquo;maintainance of aeronautical databases and AIXM dataset
              management&rdquo;
            </span>
          </h4>
        </li>
        <li className="w-3/5 flex flex-col gap-2 items-center justify-around gap-2">
          <img className="w-full rounded-lg" src="aviation.png" alt="mentor1" />
        </li>
      </ul>
    </div>
    <div className="bg-black my-5 p-5">
      <h2 className="text-xl font-thin my-4 text-right mr-4">
        Industrial Experience
      </h2>
      <ul className="flex justify-around gap-2 my-2">
        <li className="text-amber-400 w-1/3 flex flex-col gap-2 items-center justify-around gap-2">
          <FontAwesomeIcon icon={faPlane} size="2x" />

          <p className="font-thin text-sm">Aviation</p>
        </li>
        <li className="text-amber-400 w-1/3 flex flex-col gap-2 items-center justify-around gap-2">
          <FontAwesomeIcon icon={faBuildingColumns} size="2x" />
          <p className="font-thin text-sm">Banking</p>
        </li>
        <li className="text-amber-400 w-1/3 flex flex-col gap-2 items-center justify-around gap-2">
          <FontAwesomeIcon icon={faPhone} size="2x" />
          <p className="font-thin text-sm">Telecom</p>
        </li>
      </ul>
    </div>
  </div>
);

export default Home;
