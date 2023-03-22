import React from 'react';
import { useSelector } from 'react-redux';

const Skills = () => {
  const { skills } = useSelector((state) => state.skillsSl);

  return (
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
  );
};

export default Skills;
