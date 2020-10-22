import React, {useState} from 'react';
import MardownInput from '../MarkdownInput';

const NoteDisplay = () => {
  const [note, setNote] = useState("");

  const displayNote = (note) => {
    setNote(note)
  }

  return (
    <div>
      <h2>{note}</h2>
      <MardownInput displayNote={displayNote}/>
    </div>
  )
}

export default NoteDisplay;