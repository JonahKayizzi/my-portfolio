import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const History = () => {
  const { employments } = useSelector((state) => state.employmentsSl);
  const [expandedEmploymentId, setExpandedEmploymentId] = useState(1);

  const toggleEmployment = (employmentId) => {
    if (employmentId === expandedEmploymentId) {
      setExpandedEmploymentId(null);
    } else {
      setExpandedEmploymentId(employmentId);
    }
  };

  return (
    <div className="flex flex-wrap justify-left gap-1 px-5">
      <h3 className="py-2 flex font-extrabold place-self-start text-xl w-full bg-[rgb(25,25,25)]">
        <span className="lg:w-1/2 w-2/3">Where I have worked</span>
        <span className="bottom-0 left-0 w-full h-0.5 bg-amber-500 mt-4" />
      </h3>

      {employments.map((employment) => (
        <div
          key={employment}
          className={`bg-[rgb(25,25,25)] font-thin lg:my-3 my-1 p-2 w-full ${
            expandedEmploymentId === employment.id
              ? 'border-l-2 border-amber-400'
              : 'border-l-2 border-amber-500'
          } flex`}
          style={{
            transition: 'height 1s ease-in-out',
            height: expandedEmploymentId === employment.id ? 'auto' : '50px',
            overflow: 'hidden',
          }}
        >
          <h2 className="lg:text-lg text:sm my-2 text-left ml-4 w-1/3">
            <button
              className={`text-amber-400 font-light h-full w-11/12 p-2 ${
                expandedEmploymentId === employment.id
                  ? 'text-white bg-amber-400 transition duration-300 ease-in-out'
                  : 'text-amber-500'
              }`}
              type="button"
              onClick={() => toggleEmployment(employment.id)}
            >
              {employment.name}
            </button>
          </h2>
          {expandedEmploymentId === employment.id && (
            <div className="text-gray-400 lg:text-sm text-xs w-2/3">
              <p className="flex gap-2 lg:text-lg text-md text-white my-1">
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
