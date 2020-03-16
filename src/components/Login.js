import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import { loggingIn } from '../redux/actions'


class Login extends Component {

  state = {
      form: {
        username: "",
        password: ""
      }, 
      redirected: false
  }

  handleChange = (event) => {
      let newStateForm = {...this.state.form}
      newStateForm[event.target.name] = event.target.value
      this.setState({ form: newStateForm })
  }

  handleSubmit = (event) => {
      event.preventDefault()
      this.props.onSubmit(this.state.form)
      this.setState({redirected: true})
  }

  render() {
    // console.log("inside the login",this.props)
      if (this.state.redirected){
          return <Redirect to="/home"/> // redirect to user profile!!
      }
      return (
          <div>
              Login-In Here!
              <form onSubmit={(event) => {this.handleSubmit(event)}}>
                    <input name="username"
                    placeholder="Username" 
                    onChange={this.handleChange}></input>

                    <input name="password"
                    type="password"
                    placeholder="Password" 
                    onChange={this.handleChange}></input>

                  <button>Login</button>
              </form>
                {/* Link to SignUp Here */}
          </div>
      )
  }
}

const mapStateToProps = state => { 
//   console.log("I'm in the Login Component", state)
  return { currentUser: state.currentUser}
}

const mapDispatchToProps = dispatch => {
  return {
      onSubmit: (user) => dispatch(loggingIn(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
