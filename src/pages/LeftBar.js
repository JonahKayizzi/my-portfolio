import React from 'react';
import { useSelector } from 'react-redux';

const LeftBar = () => {
  const skills = useSelector((state) => state.skillsSl);
  console.log(skills);
  const currentYear = new Date().getFullYear();
  const age = currentYear - 1990;
  return (
    <div className="left-bar">
      <div className="bio">
        <div className="profile-pic">
          <img src="" alt="Profile Pic" />
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
            <li>HTML</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default LeftBar;
