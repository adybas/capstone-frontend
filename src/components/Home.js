import React from 'react'
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'

import Login from './Login'
import SignUp from './SignUp'
import IngredientsContainer from './IngredientsContainer'
import RecipesContainer from './RecipesContainer'
import RecipeDetail from './RecipeDetail'
import Navbar from './Navbar'
import Footer from './Footer'
import Profile from './Profile'
import HomeCom from './HomeCom'


const Home = () => {
    return (
        <div className="home">
            < Navbar />

            <Switch>
                <Route
                    exact path="/signup"
                    component={SignUp}
                />
                <Route
                     path="/login"
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
                  <Route
                    exact path="/profile"
                    render={() => (
                        <div className="">
                            <Profile />
                        </div>
                    )}
                />
                
                <Route
                    exact path="/"
                    render={() => (
                        <div className="">
                            <HomeCom />
                        </div>
                    )}
                />
             
            </Switch> 
            {/* < Footer /> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}


export default connect(mapStateToProps)(Home)