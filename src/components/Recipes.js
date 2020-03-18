import React from 'react'
import { connect } from 'react-redux'
import { Card, Image, Icon, Popup, List } from 'semantic-ui-react'
import RecipeIngredients from './RecipeIngredients'
import { fetchingUserClickedRecipe } from '../redux/actions'

const Recipes = (props) => {
    // missedIngredients & usedIngredients are objects
    let {id, title, image, usedIngredientCount, missedIngredientCount, missedIngredients, usedIngredients} = props.recipe

    const handleClick = () => {
        props.onClick(id)
    }

    return (
        <Card onClick={handleClick}>
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

const mapDispatchToProps = dispatch => {
    return {
        onClick: (recipe) => dispatch(fetchingUserClickedRecipe(recipe))
    }
}

export default connect(null, mapDispatchToProps)(Recipes)
