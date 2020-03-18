import React from 'react'
import { connect } from 'react-redux'
import { fetchingUserClickedRecipe } from '../redux/actions'



class RecipeDetail extends React.Component {

    componentDidMount(){
        let id = this.props.routeProps.match.params.id
        this.props.recipe(id)
    }

    render(){
        //cannot descrture !!
    // let { vegetarian, vegan, glutenFree, dairyFree, weightWatcherSmartPoints, lowFodmap, preparationMinutes ,cookingMinutes ,sourceUrl, spoonacularSourceUrl, spoonacularScore, creditsText, sourceName, title, db_id, servings, readyInMinutes, image, summary, instructions } = this.props.clickedRecipe[0]
    console.log("****************************************************************************************************")
    console.log("Props of Recipe Detail", this.props)
    console.log("ClickedRecipe of Recipe Detail", this.props.clickedRecipe)

    return (
        <div>{this.props.clickedRecipe[0] ?
            <div>
            <div>
                {this.props.clickedRecipe[0].title}
            </div>
            <img src={`${this.props.clickedRecipe[0].image}`}></img>
            <div>
                Preparation Minutes: {this.props.clickedRecipe[0].preparationMinutes}
                Cooking Minutes: {this.props.clickedRecipe[0].cookingMinutes}
            </div>
            <div>
                {this.props.clickedRecipe[0].summary}
            </div> </div>: <div></div>}
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
        recipe: (id) => {dispatch(fetchingUserClickedRecipe(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail)
