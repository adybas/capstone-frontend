import React from 'react'
import { connect } from 'react-redux'
import IngredientListItem from './IngredientListItem'
import {fetchingUserSelectedIngredients, userDeselectedIngrdient, userClearAllIngredients} from '../redux/actions'

const IngredientList = (props) => {

    const handleSearch = () => {
        let ingredientsString = props.selectedIngredients.join(",").replace(/ /g, "-")
        props.onSearchSubmit(ingredientsString)
    }

    const handleDeleteSelected = (ing) => {
        props.onDeleteClicked(ing)
    }

    const handleClearSelection = () => {
        props.onClearAllBtn()
    }

    return (
        <div> 
            <div className="text-block content">
            <h5 className="text-center">Select Up to 6 Ingredients You would like to cook with today!</h5>
            <h3> Current Selection: {props.selectedIngredients.map(ing => <a href="#" key="ing" onClick={() => handleDeleteSelected(ing)}> {ing} </a>)} </h3>
            </div>

            <div className="ing-list-btns">
                <button className="btn btn-outline-warning btn-lg" onClick={handleSearch}>SEARCH RECIPES WITH SELECTION</button>
                <button className="btn btn-outline-info btn-lg" onClick={handleClearSelection}>CLEAR ALL INGREDIENTS SELECTION</button>
            </div>
            <ul className="ingredients-columns">
                {props.ingredients.map(ing => <IngredientListItem ingredient={ing} key={ing.id}/>)}
            </ul>
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
        onSearchSubmit: (ingredientsString) => dispatch(fetchingUserSelectedIngredients(ingredientsString)),
        onDeleteClicked: (ingredient) => dispatch(userDeselectedIngrdient(ingredient)),
        onClearAllBtn: () => dispatch(userClearAllIngredients())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(IngredientList);