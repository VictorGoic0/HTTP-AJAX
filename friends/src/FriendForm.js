import React from 'react';
import './FriendForm.css';
import axios from 'axios';
import Navigation from './Navigation';

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

  render() {
    return (
      <div>
        <Navigation />
        <form onSubmit={e => this.props.addFriend(e, this.state.friend)}>
          <input
          type="text"
          name="name"
          onChange={this.changeHandler}
          placeholder="name"
          value={this.state.friend.name}
          required
          />

          <input
          type="number"
          name="age"
          onChange={this.changeHandler}
          placeholder="age"
          value={this.state.friend.age}
          required
          />

          <input
          type="text"
          name="email"
          onChange={this.changeHandler}
          placeholder="email"
          value={this.state.friend.email}
          required
          />

          <button>Add New Friend</button>
        </form>
      </div>
    )
  }
}

export default FriendForm;
