import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const History = () => {
  const { employments } = useSelector((state) => state.employmentsSl);
  const [expandedEmployments, setExpandedEmployments] = useState([1]);

  const toggleEmployment = (employmentId) => {
    if (expandedEmployments.includes(employmentId)) {
      setExpandedEmployments(
        expandedEmployments.filter((id) => id !== employmentId)
      );
    } else {
      setExpandedEmployments([...expandedEmployments, employmentId]);
    }
  };

  return (
    <div className="flex flex-wrap justify-left gap-1 px-5">
      <h3 className="py-2 font-extrabold place-self-start text-xl w-full bg-[rgb(25,25,25)]">
        Where I have worked
      </h3>
      {employments.map((employment) => (
        <div
          key={employment}
          className="bg-[rgb(25,25,25)] font-thin lg:my-3 my-1 p-2 w-full border-l border-amber-400 flex"
        >
          <h2 className="text-lg my-2 text-left ml-4 w-1/3">
            <button
              className="text-amber-400 font-light"
              type="button"
              onClick={() => toggleEmployment(employment.id)}
            >
              {employment.name}
            </button>
          </h2>
          {expandedEmployments.includes(employment.id) && (
            <div className="text-gray-400 text-sm w-2/3">
              <p className="flex gap-2 text-lg text-white my-1">
                <span className="font-bold">{employment.role}</span>
                <span>
                  {employment.link ? (
                    <Link
                      className="text-amber-400 font-light"
                      target="_blank"
                      to={employment.link}
                    >
                      {`@${employment.name}`}
                    </Link>
                  ) : (
                    <span className="text-amber-400 font-light">
                      {employment.name}
                    </span>
                  )}
                </span>
              </p>
              <p className="my-1">
                <span>{`${employment.type}, `}</span>
                <span className="italic justify-self-end">
                  {employment.location}
                </span>
              </p>
              <p className="my-1">
                <span>{`${employment.start} - `}</span>
                <span>{`${employment.end}, `}</span>
                <span>{employment.duration}</span>
              </p>
              <ul className="flex flex-col justify-around my-2 list-disc px-5">
                {employment.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default History;
