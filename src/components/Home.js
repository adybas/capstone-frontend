import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import  Login  from './Login'
import SignUp from './SignUp'
import IngredientsContainer from './IngredientsContainer'
import RecipesContainer from './RecipesContainer'
import RecipeDetail from './RecipeDetail'


export class Home extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route
                        exact path="/signup"
                        component={SignUp}
                    />
                    <Route
                        exact path="/login"
                        component={Login}
                    />
                    <Route
                        exact path="/ingredients"
                        render={() => (
                            <div className="">
                                <IngredientsContainer />
                            </div>
                        )}
                    />
                    <Route
                        exact path="/recipes/:id"
                        render={() => (
                            <div className="">
                                <RecipeDetail />
                            </div>
                        )}
                    />
                    <Route
                        exact path="/recipes"
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
