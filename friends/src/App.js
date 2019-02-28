import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friend from './Friend';
import FriendForm from './FriendForm';

class App extends Component {
  state = {
    friends: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(req => {
      this.setState({ friends: req.data })
    })
    .catch(err => {console.log(err)})
  }

  render() {
    return (
      <div className="App">
        {this.state.friends.map(friend => <Friend key={friend.id} data={friend} />)}
        <FriendForm />
      </div>
    );
  }
}

export default App;
