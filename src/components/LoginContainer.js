import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'

const LoginContainer = () => {

    const handleClick = (event) => {
        event.target.id === "signUp" ? 
        event.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add('right-panel-active') : 
        event.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove('right-panel-active')
    }

        return (
        <div className="container" id="container">
            <div className="form-container sign-in-container">
               < Login />
            </div>
            <div className="form-container sign-up-container">
                < SignUp />
            </div>
            <div className="overlay-container">
                <div className="overlay">

                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>
                            To search for recipes with us please login with your personal info
                        </p>
                        <Link to="/login">
                        <button onClick={handleClick} className="ghost" id="signIn">Sign In</button></Link>
                    </div>

                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        < Link to='/signup'>
                        <button onClick={handleClick} className="ghost" id="signUp">Sign Up</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginContainer