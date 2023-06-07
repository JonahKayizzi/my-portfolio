import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Modal = ({ item, handleClose }) => {
  console.log(item);
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 z-50">
      <div className=" flex flex-col items-center p-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-3/4 w-11/12  h-11/12 bg-white rounded-lg shadow-lg">
        <button
          type="button"
          className="absolute left-full"
          onClick={handleClose}
        >
          <span className="text-2xl text-amber-400 hover:bg-teal-900 m-0 px-1 bg-cyan-900">
            X
          </span>
        </button>
        <img className="w-2/3 " src={item.images} alt={item.images} />
        <div className="p-4">
          <h1 className="text-md font-bold text-gray-800">{item.name}</h1>
          <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
          <ul className="flex justify-around flex-wrap gap-2 mt-2">
            {item.tools.map((tool) => (
              <li key={tool}>
                <span className="text-xs text-gray-600 m-0 p-1 bg-gray-200 rounded-md">
                  {tool}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex justify-around items-center mt-4 text-xs">
            {item.demo && (
              <Link
                to={item.demo}
                target="_blank"
                className="bg-black hover:bg-amber-500 hover:text-black text-white py-1 px-2 rounded-sm m-2"
              >
                Live Project
              </Link>
            )}
            <Link
              to={item.source}
              target="_blank"
              className="bg-black hover:bg-amber-500 hover:text-black text-white py-1 px-2 rounded-sm m-2"
            >
              View Source
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Modal;
