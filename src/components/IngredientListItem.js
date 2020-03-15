import React from "react";
import { Link } from "react-router-dom";

const IngredientListItem = props => (
//   <Link className="item" to={`/paintings/${props.painting.id}`}>
    <div className="content">
      <h2>{props.ingredient.name}</h2>
    </div>
//   </Link>
);

export default IngredientListItem;