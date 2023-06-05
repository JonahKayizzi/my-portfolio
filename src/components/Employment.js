import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const History = () => {
  const { employments } = useSelector((state) => state.employmentsSl);
  const [expandedEmployments, setExpandedEmployments] = useState([]);

  const toggleEmployment = (employmentId) => {
    if (expandedEmployments.includes(employmentId)) {
      setExpandedEmployments(
        expandedEmployments.filter((id) => id !== employmentId),
      );
    } else {
      setExpandedEmployments([...expandedEmployments, employmentId]);
    }
  };

  return (
    <div className="flex flex-wrap justify-left gap-1">
      <h3 className="py-2 font-extrabold place-self-start text-xl w-full bg-[rgb(25,25,25)]">
        Where I have worked
      </h3>
      {employments.map((employment) => (
        <div
          key={employment}
          className="bg-[rgb(25,25,25)] font-thin lg:my-3 my-1 p-2 w-full border-t border-r border-amber-400"
        >
          <h2 className="text-xl my-4 text-left ml-4 flex justify-between">
            {employment.link ? (
              <button
                className="text-amber-400 font-light"
                target="_blank"
                type="button"
                onClick={() => toggleEmployment(employment.id)}
              >
                {employment.name}
              </button>
            ) : (
              <p className="text-amber-400 font-light">{employment.name}</p>
            )}
            <p className="italic text-lg">{employment.location}</p>
          </h2>
          {expandedEmployments.includes(employment.id) && (
            <>
              <div>
                <p>
                  Role:
                  {employment.role}
                </p>
                <p>
                  Type:
                  {employment.type}
                </p>
                <p>
                  Start:
                  {employment.start}
                </p>
                <p>
                  End:
                  {employment.end}
                </p>
                <p>
                  Duration:
                  {employment.duration}
                </p>
              </div>
              <ul className="flex flex-col justify-around my-2 list-disc px-5 text-sm">
                {employment.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default History;
