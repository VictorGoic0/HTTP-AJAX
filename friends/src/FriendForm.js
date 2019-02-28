import React from 'react';
import './FriendForm.css';
import axios from 'axios';

class FriendForm extends React.Component {
  state = {
    friend: {
      name: '',
      age: '',
      email: ''
    }
  }

  changeHandler = e => {
    e.persist();
    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [e.target.name]: e.target.value
      }
    }));
    console.log(this.state);
  }

  addFriend = (e, item) => {
    axios.post('http://localhost:5000/friends', item)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <form onSubmit={e => this.addFriend(e, this.state.friend)}>
        <input
        type="text"
        name="name"
        onChange={this.changeHandler}
        placeholder="name"
        value={this.state.friend.name}
        />

        <input
        type="number"
        name="age"
        onChange={this.changeHandler}
        placeholder="age"
        value={this.state.friend.age}
        />

        <input
        type="text"
        name="email"
        onChange={this.changeHandler}
        placeholder="email"
        value={this.state.friend.email}
        />

        <button>Add New Friend</button>
      </form>
    )
  }
}

export default FriendForm;
