import React from 'react';
import Friend from './Friend';
import Navigation from './Navigation';

const FriendsList = props => {
  return (
    <div>
      <Navigation />
      {props.friends.map(friend => <Friend key={friend.id} friend={friend} deleteFriend={props.deleteFriend} editFriend={props.editFriend} />)}
    </div>
  )
}

export default FriendsList;
