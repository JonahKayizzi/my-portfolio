import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

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
            <h1 className="text-xl font-bold text-gray-800">{item.name}</h1>
            <p className="mt-2 text-gray-600">{item.description}</p>
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
