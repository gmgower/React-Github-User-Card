import React from 'react';
import UserList from './UserList';

import { Card, Icon, Image } from 'semantic-ui-react';

const UserCard = props => {
  console.log('UserCard Props', props);
  return (
    <div>
      <Card>
        <Card.Content>
          <Image src={props.user.avatar_url} />
          <Card.Header>User Login: {props.user.login}</Card.Header>
          <Card.Meta>User Location: {props.user.location}</Card.Meta>
          <p>User Following: {props.user.following}</p>
          <p>User Followers: {props.user.followers}</p>
        </Card.Content>

        <UserList user={props.user} followers={props.followers} />
      </Card>
    </div>
  );
};

export default UserCard;
