import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from '../redux/actions'


class Login extends Component {

  state = {
      form: {
        username: "",
        password: ""
      }
  }

  handleChange = (event) => {
      let newStateForm = {...this.state.form}
      newStateForm[event.target.name] = event.target.value
      this.setState({ form: newStateForm })
  }

  handleSubmit = (event) => {
      event.preventDefault()
      this.props.onSubmit(this.state.form)
  }

  render() {
      return (
          <div>
              Login-In Here!
              <form onSubmit={(event) => {this.handleSubmit(event)}}>
                    <input name="username"
                    placeholder="Username" 
                    onChange={this.handleChange}></input>

                    <input name="password"
                    placeholder="Password" 
                    onChange={this.handleChange}></input>

                  <button>Login</button>
              </form>
          </div>
      )
  }
}

const mapStateToProps = state => { 
  console.log("tgf", state)
  return { value: state.login}
}

const mapDispatchToProps = dispatch => {
  return {
      onSubmit: (user) => dispatch(login(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
