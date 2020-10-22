import React from 'react';
import ReactDOM from 'react-dom';
import NoteDisplay from './components/NoteDisplay';
import Menu from './components/Menu'

const App = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <NoteDisplay />
      <Menu />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"));