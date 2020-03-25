import React, { Component } from 'react'
import { connect } from 'react-redux'
import Recipes from './Recipes'
import {resetRedirect} from '../redux/actions'

class RecipesContainer extends Component {

    componentDidMount(){
        this.props.redirect()
    }

    render() {
        return (
            <div className="container">
                <div className="card-deck">
                {this.props.userIngredientRecipes.map(recipe => <Recipes recipe={recipe} key={recipe.id}/>)}
                </div >
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userIngredientRecipes: state.userIngredientRecipes,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        redirect: () => {dispatch(resetRedirect())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)
