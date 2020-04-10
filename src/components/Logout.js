import React from 'react'
import {loggingOut} from '../redux/actions'

const Logout = () => {
    return{

    }
}

const mapDispatchToProps = dispatch => {
    return {
      logout: () => {
        dispatch(logginOut())
      }
    };
  };

export default connect(null, mapDispatchToProps)(Logout)