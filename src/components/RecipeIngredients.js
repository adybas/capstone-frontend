import React from 'react'
import { ListGroup, Image } from 'react-bootstrap'

const RecipeIngredients = (props) => {
    // debugger
    return (
        <ListGroup.Item variant="flush">
            <Image thumbnail src={props.ingredient.image} alt={props.ingredient.name} variant="flush"/>
            <p>{props.ingredient.originalString}</p>
        </ListGroup.Item>
    )
}


export default RecipeIngredients
