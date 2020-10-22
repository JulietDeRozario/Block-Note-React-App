import React from 'react';
import Showdown from "showdown";

const Note = ({title, content, editNote}) => {

  const createMarkup = (markdown) => {
    const converter = new Showdown.Converter();
    let html = converter.makeHtml(markdown);
    return {__html: html};
  }

  const displayNote = () => {
    editNote(content, title)
  }

  return (
    <div onClick={displayNote}>
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={createMarkup(content)} />
    </div>
  )
}

export default Note;