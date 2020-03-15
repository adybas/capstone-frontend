import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import  Login  from './Login'
import IngredientsContainer from './IngredientsContainer'


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
                            <div className="">
                                <IngredientsContainer />
                            </div>
                        )}
                    />
                </Switch>
            </div>
        )
    }
}


export default Home
