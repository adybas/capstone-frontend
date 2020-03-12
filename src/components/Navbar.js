import React from 'react'
import { Route, Switch, NavLink, withRouter} from "react-router-dom"
import { connect } from 'react-redux'
import SignUp from './SignUp'
import { Login } from './Login'

const Navbar = () => {
    return (
        <div>
            I'm a NAVBAR
            <Switch>
                <NavLink exact to="/signup"activeClassName="active item" className="item">SignUp</NavLink>
                <NavLink exact to="/login" activeClassName="active item" className="item">Login</NavLink>
            </Switch>
        </div>
    )  
}

export default withRouter(Navbar);
