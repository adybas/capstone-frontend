import React from 'react'
import {connect} from 'react-redux'
import {loggingOut} from '../redux/actions'

const Logout = () => {
    return(
        <div>
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