import React from "react";

const IngredientListItem = props => (
    <div className="content">
        <h2>{props.ingredient.name}</h2>
    </div>
)

export default IngredientListItem;