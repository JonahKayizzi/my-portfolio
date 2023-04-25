import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const History = () => {
  const { employments } = useSelector((state) => state.employmentsSl);
  return (
    <div>
      {employments.map((employment) => (
        <div
          key={employment}
          className="bg-black font-thin my-3 p-5 shadow-md shadow-black opacity-60"
        >
          <h2 className="text-xl my-4 text-left ml-4 flex justify-between">
            <Link className="text-amber-400 font-light" to={employment.link}>
              {employment.name}
            </Link>
            <p className="italic text-lg">{employment.location}</p>
          </h2>
          <ul className="flex justify-between text-sm">
            <li>
              <ul className="flex gap-2">
                <li className="font-light">{employment.role}</li>
                <li className="italic">{`(${employment.type})`}</li>
              </ul>
            </li>
            <li>
              <ul className="flex gap-2 italic text-sm">
                <li>{`${employment.start} - `}</li>
                <li>{`${employment.end},`}</li>
                <li>{employment.duration}</li>
              </ul>
            </li>
          </ul>
          <ul className="flex flex-col justify-around my-2 list-disc px-5 text-sm">
            {employment.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default History;
