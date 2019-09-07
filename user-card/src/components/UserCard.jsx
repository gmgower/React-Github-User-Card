import React from 'react'

const UserCard = (props) => {
    console.log('UserCard Props', props)
    return (
        <div>
            <h3>User Login: {props.user.login}</h3> 
            <p>User Location: {props.user.location}</p>
            <p>User Following: {props.user.following}</p>        
            <p>User Followers: {props.user.followers}</p>           
            <div>
                {props.followers.map( follower => (
                    <div key={follower.id}>{follower.login}</div>
                ))}
            </div>
        </div>
    )
}

export default UserCard
