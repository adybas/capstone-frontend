import React from 'react'
import { connect } from 'react-redux'
import { login } from '../redux/actions'

const SignUp = props => {
    console.log("propppps", props)
    // constructor(){
    //     super()
    //     this.state = {
    //         user: ""
    //     }
    // }

    // handleSubmit(event){
    //     event.preventDefault()
    //     fetch("http://localhost:3000/users", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type" : "application/json",
    //             "Accept" : "application/json"
    //         },
    //         body: JSON.stringify({user: this.state.user})
    //     }).then(res => res.json())
    //     // event.target.value.remove()
    // }

    return (
        <div>
            Sign up Form
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <input name="user" value={props.value} onChange={(event) => props.onChange(event.target.value)}></input>
                <button>Sign Up</button>
            </form>
            
        </div>
    )
}


const mapStateToProps = state => { 
    console.log("tgf", state)
    return { value: state.login}
}

const mapDispatchToProps = dispatch => {
    return {
        onChange: (user) => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
