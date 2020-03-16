import React, { Component } from 'react'
import IngredientList from './IngredientList'
import Searchbar from './Searchbar'
// MAKE FUNCTIONAL IF STATELESS!!
class IngredientsContainer extends Component {

    render() {
        return (
            <div>
                <div className="">
                    <Searchbar />
                    "Select Up to 6 Ingredients You would like to cook with today!"
                    <IngredientList />
                </div>
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