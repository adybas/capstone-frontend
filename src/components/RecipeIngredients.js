import React from 'react'
import { connect } from 'react-redux'
import { List, Image } from 'semantic-ui-react'

const RecipeIngredients = (props) => {
    console.log("RecipeIngredients", props, props.ingredient)
    return (
        <List.Item>
            <Image avatar src={`${props.ingredient.originalString}`} />
            <List.Content>
                <List.Header as='a'>{props.ingredient.name}</List.Header>
            </List.Content>
        </List.Item> 
    )
}

const mapStateToProps = (state) => {
    
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeIngredients)
