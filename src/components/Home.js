import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import  Login  from './Login'
import SignUp from './SignUp'
import IngredientsContainer from './IngredientsContainer'
import RecipesContainer from './RecipesContainer'


export class Home extends Component {
    render() {
        return (
            <div>
                <Switch>
                <Route
                        path="/signup"
                        component={SignUp}
                    />
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
                       <Route
                        path="/recipes"
                        render={() => (
                            <div className="">
                                <RecipesContainer />
                            </div>
                        )}
                    />
                </Switch>
            </div>
        )
    }
}


export default Home
