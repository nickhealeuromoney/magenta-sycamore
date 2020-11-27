import React from 'react';

const Filters = () => {
  return (
    <ol className="filters">
      <li className="filters__filter filters__filter--active">All</li>
      <li className="filters__filter">The Deal</li>
      <li className="filters__filter">Capacity</li>
    </ol>
  );
}

export default Filters;
