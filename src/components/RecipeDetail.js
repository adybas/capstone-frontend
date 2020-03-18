import React from 'react'
import { connect } from 'react-redux'
import {resetRedirect} from '../redux/actions'


class RecipeDetail extends React.Component {

    componentDidMount(){
        this.props.redirect()
    }

    render(){
    let { vegetarian, vegan, glutenFree, dairyFree, weightWatcherSmartPoints, lowFodmap, preparationMinutes ,cookingMinutes ,sourceUrl, spoonacularSourceUrl, spoonacularScore, creditsText, sourceName, title, db_id, servings, readyInMinutes, image, summary, instructions } = this.props
    return (
        <div>
            <div>
                {title}
            </div>
            <img src={`${image}`}></img>
            <div>
                Preparation Minutes: {preparationMinutes}
                Cooking Minutes: {cookingMinutes}
            </div>
            <div>
                {summary}
            </div>
        </div>
    )
}}

const mapStateToProps = state => {
    return {
        clickedRecipe: state.clickedRecipe
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        redirect: () => {dispatch(resetRedirect())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail)
