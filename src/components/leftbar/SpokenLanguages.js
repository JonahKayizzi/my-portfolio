import React from 'react';

const SpokenLanguages = () => (
  <ul className="flex-col px-3 py-2">
    <h4 className="text-amber-400 text-sm font-bold my-2">Languages</h4>
    <li className="flex-col text-xs pl-2 my-2">
      <p className="flex justify-between">
        <span>English</span>
        <span>Native</span>
      </p>
      <div className="h-px bg-amber-400 w-full" />
    </li>
    <li className="flex-col text-xs pl-2 my-2">
      <p className="flex justify-between">
        <span>Swahili</span>
        <span>Intermediate</span>
      </p>
      <div className="h-px bg-amber-400 w-1/2" />
    </li>
    <li className="flex-col text-xs pl-2 my-2">
      <p className="flex justify-between">
        <span>German</span>
        <span>Elementary</span>
      </p>
      <div className="h-px bg-amber-400 w-1/5" />
    </li>
  </ul>
);

export default SpokenLanguages;
