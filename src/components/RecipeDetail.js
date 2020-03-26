import React from "react";
import { connect } from "react-redux";
import { fetchingUserClickedRecipe, favoritingRecipe, unfavoritingUserRecipe } from "../redux/actions";
import { OverlayTrigger, Button, Tooltip } from "react-bootstrap";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import vegetarian from '../assets/images/vegetarian.png'
import nonVegetarian from '../assets/images/nonVegetarian.png'
import vegan from '../assets/images/vegan.png'
import nonVegan from '../assets/images/nonVegan.png'
import dairyFree from '../assets/images/dairyFree.png'
import glutenFree from '../assets/images/glutenFree.png'
// import lowFodmap from '../assets/images/lowFodmap.png'


class RecipeDetail extends React.Component {
  componentDidMount() {
    let id = this.props.routeProps.match.params.id;
    this.props.recipe(id);
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
                <h3>{this.props.clickedRecipe[0].title}</h3>
              </div>
            </div>
            {/* <div className="text-center">{this.props.clickedRecipe[0].title}</div> */}
            <div>
              Preparation Minutes:{" "}
              {this.props.clickedRecipe[0].preparationMinutes}
              <p>Cooking Minutes: {this.props.clickedRecipe[0].cookingMinutes}</p>
            </div>

            <div dangerouslySetInnerHTML={{ __html: this.props.clickedRecipe[0].summary }}></div>
            <div> vegetarian ? {this.props.clickedRecipe[0].vegetarian ? <img src={vegetarian} /> : <img src={nonVegetarian} />} </div>
            <div> vegan ? {this.props.clickedRecipe[0].vegan ? <img src={vegan} /> : <img src={nonVegan} />} </div>
            <div> glutenFree ? {this.props.clickedRecipe[0].glutenFree ? <img src={glutenFree} /> : null} </div>
            <div> dairyFree ? {this.props.clickedRecipe[0].dairyFree ? <img src={dairyFree} /> : null} </div>
            {/* <div> lowFodmap ? {this.props.clickedRecipe[0].lowFodmap ? <img src={lowFodmap} /> : null}} </div> */}
            <div> weight watchers points ?{this.props.clickedRecipe[0].weightWatcherSmartPoints} </div>
            
            <div> servings ? {this.props.clickedRecipe[0].servings} </div>
            <div> sourceUrl ? {this.props.clickedRecipe[0].sourceUrl} </div>
            <div> spoonacularSourceUrl ? {this.props.clickedRecipe[0].spoonacularSourceUrl} </div>
            <div> sourceName ? {this.props.clickedRecipe[0].sourceName} </div>
            <div> instructions ? {this.props.clickedRecipe[0].instructions} </div>
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail);
