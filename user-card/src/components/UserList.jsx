import React from 'react';

import { Card, Icon, Image } from 'semantic-ui-react';

const UserList = props => {
  console.log('UserList', props);
  return (
    <div>
      <Card>
        {props.followers.map((follower, id) => (
          <Card.Content key={id}>
            <div>
              <Image src={props.user.avatar_url} />
              <Card.Header>User Login: {follower.login}</Card.Header>
            </div>
          </Card.Content>
        ))}
      </Card>
    </div>
  );
};

export default UserList;

{
  /* {props.followers.map( follower => (
                    <div key={follower.id}>{follower.login}</div>
                ))}
             */
}
