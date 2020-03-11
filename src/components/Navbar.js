import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"
import { connect } from 'react-redux'
import { SignUp } from './SignUp'
import { Login } from './Login'

export class Navbar extends Component {
    render() {
        return (
            <div>
                I'm a NAVBAR
                <Switch>
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
