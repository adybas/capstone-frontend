import React from "react";
import { connect } from "react-redux";
import { fetchingUserClickedRecipe, favoritingRecipe, unfavoritingUserRecipe, resetRedirect } from "../redux/actions";
import { OverlayTrigger, Button, Tooltip } from "react-bootstrap";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import vegetarian from '../assets/images/vegetarian.png'
import nonVegetarian from '../assets/images/nonVegetarian.png'
import vegan from '../assets/images/vegan.png'
import nonVegan from '../assets/images/nonVegan.png'
import dairyFree from '../assets/images/dairyFree.png'
import glutenFree from '../assets/images/glutenFree.png'
// import lowFodmap from '../assets/images/lowFodmap.png'
import spoonacularLogo from '../assets/images/spoonacular-logo.svg'


class RecipeDetail extends React.Component {
  componentDidMount() {
    let id = this.props.routeProps.match.params.id;
    this.props.recipe(id);
    this.props.resetRedirect()
  }

  handleLike = (event) => {
    if(event.target.classList.contains("btn-success")){
      event.target.classList.replace("btn-success", "btn-danger")
      event.target.innerText = "Favorited Already <3"
      this.props.favoriteRecipe(this.props.clickedRecipe[0], this.props.currentUser)
    } else {
      event.target.classList.replace("btn-danger", "btn-success")
      event.target.innerText = "Favorite Me <3" 
      this.props.unfavoriteRecipe(this.props.clickedRecipe[0], this.props.currentUser)
    }
  }

  renderTooltip(props) {
    return <Tooltip {...props}>Add to Favorites</Tooltip>;
  }

  handleBtnColor(){
   return 
  }


  render() {
   // debugger
    // let {vegetarian, vegan, glutenFree, dairyFree, weightWatcherSmartPoints, lowFodmap, preparationMinutes, cookingMinutes, sourceUrl, spoonacularSourceUrl, spoonacularScore, creditsText, sourceName, title, servings, readyInMinutes, image, summary, instructions } = this.props.clickedRecipe[0]
    return (
      <div className="container card mx-auto">
        {this.props.clickedRecipe[0] ? (
          <div>
            {this.props.currentUser ? (
              <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={this.renderTooltip}
            >
              <Button onClick={this.handleLike} variant={this.props.currentUser.favorites.find(recipe => recipe.db_id === parseInt(this.props.routeProps.match.params.id)) ? "danger" : "success"}> Favorite 
                 {/* < AiOutlineHeart onClick={this.handleLike} variant="success" /> */}
                  </Button>
            </OverlayTrigger>
            ) : (
              <span> </span>
            )}
            <div className="img-container">
              <img className="card-img-top" src={`${this.props.clickedRecipe[0].image}`}></img>
              <div className="text-block text-block-recipe">
                <h1>{this.props.clickedRecipe[0].title}</h1>
              </div>
            </div>

            <div className="dietary-block">
              <div className="row">
                <div className="col-sm"> {this.props.clickedRecipe[0].vegetarian ? <img  src={vegetarian} /> : <img  src={nonVegetarian} />} </div>
                <div className="col-sm"> {this.props.clickedRecipe[0].vegan ? <img  src={vegan} /> : <img  src={nonVegan} />}</div>
                <div className="col-sm"> {this.props.clickedRecipe[0].glutenFree ? <img  src={glutenFree} /> : null} </div>
                <div className="col-sm"> {this.props.clickedRecipe[0].dairyFree ? <img  src={dairyFree} /> : null} </div>
                {/* <div className="col-sm"> lowFodmap ? {this.props.clickedRecipe[0].lowFodmap ? <img src={lowFodmap} /> : null}} </div> */}
              </div>
            </div>
            
            <div className="instructions">
            <div className="row">
              <div className="col"><hr/></div>
              <div className="col-auto"><h2> Instructions:</h2> </div>
              <div className="col"><hr/></div>
            </div>
              <p> {this.props.clickedRecipe[0].instructions} </p>
            </div>

          <div className="row">
            <div className="col-sm-8">
              <h5 className="total-time">Summary:</h5>

              {/*used dangerouslySetInnerHTML to display inner HTML from the API 
                could not use <Fragment> from React as best practice bc the data is not from my backend, but an outside API
                Using html-react-parser would also result in this function being as hacky as using dangerouslySetInnerHTML, so I left is 
                as is for now until I can figure out a better solution -- XSS vulnerabilities!-- */}
              <div dangerouslySetInnerHTML={{ __html: this.props.clickedRecipe[0].summary }}></div>
            </div>
            <div className="col-sm-4"><p>
              <div className="time-block">
                <h5 className="total-time">Total Time: {this.props.clickedRecipe[0].preparationMinutes + this.props.clickedRecipe[0].cookingMinutes} </h5>
                <div>Preparation Minutes: {this.props.clickedRecipe[0].preparationMinutes} </div>
                <div>Cooking Minutes: {this.props.clickedRecipe[0].cookingMinutes}</div>
              </div>

              <div>
                <h6> Servings: {this.props.clickedRecipe[0].servings} </h6>
              </div>

              <div> 
                <h6> Weight Watchers Points: {this.props.clickedRecipe[0].weightWatcherSmartPoints} </h6>
              </div></p>

              <div> <p> 
                <a href={`${this.props.clickedRecipe[0].sourceUrl}`}> Original Recipe </a>
                by: {this.props.clickedRecipe[0].sourceName}</p>
                <img className="img-fluid spoon-logo" src={spoonacularLogo} alt="spoonacular logo"></img><a href={`${this.props.clickedRecipe[0].spoonacularSourceUrl}`}> Spoonacular Recipe </a>
              </div>
            </div>
            </div>

          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    clickedRecipe: state.clickedRecipe,
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    recipe: id => {
      dispatch(fetchingUserClickedRecipe(id))
    },
    favoriteRecipe: (recipe, user) => {
      dispatch(favoritingRecipe(recipe, user))
    }, 
    unfavoriteRecipe: (recipe, user) => {
      dispatch(unfavoritingUserRecipe(recipe, user))
    },
    resetRedirect: () => {
      dispatch(resetRedirect())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail);
