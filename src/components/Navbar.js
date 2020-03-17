import React from 'react'
import { Route, NavLink, withRouter} from "react-router-dom"
import { connect } from 'react-redux'
import SignUp from './SignUp'
import  Login  from './Login'

const Navbar = () => {
    return (
        <div>
            I'm a NAVBAR
            <Route>
                < NavLink to="/home" activeClassName="active-item" className="item" > Home </NavLink>
                < NavLink to="/ingredients" activeClassName="active-item" className="item" > Search with Ingredients </NavLink>
                < NavLink to="/signup" activeClassName="active-item" className="item" > Sign Up </NavLink>
                < NavLink to="/login" activeClassName="active-item" className="item" > Login </NavLink>         
            </Route>
        </div>
    )  
}

export default withRouter(Navbar);
