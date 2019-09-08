import React from 'react';
import './App.css';
import UserCard from './components/UserCard.jsx';
import UserSearch from './components/UserSearch.jsx'

import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: 'gmgower',
      user: {},
      followers: []
    };
  }

  changeUserName = (userName) => {
    this.setState({ userName })
  }

  componentDidMount() {
    this.usersGet();
    this.usersFollowers();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("CDU", this.state)
    if(prevState.userName !== this.state.userName) {
      console.log(prevState.userName)
      this.usersGet();
      this.usersFollowers();
    
    }
  }

  usersGet = () => {
    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      // .get(`https://api.github.com/users/gmgower`)

      // .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ user: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  usersFollowers = () => {
    axios.get(`https://api.github.com/users/${this.state.userName}/followers`).then(res => {
      // .get(`https://api.github.com/users/gmgower/followers`)
      
    console.log(res.data);
      this.setState({ followers: res.data });
    });
  };

  render() {
    return (
      <div className='App'>
        <UserSearch changeUserName={this.changeUserName} />
        <UserCard user={this.state.user} followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
