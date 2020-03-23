import React from 'react'
import { connect } from 'react-redux'
import IngredientListItem from './IngredientListItem'
import {fetchingUserSelectedIngredients} from '../redux/actions'
// class, local state of redirect
class IngredientList extends React.Component {

    render(){

        const handleSearch = () => {
            let ingredientsString = this.props.selectedIngredients.join(",").replace(/ /g, "-")
            this.props.onSearchSubmit(ingredientsString)
        }

        //clear current selection
        // const handleClearSelection = () => {
        //     debugger
        //     this.props.selectedIngredients
        // }

        return (
            <div>
                <h4>Current Selection: {this.props.selectedIngredients} </h4>
                <button onClick={handleSearch}>SEARCH RECIPES WITH SELECTION</button>
                {/* <button onClick={handleClearSelection}>Clear the Current Ingredient Selection</button> */}
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
        onSearchSubmit: (ingredientsString) => dispatch(fetchingUserSelectedIngredients(ingredientsString))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(IngredientList);