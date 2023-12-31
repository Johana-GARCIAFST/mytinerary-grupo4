import React, { useState } from 'react';
import '../app.css'

const CardFilter = ({ cards }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value.trim().toLowerCase());
  };

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().trim().startsWith(searchTerm)
  );

  return (
    <div>
      <input className='Search' type="text" onChange={handleSearch} placeholder="Search" />
      {filteredCards.map((card) => (
        <div key={card.id}>{card.name}</div>
      ))}
    </div>
  );
};

export default CardFilter;