import React from 'react'
import { connect } from 'react-redux'
import { signingUp } from '../redux/actions'
import { Redirect } from 'react-router-dom'
import { Button, Form, Card } from 'react-bootstrap'

class SignUp extends React.Component {
  state = {
    form: {
      first_name: "",
      last_name: "",
      username: "",
      password: ""
    },
    redirected: false
  };

  handleChange = event => {
    let newFormState = { ...this.state.form }
    newFormState[event.target.name] = event.target.value
    this.setState({ form: newFormState })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(this.state.form);
    this.setState({ redirected: true });
  };

  render() {
    if (this.state.redirected) {
      return <Redirect to="/home" />; // redirect to user profile!!
    }
    return (
      <div>
        <Card.Body>
          <Card.Title as="h3" className="text-center">
            Create Your Account
          </Card.Title>
          <Form>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <input
                className=""
                type="text"
                name="first_name"
                placeholder="First Name"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <input
                className=""
                name="last_name"
                placeholder="Last Name"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <input
                className=""
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <input
                name="password"
                className=""
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Button
                variant="primary"
                size="lg"
                block
                type="submit"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onSubmit: user => dispatch(signingUp(user))
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
