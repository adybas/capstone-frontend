import React from 'react'
import { Link } from 'react-router-dom'


const Favorites = props => {
    return (
        <div>
            <Link to={`/recipes/${props.recipe.db_id}`}>
                <h1>{props.recipe.title}</h1>
                <img src={`${props.recipe.image}`} alt={`${props.recipe.title}`} />
            </Link>
        </div>
    )
}

export default Favorites
