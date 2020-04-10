import React from 'react'
import { Route, NavLink, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import { AiOutlineSearch, AiOutlineLogin, AiOutlineHome, AiOutlineUser } from 'react-icons/ai';


const Navigation = (props) => {
    console.log("navbar", props.currentUser)
    return (
        <div className="nav mb-4">
            <Route>
                < NavLink to="/home" activeClassName="active-item" className="item" > <AiOutlineHome /> Home </NavLink>
                < NavLink to="/ingredients" activeClassName="active-item" className="item" > <AiOutlineSearch /> Search with Ingredients </NavLink> 
                < NavLink to="/profile" activeClassName="active-item" className="item" > <AiOutlineUser /> Profile </NavLink> 
                {props.currentUser?
                < NavLink to="/logout" activeClassName="active-item" className="item" > <AiOutlineLogin /> Logout </NavLink>
                : < NavLink to="/login" activeClassName="active-item" className="item" > <AiOutlineLogin /> Login </NavLink>} 
            </Route>
        </div>
    )  
}

mapStateToPorps = state => {
    return {
        currentUser: state.currentUser
    }
}

export default withRouter(connect(mapStateToProps)(Navigation))
