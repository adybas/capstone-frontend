import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import IngredientList from './IngredientList'
import Searchbar from './Searchbar'

class IngredientsContainer extends Component {

    render() {
        return (
            <div>
                <Route
                    path="/"
                    render={() => (
                    <div className="">
                        <Searchbar />
                        <IngredientList />
                    </div>
                    )}
                />
            </div>
        )
    }
}

export default IngredientsContainer

// Click on the ingredients you have? or Input them?
// if click, render the ingredients onto the page. maybe provide the user with 
// 20 ingredients and pick from there
// after clicking, will make a fetch to the api to search their recipes
// maybe if the result is 0, we can jsut display a random recipe?
// from here, go to the recipes container to display the recipes
// form their, allow them to click on one recipe to view full recipe