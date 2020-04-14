import React from 'react'
import {connect} from 'react-redux'
import {loggingOut} from '../redux/actions'

//instead of rendering a new page, maybe just render a logout button?! in navBar
const Logout = (props) => {
  console.log("logout", props)
    return(
        <div className="logout">
            I'm a logout page!
        </div>
    )
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(loggingOut())
    }
  };
};

export default connect(null, mapDispatchToProps)(Logout)