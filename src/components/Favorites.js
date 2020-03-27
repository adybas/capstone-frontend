import React from 'react'
import { Link } from 'react-router-dom'


const Favorites = props => {
    return (
        <div className="recipe-card card">
            <Link to={`/recipes/${props.recipe.db_id}`}>
                <img className="recipe-card-image" src={`${props.recipe.image}`} alt={`${props.recipe.title}`} />
                <div class="card-img-overlay">
                    <h1 className="recipe-card-title">{props.recipe.title}</h1>
                </div>
            </Link> 
        </div>
    )
}

export default Favorites

// import { Card } from 'react-bootstrap'
            // <Card as={Link} to={`/recipes/${props.recipe.db_id}`} className="col">
            //     <Card.Header>{props.recipe.title}</Card.Header>
            //     <Card.Img src={`${props.recipe.image}`} variant="top" alt={`${props.recipe.image}`}/>
            // </Card>