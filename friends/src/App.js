import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './FriendsList';
import FriendForm from './FriendForm';
import EditForm from './EditForm';
import { Route } from 'react-router-dom';

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

  addFriend = (e, item) => {
    e.preventDefault();
    axios.post('http://localhost:5000/friends', item)
    .then(res => {
      console.log(res);
      this.setState({ friends: res.data })
      this.props.history.push('/');
    })
    .catch(err => {
      console.log(err)
    })
  }

  deleteFriend = (e, id) => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(res => {
      console.log(res);
      this.setState({ friends: res.data })
    })
    .catch(err => {
      console.log(err);
    })
  }

  editFriend = (e, friend) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/friends/${friend.id}`, friend)
    .then(res => {
      console.log(res);
      this.setState({ friends: res.data })
    })
    .catch(err => {
      console.log(err);
    })
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="App">
        <Route path="/" exact render={ownProps => <FriendsList {...ownProps} friends={this.state.friends} deleteFriend={this.deleteFriend} editFriend={this.editFriend} />} />
        <Route path="/friend-form" render={ownProps => <FriendForm {...ownProps} addFriend={this.addFriend} />} />
        <Route path="/edit-form" render={ownProps => <EditForm {...ownProps} editFriend={this.editFriend} />} />
      </div>
    );
  }
}

export default App;
