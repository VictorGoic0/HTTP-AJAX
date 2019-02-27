import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(req => {
      this.setState({ friends: req.data })
    })
    .catch(req => {console.log(req.statusText)})
  }

  render() {
    return (
      <div>
        {this.state.friends.map(input => <div key={input.id}><h1>{input.name}</h1></div>)}
      </div>
    );
  }
}

export default App;
