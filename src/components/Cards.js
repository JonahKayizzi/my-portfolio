import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Cards = ({ items }) => (
  <div className="flex flex-wrap">
    {items.map((item) => (
      <div className="w-1/2 p-2" key={item.rank}>
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
              {item.tools.slice(0, 6).map((tool) => (
                <li key={tool}>
                  <span className="text-xs text-gray-600 m-0 p-1 bg-gray-200 rounded-md">{`${tool}`}</span>
                </li>
              ))}
              {item.tools.length > 6 && (
                <li>
                  <span className="text-xs text-gray-600 m-0 p-1 bg-gray-200 rounded-md">
                    {`+${item.tools.length - 6}`}
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
      </div>
    ))}
  </div>
);

Cards.propTypes = {
  items: PropTypes.isRequired,
};

export default Cards;
