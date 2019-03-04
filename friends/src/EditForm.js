import React from 'react';
import axios from 'axios';
import Navigation from './Navigation';
import './FriendForm.css';

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        name: props.location.state.name,
        age: props.location.state.age,
        email: props.location.state.email,
        id: props.location.state.id
      }
    }
  }

  handleInputChange = e => {
    e.persist();
    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [e.target.name]: e.target.value
      }
    }));
    console.log(this.state);
  };

  render() {
      return (
        <div className="EditForm">
          <Navigation />
          <form onSubmit={e => this.props.editFriend(e, this.state.friend)}>
            <input
              type="text"
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.state.friend.name}
              name="name"
              required
            />
            <input
              type="number"
              onChange={this.handleInputChange}
              placeholder="age"
              value={this.state.friend.age}
              name="age"
              required
            />
            <input
              type="text"
              onChange={this.handleInputChange}
              placeholder="email"
              value={this.state.friend.email}
              name="email"
              required
            />
            <button type="submit">Submit Edit</button>
          </form>
        </div>
      )
  }
}

export default EditForm;
