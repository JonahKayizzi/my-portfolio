import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const Cards = ({ items }) => {
  const [numItems, setNumItems] = useState(2);
  const [modalStates, setModalStates] = useState(items.map(() => false));

  const handleLoadMore = () => {
    setNumItems(numItems + 2);
  };

  const handleModal = (index) => {
    setModalStates((prev) => prev.map((state, i) => (i === index ? !state : state)));
  };

  return (
    <div className="flex flex-wrap mb-10 justify-center">
      {items.slice(0, numItems).map((item, index) => (
        <button
          className="w-1/2 p-2 shadow shadow-black transform hover:scale-105 transition duration-300 ease-in-out"
          type="button"
          onClick={() => handleModal(index)}
          key={item.rank}
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div
              className="w-full h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.images})` }}
            />
            <div className="p-4">
              <h1 className="text-md font-bold text-gray-800">
                {item.name.length > 30
                  ? `${item.name.slice(0, 30)}...`
                  : item.name}
              </h1>
              <p className="mt-2 text-gray-600 text-sm">
                {item.description.length > 100
                  ? `${item.description.slice(0, 100)}...`
                  : item.description}
              </p>
              <ul className="flex justify-around flex-wrap gap-2 mt-2">
                {item.tools.slice(0, 5).map((tool) => (
                  <li key={tool}>
                    <span className="text-xs text-gray-600 m-0 p-1 bg-gray-200 rounded-md">{`${tool}`}</span>
                  </li>
                ))}
                {item.tools.length > 5 && (
                  <li>
                    <span className="text-xs text-gray-600 m-0 p-1 bg-gray-200 rounded-md">
                      {`+${item.tools.length - 5}`}
                    </span>
                  </li>
                )}
              </ul>
              <div className="flex justify-around items-center mt-4 text-xs">
                <Link
                  to={item.demo}
                  className="bg-black hover:bg-amber-500 hover:text-black text-white py-1 px-2 rounded-sm m-2"
                >
                  Live Project
                </Link>
                <Link
                  to={item.source}
                  className="bg-black hover:bg-amber-500 hover:text-black text-white py-1 px-2 rounded-sm m-2"
                >
                  View Source
                </Link>
              </div>
            </div>
          </div>
          <Modal
            item={item}
            isModalOpen={modalStates[index]}
            handleModal={() => handleModal(index)}
          />
        </button>
      ))}
      {numItems < items.length ? (
        <button
          onClick={handleLoadMore}
          className="transform hover:scale-105 transition duration-300 ease-in-out bg-cyan-900 hover:bg-amber-400 hover:text-cyan-900 text-amber-400 font-bold py-2 px-4 rounded-md p-3 my-10 px-6"
          type="button"
        >
          LOAD MORE . . .
        </button>
      ) : null}
    </div>
  );
};

Cards.propTypes = {
  items: PropTypes.isRequired,
};

export default Cards;
