import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const History = () => {
  const { employments } = useSelector((state) => state.employmentsSl);
  return (
    <div className="flex flex-wrap justify-left gap-1">
      {employments.map((employment) => (
        <div
          key={employment}
          className="bg-cyan-900 font-thin lg:my-3 my-1 p-2 shadow-md shadow-black rounded-md w-full border-t border-r border-amber-400"
        >
          <h2 className="text-xl my-4 text-left ml-4 flex justify-between">
            {employment.link ? (
              <Link
                className="text-amber-400 font-light"
                to={employment.link}
                target="_blank"
              >
                {employment.name}
              </Link>
            ) : (
              <p className="text-amber-400 font-light">{employment.name}</p>
            )}
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
