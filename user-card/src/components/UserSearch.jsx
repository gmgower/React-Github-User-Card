import React from 'react'

class UserSearch extends React.Component {
    constructor(props) {
    console.log("UserSearch", props)

        super(props)    
        this.state = {
             search: '',
        }
    }

    handleChange = e => {
        this.setState({
            // search: e.target.value
            [e.target.name]: e.target.value
        }) 
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({search: ""})
        this.props.changeUserName(this.state.search)
    }
    
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text"
                name="search"
                placeholder="search"
                value={this.state.search}
                onChange={this.handleChange}
                />
            <button type="submit">Search User</button>
            </form>
        )
    }
}

export default UserSearch;