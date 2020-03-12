import React from 'react'
import { connect } from 'react-redux'
import { signingUp } from '../redux/actions'


class SignUp extends React.Component {

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
                Sign up Form
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
        onSubmit: (user) => dispatch(signingUp(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
