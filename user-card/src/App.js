import React from 'react';
import './App.css';

import axios from 'axios'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/gmgower')
    // .then(res => res.json())
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
