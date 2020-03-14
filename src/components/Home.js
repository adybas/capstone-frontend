import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from "react-router-dom";
import { Login } from './Login'
import { Ingredients } from './Ingredients'
import { Searchbar } from './Searchbar'

export class Home extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route
                        path="/login"
                        component={Login}
                    />
                    <Route
                        path="/ingredients"
                        render={() => (
                            <div className="ui narrow container segment">
                                <Searchbar />
                                <Ingredients />
                            </div>
                        )}
                    />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)( Home
)
