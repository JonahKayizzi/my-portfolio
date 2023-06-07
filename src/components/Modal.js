import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Modal = ({ item, handleClose }) => (
  <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 z-50">
    <div className=" flex flex-col items-center p-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-1/2 w-11/12 h-5/6 bg-white shadow-lg">
      <div
        className="w-full h-72 bg-contain bg-center bg-white"
        style={{
          backgroundImage: `url(${item.images})`,
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <button
          type="button"
          className="absolute right-0 top-0"
          onClick={handleClose}
        >
          <span className="text-xl text-white hover:bg-amber-500 m-0 py-1 px-2 bg-amber-400">
            X
          </span>
        </button>
      </div>
      <div className="p-4 px-12">
        <div className="flex justify-between items-center">
          <h1 className="text-md font-extrabold text-gray-800 w-2/3">
            {item.name}
          </h1>
          <div className="flex flex-col items-center mt-1 text-xs">
            {item.demo && (
              <Link
                to={item.demo}
                target="_blank"
                className="bg-amber-400 hover:bg-amber-500 hover:text-black text-white py-2 px-8 m-1"
              >
                Live Project
              </Link>
            )}
            <Link
              to={item.source}
              target="_blank"
              className="bg-amber-400 hover:bg-amber-500 hover:text-black text-white py-2 px-8 m-1"
            >
              View Source
            </Link>
          </div>
        </div>

        <ul className="flex justify-start flex-wrap gap-2 mt-2">
          {item.tools.map((tool) => (
            <li key={tool}>
              <span className="text-xs text-white m-0 p-1 bg-gray-600">
                {tool}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-2 text-gray-600 text-xs">{item.description}</p>
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Modal;
