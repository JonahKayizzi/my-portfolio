import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Cards = ({ items, handleModal }) => {
  const [numItems, setNumItems] = useState(4);
  const handleLoadMore = () => {
    setNumItems(numItems + 4);
  };

  return (
    <div className="flex flex-wrap lg:mb-10 mb-2 justify-start">
      {items.slice(0, numItems).map((item) => (
        <button
          className="md:w-1/2 w-full p-2 transform hover:scale-105 transition duration-300 ease-in-out"
          onClick={() => handleModal(item)}
          key={item.rank}
          type="button"
        >
          <div className="overflow-hidden">
            <div
              className="w-full lg:h-72 h-64 bg-contain bg-center bg-white"
              style={{
                backgroundImage: `url(${item.images})`,
                backgroundSize: '95%',
                backgroundPositionY: '20%',
                backgroundRepeat: 'no-repeat',
                '@media (max-width: 768px)': {
                  backgroundSize: '100%',
                  backgroundPositionY: '10%',
                },
              }}
            >
              <div className="lg:p-6 p-2 bg-gradient-to-b from-gray-400 to-transparent flex-col">
                <h1 className="lg:text-xl text-md font-bold text-white text-left">
                  {item.name.length > 30
                    ? `${item.name.slice(0, 30)}...`
                    : item.name}
                </h1>
                <ul className="flex justify-start flex-wrap gap-2 lg:mt-2 mt-32">
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
                <div className="justify-self-end flex lg:flex-row flex-col justify-around items-center lg:mt-36 mt-1 text-xs">
                  {item.demo && (
                    <Link
                      to={item.demo}
                      target="_blank"
                      className="bg-amber-400 hover:bg-amber-500 hover:text-black text-white lg:py-3 py-2 px-10 lg:m-2 m-1 mb-0 lg:w-1/2 w-full"
                    >
                      Live Project
                    </Link>
                  )}
                  <Link
                    target="_blank"
                    to={item.source}
                    className="bg-amber-400 hover:bg-amber-500 hover:text-black text-white lg:py-3 py-1 px-10 lg:m-2 m-1 lg:w-1/2 w-full"
                  >
                    View Source
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
  handleModal: PropTypes.isRequired,
};

export default Cards;
