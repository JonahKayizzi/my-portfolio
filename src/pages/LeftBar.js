import React from 'react';
import { useSelector } from 'react-redux';

const LeftBar = () => {
  const { skills } = useSelector((state) => state.skillsSl);
  const currentYear = new Date().getFullYear();
  const age = currentYear - 1990;
  return (
    <div className="w-1/5 bg-black">
      <div className="bio">
        <div className="profile-pic">
          <img src="head-shot.jpg" alt="Profile Pic" />
        </div>
        <p>Jonathan Kayizzi</p>
        <p>Software Engineer</p>
        <ul className="socials">
          <li>Github</li>
          <li>Facebook</li>
          <li>LinkedIn</li>
          <li>Youtube</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
      <ul className="contacts">
        <li>
          <p>
            <span>Contact:</span>
            <span>+256759223526</span>
          </p>
        </li>
        <li>
          <p>
            <span>Email:</span>
            <span>jonahkayizzi@gmail.com</span>
          </p>
        </li>
        <li>
          <p>
            <span>Age:</span>
            <span>{age}</span>
          </p>
        </li>
        <li>
          <p>
            <span>Residence:</span>
            <span>Kampala, Uganda</span>
          </p>
        </li>
        <li>
          <p>
            <span>Availability:</span>
            <span>
              <strong> Remote </strong>
              <em> & Relocation </em>
            </span>
          </p>
        </li>
      </ul>
      <ul className="skills">
        <h4>Skills</h4>
        <li>
          <h5>Front End</h5>
          <ul>
            {skills.frontend.map((skill) => (
              <li key={skill.name}>
                <span>{skill.name}</span>
                <span>
                  {skill.level}
                  {' '}
                  Years
                </span>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <h5>Back End</h5>
          <ul>
            {skills.backend.map((skill) => (
              <li key={skill.name}>
                <span>{skill.name}</span>
                <span>
                  {skill.level}
                  {' '}
                  Years
                </span>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <h5>Other Languages</h5>
          <ul>
            {skills.languages.map((language) => (
              <li key={language.name}>
                <span>{language.name}</span>
                <span>
                  {language.level}
                  {' '}
                  Years
                </span>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <h5>Tools</h5>
          <ul>
            <li>
              {skills.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </li>
          </ul>
        </li>
        <li>
          <h5>Proffessional & Soft Skills</h5>
          <ul>
            <li>
              {skills.softskills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </li>
          </ul>
        </li>
        <li>
          <h5>Aviation Related</h5>
          <ul>
            <li>
              {skills.aviation.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </li>
          </ul>
        </li>
      </ul>
      <ul className="languages">
        <h4>Languages</h4>
        <li>
          <span>English</span>
          <span>Native</span>
        </li>
        <li>
          <span>Swahili</span>
          <span>Intermediate</span>
        </li>
        <li>
          <span>German</span>
          <span>Elementary</span>
        </li>
      </ul>
    </div>
  );
};

export default LeftBar;
