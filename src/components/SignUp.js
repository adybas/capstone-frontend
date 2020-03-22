import React from 'react'
import { connect } from 'react-redux'
import { signingUp } from '../redux/actions'
import { Redirect } from 'react-router-dom'


class SignUp extends React.Component {

    state = {
        form: {
            first_name: "",
            last_name: "",
            username: "",
            password: ""
        },
        redirected: false
    }
    
    handleChange = (event) => {
        let newFormState = {...this.state.form}
        newFormState[event.target.name] = event.target.value
        this.setState({ form: newFormState }) 
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.form)
        this.setState({ redirected: true }) 
    }    

    render() {
        if (this.state.redirected){
            return <Redirect to="/home"/> // redirect to user profile!!
        }
        return (
            <div>
                Sign up Form
                <form onSubmit={(event) => {this.handleSubmit(event)}}>
                    <input name="first_name"
                    placeholder="First Name" 
                    onChange={this.handleChange}></input>
                    
                    <input name="last_name" 
                    placeholder="Last Name"
                    onChange={this.handleChange}></input>
                   
                    <input name="username"
                    placeholder="Username" 
                    onChange={this.handleChange}></input>
                   
                    <input name="password"
                    type="password"
                    placeholder="Password" 
                    onChange={this.handleChange}></input>
                    <button>Sign Up</button>
                </form>   
            </div>
        )
    }
}

const mapStateToProps = state => { 
    return { currentUser: state.currentUser}
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (user) => dispatch(signingUp(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)