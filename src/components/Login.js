import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from '../redux/actions'

//should login if user acct exists

export const Login = props => {
    console.log("gdg", props)

  // handleSubmit(event) {
  //   event.preventDefault();
  //   fetch("http://localhost:3000/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: JSON.stringify({ user: this.state.user })
  //   })
  //     .then(res => res.json())
  //     .then(user => console.log(user));
  //   // event.target.value.remove()
  // }

    return (
      <div>
        Login
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            name="user"
            value={props.value}
            onChange={event => props.onChange(event.target.value)}
          ></input>
          <button>Login</button>
        </form>
      </div>
    );
}

const mapStateToProps = state => { return { value: state.login}}

const mapDispatchToProps = dispatch => {return {onChange: (user) => dispatch(login(user))}}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
