import React, { Component } from 'react'
import { connect } from 'react-redux'
import Recipes from './Recipes'
import { Card } from 'semantic-ui-react'
import {resetRedirect} from '../redux/actions'
import { Switch } from 'react-router-dom'

class RecipesContainer extends Component {

    componentDidMount(){
        this.props.redirect()
    }

    render() {
        return (
            
            <div>
                <Card.Group itemsPerRow={2}>
                {this.props.userIngredientRecipes.map(recipe => <Recipes recipe={recipe} key={recipe.id}/>)}
                </Card.Group>
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
