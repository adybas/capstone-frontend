import React, { Component } from 'react'
import { connect } from 'react-redux'

class RecipesContainer extends Component {
    render() {
        return (
            <div>
                {props.userIngredientRecipes.map(recipe => <Recipes recipe={recipe} key={recipe.id}/>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userIngredientRecipes: state.userIngredientRecipes
    }
}

const mapDispatchToProps = {
    // will dispatch an onclick to fetch the recipe info of the one you select, if you wanna do that
}

export default connect(mapStateToProps)(RecipesContainer)