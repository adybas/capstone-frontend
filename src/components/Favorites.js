import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'


const Favorites = props => {
    return (
        
            <Card as={Link} to={`/recipes/${props.recipe.db_id}`} className="col">
                <Card.Header>{props.recipe.title}</Card.Header>
                <Card.Img src={`${props.recipe.image}`} variant="top" alt={`${props.recipe.image}`}/>
            </Card>
    
    )
}

export default Favorites

          {/* <Link to={`/recipes/${props.recipe.db_id}`}>
                <h1>{props.recipe.title}</h1>
                <img src={`${props.recipe.image}`} alt={`${props.recipe.title}`} />
            </Link> */}