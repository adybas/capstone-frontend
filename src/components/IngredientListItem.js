import React from "react";

class IngredientListItem extends React.Component {
    state = {
        selectedIngredients: []
    }
    
    handleClick(){

    }

    render(){
        return (
            <div className="content">
                <h2>{this.props.ingredient.name}</h2>
            </div>
        )
    }
}

export default IngredientListItem;