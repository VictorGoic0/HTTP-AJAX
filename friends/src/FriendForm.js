import React from 'react';
import './FriendForm.css';

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
      <form>
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
      </form>
    )
  }
}

export default FriendForm;
