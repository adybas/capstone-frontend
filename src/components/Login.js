import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loggingIn } from "../redux/actions";
import { Button, Form, Card } from "react-bootstrap";

class Login extends Component {
  state = {
    form: {
      username: "",
      password: ""
    },
  };

  handleChange = event => {
    let newStateForm = { ...this.state.form };
    newStateForm[event.target.name] = event.target.value;
    this.setState({ form: newStateForm });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.form);
  };

  render() {
    if (this.props.redirect) {
      return <Redirect to="/profile" />; // redirect to user profile!!
    }
    return (
      <div className="form-group">
        <Card.Body>
        <Card.Title as="h2" className="text-center">
          Sign In
          </Card.Title>
          <Form onSubmit={this.handleSubmit}>

            <Form.Group controlId="Username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                onChange={this.handleChange}
              />
            {/* </Form.Group> */}

            {/* <Form.Group controlId="password"> */}
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                label="password"
                placeholder="Enter password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
              {/* </Form.Group> */}
              {/* <Form.Group> */}
              <Form.Text className="text">
                Not a Member? <Link to="/signup">Sign up here</Link>
              </Form.Text>
            {/* </Form.Group>

            <Form.Group controlId="submit"> */}
              <Button variant="primary" type="submit" size="lg" block>
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    currentUser: state.currentUser, // use to check that user is not logged in
    redirect: state.redirect 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: user => dispatch(loggingIn(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
