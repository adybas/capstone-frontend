import React from 'react'
import { connect } from 'react-redux'
import { Card, Image, Icon, Popup, List } from 'semantic-ui-react'
import RecipeIngredients from './RecipeIngredients'

const Recipes = (props) => {
    // missedIngredients & usedIngredients are objects
    let {id, title, image, usedIngredientCount, missedIngredientCount, missedIngredients, usedIngredients} = props.recipe
    console.log(missedIngredients)
    console.log(usedIngredients)
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
            </Card.Content>

            <Card.Meta>
                <span>Uses {missedIngredientCount} new ingredients</span>
            </Card.Meta>

            <Card.Content>
                <Card.Description>
                <span className='used-count'>Ingredients I Have: {usedIngredientCount}</span>
                    <List>
                        {usedIngredients.map(ing => <RecipeIngredients ingredient={ing} key={ing.id}/>)}
                    </List>
                </Card.Description>

                <Card.Description>
                <span className='missed-count'>Ingredients I Need: {missedIngredientCount}</span>
                    <List>
                        {missedIngredients.map(ing => <RecipeIngredients ingredient={ing} key={ing.id}/>)}
                    </List>
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

const mapStateToProps = (state) => {
    // return {
    //     redirect: state.redirect
    // }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes)
