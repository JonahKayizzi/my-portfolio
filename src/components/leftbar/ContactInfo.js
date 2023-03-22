import React from 'react';

const ContactInfo = () => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - 1990;

  return (
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
  );
};

export default ContactInfo;
