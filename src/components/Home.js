import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const { skills } = useSelector((state) => state.skillsSl);

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap">
        <h3 className="py-2 flex font-extrabold place-self-start text-xl w-full bg-[rgb(25,25,25)]">
          <span className="lg:w-1/2 w-2/3">My Skills & Learning Goals</span>
          <span className="bottom-0 left-0 w-full h-0.5 bg-amber-500 mt-4" />
        </h3>
        <div className="lg:my-2 my-1 p-3 rounded lg:w-5/12 w-full bg-[rgb(25,25,25)] lg:order-1 order-2">
          <h4 className="text-md font-thin my-1 text-gray-300">
            Currently working on:
          </h4>
          <ul className="flex flex-wrap justify-start my-2 pb-4 gap-2 text-gray-400">
            <li className="lg:w-5/12 w-full flex items-center gap-2 p-1 m-1">
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
            <li className="lg:w-5/12 w-full flex items-center gap-2 p-1 m-1">
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
            <li className="w-full flex items-center gap-2 p-1 m-1">
              <Link
                className="text-black font-bold text-center hover:bg-amber-400 hover:text-white h-full px-1 bg-amber-500 text-xs font-thin w-1/4"
                target="_blank"
                to="https://github.com/JonahKayizzi/ANS-SMS-Java-React"
              >
                View Repo
              </Link>
              <p className="font-thin text-xs grow">
                <span>
                  To Do on Steroids - Enhancing a TO DO app with Google Calender
                  API integration, TypeScript & React Native
                </span>
                <br />
                <span className="italic">
                  React, React Native, TypeScript, Google Calendar API
                </span>
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
        <div className="lg:my-2 lg:pl-8 pl-2 my-1 p-1 lg:w-1/2 w-full bg-[rgb(25,25,25)] order-1">
          <ul className="text-xs text-gray-400">
            <li className="border-b border-gray-400 lg:mb-4 mb-2">
              <h4 className="text-lg font-semibold lg:my-4 my-1 mr-4 text-gray-300">
                Languages
              </h4>
              <ul className="flex flex-col lg:gap-2 gap-1 justify-start lg:my-4 my-2">
                <li className="flex justify-start gap-1">
                  <ul className="flex justify-start lg:gap-4 gap-2">
                    <li className="font-bold text-sm">Front-end:</li>
                    {skills.frontend.map((skill) => (
                      <li key={skill.name}>
                        <p className="flex lg:justify-between justify-start">
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
        <div className="lg:my-2 my-1 lg:p-5 p-2 rounded lg:w-11/12 w-full order-2">
          <div className="flex lg:flex-row flex-col lg:gap-8 gap-2">
            <div className="lg:w-1/2 w-full bg-[rgb(25,25,25)]">
              <div
                className="w-full h-72 bg-contain bg-center"
                style={{
                  backgroundImage: "url('mentor2.jpg')",
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="lg:p-6 p-2 bg-gradient-to-b from-gray-400 to-transparent flex-col">
                  <h3 className="text-white text-xl font-bold">Mentorship</h3>
                  <ul className="flex justify-start flex-wrap gap-2 mt-2">
                    {skills.mentorship.map((tool) => (
                      <li key={tool}>
                        <span className="text-xs text-white m-0 p-1 bg-gray-600">{`${tool}`}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full bg-[rgb(25,25,25)]">
              <div
                className="w-full h-72 bg-contain bg-center"
                style={{
                  backgroundImage: "url('aviation.png')",
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="lg:p-6 p-2 bg-gradient-to-b from-gray-400 to-transparent flex-col">
                  <h3 className="text-white text-xl font-bold">
                    Aeronautical Information Systems
                  </h3>
                  <ul className="flex justify-start flex-wrap gap-2 mt-2">
                    {skills.aviation.map((tool) => (
                      <li key={tool}>
                        <span className="text-xs text-white m-0 p-1 bg-gray-600">{`${tool}`}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
