import React from 'react';
import ReactDOM from 'react-dom';
import NoteDisplay from './components/NoteDisplay';

const App = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <NoteDisplay />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"));