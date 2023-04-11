import React from 'react';
import { useSelector } from 'react-redux';

const Skills = () => {
  const { skills } = useSelector((state) => state.skillsSl);

  return (
    <ul className="flex-col px-3 py-2">
      <h4 className="text-amber-400 text-base font-bold">Skills</h4>
      <li>
        <h5 className="text-amber-400 text-sm font-bold">Front End</h5>
        <ul className="text-sm pl-2">
          {skills.frontend.map((skill) => (
            <li className="my-2 flex-col" key={skill.name}>
              <p className="flex justify-between">
                <span>{skill.name}</span>
                <span>
                  {skill.level}
                  {' '}
                  Year
                  {skill.level > 1 ? 's' : ''}
                </span>
              </p>
              <div className={`h-px bg-amber-400 w-${skill.level}/5`} />
            </li>
          ))}
        </ul>
      </li>
      <li>
        <h5 className="text-amber-400 text-sm font-bold">Back End</h5>
        <ul className="text-sm pl-2">
          {skills.backend.map((skill) => (
            <li className="my-2 flex-col" key={skill.name}>
              <p className="flex justify-between">
                <span>{skill.name}</span>
                <span>
                  {skill.level}
                  {' '}
                  Year
                  {skill.level > 1 ? 's' : ''}
                </span>
              </p>
              <div className={`h-px bg-amber-400 w-${skill.level}/5`} />
            </li>
          ))}
        </ul>
      </li>
      <li>
        <h5 className="text-amber-400 text-sm font-bold">Other Languages</h5>
        <ul className="text-sm pl-2">
          {skills.languages.map((language) => (
            <li className="my-2 flex-col" key={language.name}>
              <p className="flex justify-between">
                <span>{language.name}</span>
                <span>
                  {language.level}
                  {' '}
                  Year
                  {language.level > 1 ? 's' : ''}
                </span>
              </p>
              <div className={`h-px bg-amber-400 w-${language.level}/5`} />
            </li>
          ))}
        </ul>
      </li>
      <li>
        <h5 className="text-amber-400 text-xs font-bold">Tools</h5>
        <ul className="text-xs pl-2">
          <li>
            {skills.tools.map((tool) => (
              <span key={tool}>{`${tool} | `}</span>
            ))}
          </li>
        </ul>
      </li>
      <li>
        <h5 className="text-amber-400 text-xs font-bold">
          Proffessional & Soft Skills
        </h5>
        <ul className="text-xs pl-2">
          <li>
            {skills.softskills.map((skill) => (
              <span key={skill}>{`${skill} | `}</span>
            ))}
          </li>
        </ul>
      </li>
      <li>
        <h5 className="text-amber-400 text-xs font-bold">Aviation Related</h5>
        <ul className="text-xs pl-2">
          <li>
            {skills.aviation.map((skill) => (
              <span key={skill}>{`${skill} | `}</span>
            ))}
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Skills;
