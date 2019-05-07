import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
constructor() {
    super();
}
  render() {
  return(
    <div>
    <button>X</button>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
