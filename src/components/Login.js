import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Login extends Component {
    constructor(){
        super()
        this.state = {
            user: ""
        }
    }

    handleSubmit(event){
        event.preventDefault()
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body: JSON.stringify({user: this.state.user})
        }).then(res => res.json())
        .then(user => console.log(user))
        // event.target.value.remove()
    }
    render() {
        return (
            <div>
                    Login
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input name="user" value={this.state.user} onChange={(event) => this.setState({ user: event.target.value })}></input>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
