import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import  Login  from './Login'
import SignUp from './SignUp'
import IngredientsContainer from './IngredientsContainer'
import RecipesContainer from './RecipesContainer'
import RecipeDetail from './RecipeDetail'
import Navbar from './Navbar'
import Footer from './Footer'


export class Home extends Component {
    render() {
        return (
            <div>
                < Navbar />

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
                        render={(props) => (
                            <div className="">
                                <RecipeDetail routeProps={props}/>
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
                < Footer />

            </div>
        )
    }
}


export default Home
