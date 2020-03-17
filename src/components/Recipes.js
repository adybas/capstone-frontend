import React from 'react'
import { connect } from 'react-redux'
import { Card, Image, Icon, Popup, List } from 'semantic-ui-react'

const Recipes = (props) => {
    // missedIngredients & usedIngredients are objects
    let {id, title, image, usedIngredientCount, missedIngredientCount, missedIngredients, usedIngredients} = props.recipe
    return (
        <Card>
            <Popup
                trigger={<Icon name='heart' color='red' size='large' circular />}
                content='Add Me to Your Favorites'
                position='top left'
            />
            <Image src={`${image}`} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>
                <span className='used-count'>Ingredients I Have: {usedIngredientCount}</span>
                <span className='missed-count'>Ingredients I Need:{missedIngredientCount}</span>
            </Card.Meta>
            <Card.Description>
                <List>
                    {missedIngredients.forEach(ing => 
                        //  debugger
                        <List.Item>
                        <Image avatar src={`${ing.originalString}`} />
                        <List.Content>
                            <List.Header as='a'>{ing.name}</List.Header>
                        </List.Content>
                    </List.Item> )}
                </List>
            </Card.Description>
            </Card.Content>
        </Card>
    )
}

const mapStateToProps = (state) => {
    
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes)
