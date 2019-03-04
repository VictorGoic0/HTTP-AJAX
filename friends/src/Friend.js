import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = props => {
  return (
    <div className="Friend">

      <header>
        <h1>{props.friend.name}</h1>
        <button onClick={e => props.deleteFriend(e, props.friend.id)}>X</button>
      </header>

      <div className="age">
        <h4>Age:</h4>
        <p>{props.friend.age}</p>
      </div>

      <div className="email">
        <h4>email:</h4>
        <p>{props.friend.email}</p>
      </div>

      <div className="edit">
        <Link to={{ pathname: "/edit-form", state: {
          name: props.friend.name,
          age: props.friend.age,
          email: props.friend.email,
          id: props.friend.id
        } }}>
          <button>Edit Friend</button>
        </Link>
      </div>

    </div>
  )
}

export default Friend;
