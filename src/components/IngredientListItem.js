import React from "react";
import {connect} from 'react-redux'
import {userSelectedIngredients} from '../redux/actions'

class IngredientListItem extends React.Component {
    
    handleClick = () => {
        this.props.onSelect(this.props.ingredient.name)
    }

    render(){
        console.log("Inside IngListItem", this.props)

        return (
            <div className="content">
                <button onClick={this.handleClick}>{this.props.ingredient.name}</button>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onSelect: (ingredients) => dispatch(userSelectedIngredients(ingredients))
    }
}

export default connect(null, mapDispatchToProps)(IngredientListItem)