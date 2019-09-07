import React from 'react';
import './App.css';
import UserCard from './components/UserCard.jsx'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/gmgower')
    // .then(res => res.json())
    .then(res => {
      console.log(res.data)
      this.setState({user: res.data})
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className='App'>
        <UserCard user={this.state.user}/>       
      </div>
    );
  }
}

export default App;
