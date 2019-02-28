import React from 'react';
import './Friend.css';

const Friend = props => {
  return (
    <div className="Friend">

      <header>
        <h1>{props.data.name}</h1>
        <button onClick={e => props.deleteFriend(e, props.data.id)}>X</button>
      </header>

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
