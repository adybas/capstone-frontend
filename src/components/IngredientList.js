import React from 'react'
import { connect } from 'react-redux'
import IngredientListItem from './IngredientListItem'
import {fetchingUserSelectedIngredients, userDeselectedIngrdient, userClearAllIngredients} from '../redux/actions'
// class, local state of redirect
class IngredientList extends React.Component {

    render(){

        const handleSearch = () => {
            let ingredientsString = this.props.selectedIngredients.join(",").replace(/ /g, "-")
            this.props.onSearchSubmit(ingredientsString)
        }

        //userDeselectedIngrdient
        const handleDeleteSelected = (event) => {
            this.props.onDeleteClicked(event.target.innerText)
        }

        const handleClearSelection = () => {
           this.props.onClearAllBtn()
        }

        return (
            <div>
                <h4 className="text-block">Current Selection: { <a href="#" onClick={handleDeleteSelected}> {this.props.selectedIngredients.join(', ')} </a>}</h4>
                <button onClick={handleSearch}>SEARCH RECIPES WITH SELECTION</button>
                <button onClick={handleClearSelection}>Clear ALL Current Ingredient Selection</button>
                {this.props.ingredients.map(ing => <IngredientListItem ingredient={ing} key={ing.id}/>)}
            </div>
        )
    }
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