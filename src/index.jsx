import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu'

const App = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Menu />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"));