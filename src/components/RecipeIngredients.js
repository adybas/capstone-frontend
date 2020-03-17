import React from 'react'
import { List, Image } from 'semantic-ui-react'

const RecipeIngredients = (props) => {
    console.log("RecipeIngredients", props, props.ingredient)
    return (
        <List.Item>
            <Image avatar src={`${props.ingredient.image}`} />
            <List.Content>
                <List.Header>{props.ingredient.originalString}</List.Header>
            </List.Content>
        </List.Item> 
    )
}


export default RecipeIngredients
