import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const Cards = ({ items }) => {
  const [numItems, setNumItems] = useState(4);
  const [modalStates, setModalStates] = useState(items.map(() => false));

  const handleLoadMore = () => {
    setNumItems(numItems + 4);
  };

  const handleModal = (index) => {
    setModalStates((prev) => prev.map((state, i) => (i === index ? !state : state)));
  };

  return (
    <div className="flex flex-wrap mb-10 justify-start">
      {items.slice(0, numItems).map((item, index) => (
        <button
          className="md:w-1/2 w-full p-2 transform hover:scale-105 transition duration-300 ease-in-out"
          type="button"
          onClick={() => handleModal(index)}
          key={item.rank}
        >
          <div className="overflow-hidden">
            <div
              className="w-full h-72 bg-contain bg-center bg-white"
              style={{
                backgroundImage: `url(${item.images})`,
                backgroundSize: '80%',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="p-6 bg-gradient-to-b from-gray-400 to-transparent flex-col">
                <h1 className="text-xl font-bold text-white text-left">
                  {item.name.length > 30
                    ? `${item.name.slice(0, 30)}...`
                    : item.name}
                </h1>
                <ul className="flex justify-start flex-wrap gap-2 mt-2">
                  {item.tools.slice(0, 3).map((tool) => (
                    <li key={tool}>
                      <span className="text-xs text-white m-0 p-1 bg-gray-600">{`${tool}`}</span>
                    </li>
                  ))}
                  {item.tools.length > 3 && (
                    <li>
                      <span className="text-xs text-white m-0 p-1 bg-gray-600">
                        {`+${item.tools.length - 3}`}
                      </span>
                    </li>
                  )}
                </ul>
                <div className="justify-self-end flex justify-around items-center mt-36 text-xs">
                  {item.demo && (
                    <Link
                      to={item.demo}
                      target="_blank"
                      className="bg-amber-400 hover:bg-amber-500 hover:text-black text-white py-3 px-10 m-2"
                    >
                      Live Project
                    </Link>
                  )}
                  <Link
                    target="_blank"
                    to={item.source}
                    className="bg-amber-400 hover:bg-amber-500 hover:text-black text-white py-3 px-10 m-2"
                  >
                    View Source
                  </Link>
                </div>
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
          className="transform text-xs hover:bg-gray-400 bg-amber-400 transition duration-300 ease-in-out hover:text-white text-black font-semibold py-4 my-10 w-full"
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
