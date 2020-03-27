import React from "react";
import {connect} from 'react-redux'
import {userSelectedIngredients} from '../redux/actions'

// MAKE FUNCTIONAL 

class IngredientListItem extends React.Component {
    
    handleClick = (event) => {
        this.props.onSelect(this.props.ingredient.name)
        event.target.setAttribute("disabled", this.props.disabled)
    }

    render(){
        return (
            <div className="content">
               <li> <button className="btn btn-info btn-md"onClick={this.handleClick} disabled={this.props.selectedIngredients.find(ing => ing === this.props.ingredient.name)}> {this.props.ingredient.name}</button></li>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        disabled: state.disabled,
        selectedIngredients: state.selectedIngredients
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onSelect: (ingredients) => dispatch(userSelectedIngredients(ingredients))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientListItem)