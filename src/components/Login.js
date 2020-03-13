import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from '../redux/actions'

//should login if user acct exists

class Login extends Component {

  state = {
      name: ""
  }

  handleSubmit = (event) => {
      event.preventDefault()
      this.props.onSubmit(this.state.name)
  }

  render() {
      return (
          <div>
              Login-In Here!
              <form onSubmit={(event) => {this.handleSubmit(event)}}>
                  <input name="user" value={this.state.name} onChange={event => this.setState({ name: event.target.value })}></input>
                  <button>Sign Up</button>
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
