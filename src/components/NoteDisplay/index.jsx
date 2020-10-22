import React, {useState} from 'react';
import MardownInput from '../MarkdownInput';
import Showdown from "showdown";

const NoteDisplay = () => {
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");

  const displayNote = (title, note) => {
    const converter = new Showdown.Converter();
    setNote(converter.makeHtml(note));
    setTitle(title);
  }

  const createMarkup = (html) => {
    return {__html: html};
  }

  return (
    <div>
      <h1 className="title" dangerouslySetInnerHTML={createMarkup(title)} />
      <div dangerouslySetInnerHTML={createMarkup(note)} />
      <MardownInput displayNote={displayNote}/>
    </div>
  )
}

export default NoteDisplay;