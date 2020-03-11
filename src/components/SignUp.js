import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SignUp extends Component {
    constructor(){
        super()
        this.state = {
            user: null
        }
    }

    handleSubmit(event){
        event.preventDefault()
        console.log("I'm getting submitted")
        console.log(this.state.user)
        // event.target.value.remove()
    }

    render() {
        return (
            <div>
                "Sign up Form"
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input name="user" value={this.state.user} onChange={(event) => this.setState({ user: event.target.value })}></input>
                    <button>Sign Up</button>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
