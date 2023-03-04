import React from 'react';

const LeftBar = () => (
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
          <span>33</span>
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
          <span>+Remote & Relocation</span>
        </p>
      </li>
    </ul>
  </div>
);

export default LeftBar;
