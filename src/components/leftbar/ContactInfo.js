import React from 'react';

const ContactInfo = () => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - 1990;

  return (
    <ul className="flex-col text-xs font-thin px-3 py-2">
      <li>
        <p className="flex justify-between my-2">
          <span className="text-amber-400">Contact:</span>
          <span>+256759223526</span>
        </p>
      </li>
      <li>
        <p className="flex justify-between my-2">
          <span className="text-amber-400">Email:</span>
          <span>jonahkayizzi@gmail.com</span>
        </p>
      </li>
      <li>
        <p className="flex justify-between my-2">
          <span className="text-amber-400">Age:</span>
          <span>{age}</span>
        </p>
      </li>
      <li>
        <p className="flex justify-between my-2">
          <span className="text-amber-400">Residence:</span>
          <span>Kampala, Uganda</span>
        </p>
      </li>
      <li>
        <p className="flex justify-between my-2">
          <span className="text-amber-400">Availability:</span>
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
