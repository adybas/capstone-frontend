import React from 'react'
import { Route, NavLink, withRouter } from 'react-router-dom'
import { AiOutlineSearch, AiOutlineLogin, AiOutlineHome, AiOutlineUser } from 'react-icons/ai';


const Navigation = () => {
    return (
        <div className="nav mb-4">
            <Route>
                < NavLink to="/home" activeClassName="active-item" className="item" > <AiOutlineHome /> Home </NavLink>
                < NavLink to="/ingredients" activeClassName="active-item" className="item" > <AiOutlineSearch /> Search with Ingredients </NavLink> 
                < NavLink to="/profile" activeClassName="active-item" className="item" > <AiOutlineUser /> Profile </NavLink> 
                < NavLink to="/login" activeClassName="active-item" className="item" > <AiOutlineLogin /> Login </NavLink>   
            </Route>
        </div>
    )  
}


export default withRouter(Navigation)
