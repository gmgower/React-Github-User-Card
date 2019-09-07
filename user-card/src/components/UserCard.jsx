import React from 'react'

const UserCard = (props) => {
    console.log('UserCard', props)
    return (
        <div>
            <h3>User Login: {props.user.login}</h3> 
            <p>User Location: {props.user.location}</p>
            <p>User Followers: {props.user.followers}</p>           
            <p>User Following: {props.user.following}</p>           
        </div>
    )
}

export default UserCard
