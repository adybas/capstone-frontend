import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import RecipeIngredients from './RecipeIngredients'
import { Link } from 'react-router-dom'

const Recipes = (props) => {
    // missedIngredients & usedIngredients are objects
    let {id, title, image, usedIngredientCount, missedIngredientCount, missedIngredients, usedIngredients} = props.recipe

    return (
        <>
            <Card className="ing-recipes text-block">
                <Card.Header className="ing-recipe-header " as={Link} to={`/recipes/${id}`}>{title}</Card.Header>
                <Card.Img src={`${image}`} variant="top" alt={`${image}`}/>
                <Card.Body>
                <Card.Subtitle className="total-time">
                    <span>Uses {missedIngredientCount} new ingredient(s)!</span>
                </Card.Subtitle>
                  
                    <span className='used-count'>Ingredients I Have: {usedIngredientCount}</span>
                        <ListGroup className="ing-list">
                            {usedIngredients.map(ing => <RecipeIngredients ingredient={ing} key={ing.id}/>)}
                        </ListGroup>
                    <span className='missed-count'>Ingredients I Need: {missedIngredientCount}</span>
                        <ListGroup variant="flush">
                            {missedIngredients.map(ing => <RecipeIngredients ingredient={ing} key={ing.id}/>)}
                        </ListGroup>
                  
                </Card.Body>
            </Card>
        </>
    )
}

export default Recipes
