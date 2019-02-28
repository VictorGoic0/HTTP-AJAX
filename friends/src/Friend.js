import React from 'react';
import './Friend.css';

const Friend = props => {
  return (
    <div className="Friend">
      <h1>{props.data.name}</h1>
      <div className="age">
        <h4>Age:</h4>
        <p>{props.data.age}</p>
      </div>
      <div className="email">
        <h4>email:</h4>
        <p>{props.data.email}</p>
      </div>
    </div>
  )
}

export default Friend;
