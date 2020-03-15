import React from 'react'
import { connect } from 'react-redux'
import IngredientListItem from './IngredientListItem'

const IngredientList = props => {

    return (
        <div>
            {props.ingredients.map(ing => <IngredientListItem ingredient={ing} key={ing.id}/>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients.filter(
        ing =>
          ing.name.toLowerCase().includes(state.searchText.toLowerCase()) 
        )
    }
}
  
export default connect(mapStateToProps)(IngredientList);

