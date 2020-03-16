import React from 'react'
import { connect } from 'react-redux'
import IngredientListItem from './IngredientListItem'
import {fetchingUserSelectedIngredients} from '../redux/actions'

const IngredientList = props => {

    const handleSearch = () => {
        console.log("inside handle search")
        console.log(props.selectedIngredients)
        debugger
        // 0: "amaretto"
        // 1: "apple juice"
        // 2: "ancho chiles"
        // length: 3
        // __proto__: Array(0)
        // tomato,cheese
        let ingredientsString
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
  
export default connect(mapStateToProps)(IngredientList);