import React, { useState } from 'react';

const MarkdownInput = ({displayNote}) => {
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
    displayNote(query);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="textarea" placeholder="Saisissez votre note ici" value={query} onChange={handleChange}/>
      <button type="submit">
          Sauvegarder
      </button>
    </form>
  )
}

export default MarkdownInput;