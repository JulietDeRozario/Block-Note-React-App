import React, { useState } from 'react';

const MarkdownInput = ({displayNote}) => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');

  //const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    if(event.target.id === "content") {
      setContent(event.target.value);
    } else {
      setTitle(event.target.value);
    }
    displayNote(title, content);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //setSearchQuery(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="title" placeholder="Titre de la note" value={title} onChange={handleChange}/>
      <input type="textarea" id="content" placeholder="Saisissez votre note ici" value={content} onChange={handleChange}/>
      <button type="submit">
          Sauvegarder
      </button>
    </form>
  )
}

export default MarkdownInput;