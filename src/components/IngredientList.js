import React from 'react'
import { connect } from 'react-redux'
import IngredientListItem from './IngredientListItem'
import {fetchingUserSelectedIngredients} from '../redux/actions'

const IngredientList = props => {

    const handleSearch = () => {
        let ingredientsString = props.selectedIngredients.join(",").replace(/ /g, "-")
        props.onSearchSubmit(ingredientsString)
    }

    return (
        <div>
            <h4>Current Selection: {props.selectedIngredients} </h4>
            <button onClick={handleSearch}>SEARCH RECIPES WITH SELECTION</button>
            {props.ingredients.map(ing => <IngredientListItem ingredient={ing} key={ing.id}/>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients.filter(
        ing =>
          ing.name.toLowerCase().includes(state.searchText.toLowerCase()) 
        ),
        selectedIngredients: state.selectedIngredients
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchSubmit: (ingredientsString) => dispatch(fetchingUserSelectedIngredients(ingredientsString))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(IngredientList);