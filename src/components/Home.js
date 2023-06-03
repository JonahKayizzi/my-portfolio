import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlane,
  faBuildingColumns,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const { skills } = useSelector((state) => state.skillsSl);

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap bg-[rgb(25,25,25)]">
        <h3 className="py-2 font-extrabold place-self-start text-xl w-full">
          My Skills & Learning Goals
        </h3>
        <div className="md:my-2 my-1 p-1 rounded md:w-5/12 w-full">
          <h4 className="text-md font-thin my-1 text-gray-300">
            Currently working on:
          </h4>
          <ul className="flex justify-around my-2 pb-4 gap-6 text-gray-400">
            <li className="w-1/2 flex items-center gap-2 p-1 m-1">
              <Link
                className="text-black font-bold text-center hover:bg-amber-400 hover:text-white h-full px-1 bg-amber-500 text-xs font-thin w-1/4"
                target="_blank"
                to="https://github.com/JonahKayizzi/ANS-SMS-Java-React"
              >
                View Repo
              </Link>
              <p className="font-thin text-xs grow">
                <span>ANS - Safety Management Sytems App</span>
                <br />
                <span className="italic">PHP to Java/React migration</span>
              </p>
            </li>
            <li className="w-1/2 flex items-center gap-2 p-1 m-1">
              <Link
                className="text-black font-bold text-center hover:bg-amber-400 hover:text-white h-full px-1 bg-amber-500 text-xs font-thin w-1/4"
                to="https://github.com/JonahKayizzi/Yunga-React-Rails-BackEnd"
                target="_blank"
              >
                View Repo
              </Link>
              <p className="font-thin text-xs grow">
                <span>
                  B2B networking App for micro, small & medium enterprises
                </span>
                <br />
                <span className="italic">PHP to Rails migration</span>
              </p>
            </li>
          </ul>
          <h4 className="text-md font-thin my-1 text-gray-300">
            Next learning goals:
          </h4>
          <ul className="text-gray-400 text-xs flex gap-3 m-1 p-1">
            <li>web3</li>
            <li>CI/CD</li>
            <li>Cloud Development</li>
          </ul>
        </div>
        <div className="md:my-2 pl-8 my-1 p-1 md:w-1/2 w-full">
          <ul className="text-xs text-gray-400">
            <li className="border-b border-gray-400 mb-4">
              <h4 className="text-lg font-semibold my-4mr-4 text-gray-300">
                Languages
              </h4>
              <ul className="flex flex-col gap-2 justify-start my-4">
                <li className="flex justify-start gap-1">
                  <ul className="flex justify-start gap-4">
                    <li className="font-bold text-sm">Front-end:</li>
                    {skills.frontend.map((skill) => (
                      <li key={skill.name}>
                        <p className="flex justify-between">
                          <span>{skill.name}</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="flex justify-start gap-1">
                  <ul className="flex justify-start gap-4">
                    <li className="font-bold text-sm">Backend-end:</li>
                    {skills.backend.map((skill) => (
                      <li key={skill.name}>
                        <p className="flex justify-between">
                          <span>{skill.name}</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="flex justify-start gap-1">
                  <ul className="flex justify-start gap-4">
                    <li className="font-bold text-sm">Frameworks:</li>
                    {skills.frameworks.map((skill) => (
                      <li key={skill.name}>
                        <p className="flex justify-between">
                          <span>{skill.name}</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>
            <li className="border-b border-gray-400 mb-4">
              <h4 className="text-lg font-semibold my-4mr-4 text-gray-300">
                Tools
              </h4>
              <ul className="flex justify-around my-2">
                <li>
                  {skills.tools.map((skill) => (
                    <span key={skill}>{`${skill} | `}</span>
                  ))}
                </li>
              </ul>
            </li>
            <li>
              <h4 className="text-lg font-semibold my-4mr-4 text-gray-300">
                Proffesional Skills
              </h4>
              <ul className="flex justify-around my-2">
                <li>
                  {skills.softskills.map((skill) => (
                    <span key={skill}>{`${skill} | `}</span>
                  ))}
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="transform hover:scale-105 transition duration-300 ease-in-out bg-emerald-900 md:my-2 my-1 p-5 rounded shadow-md shadow-black md:w-2/5 w-full">
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
        <div className="transform hover:scale-105 transition duration-300 ease-in-out bg-cyan-900 md:my-2 my-1 p-5 rounded shadow-md shadow-black md:w-11/12 w-full">
          <h2 className="text-xl font-thin my-4 text-left ml-4">
            Besides Code
          </h2>
          <div className="flex flex-wrap">
            <div className="xl:w-1/2 w-full">
              <h3 className="text-amber-400 text-sm font-thin">Mentorship</h3>
              <ul className="flex justify-around gap-2 my-2">
                <li className="w-1/2 flex flex-col gap-2 items-center justify-around ">
                  <img
                    className="w-full rounded-lg"
                    src="mentor2.jpg"
                    alt="mentor2"
                  />
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
                      &ldquo;advice and tips on how to maintain motivation and
                      longevity in their careers&rdquo;
                    </span>
                    <br />
                    <br />
                    <span>
                      &ldquo;propose improvements to code organization to
                      improve code quality and overall performance&rdquo;
                    </span>
                  </h4>
                </li>
              </ul>
            </div>

            <div className="xl:w-1/2 w-full">
              <h3 className="text-amber-400 text-sm font-thin mt-4">
                Aviation
              </h3>
              <ul className="flex justify-around gap-2 my-2">
                <li className="w-3/5 flex flex-col gap-2 items-center justify-around gap-2">
                  <img
                    className="w-full rounded-lg"
                    src="aviation.png"
                    alt="mentor1"
                  />
                </li>
                <li className="w-1/2 flex flex-col gap-2 items-center justify-around ">
                  <h4 className="text-white text-sm font-thin italic">
                    <span>
                      &ldquo;profficient in aeronautical information
                      management&rdquo;
                    </span>
                    <br />
                    <br />
                    <span>
                      &ldquo;experience in cartography, flight plan validation,
                      notam management, flight cordination, publication of
                      aeronautical products and maitaining &rdquo;
                    </span>
                    <br />
                    <br />
                    <span>
                      &ldquo;maintainance of aeronautical databases and AIXM
                      dataset management&rdquo;
                    </span>
                  </h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
