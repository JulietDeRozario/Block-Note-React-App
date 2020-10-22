import React, {useState, useEffect} from 'react';
import Note from '../Note';

const Menu = () => {
  const [notes, setNotes] = useState([])

  const showNotes = () => {
    let notes = [];
    for( let i = 0; i < localStorage.length; i++){
      notes.push([localStorage.key(i), localStorage[localStorage.key(i)]]);
    }
    setNotes(notes);
  }

  useEffect(() => {
    showNotes();
  }, []);
  
  return (
    <div>
      {notes.map((note) => (
        <Note title={note[0]} content={note[1]}/>
      ))}
    </div>
  )
}

export default Menu;