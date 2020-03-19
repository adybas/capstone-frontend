import React from "react";
import { connect } from "react-redux";
import { fetchingUserClickedRecipe, favoritingRecipe } from "../redux/actions";
import { Card, Image, Icon, Popup, List } from "semantic-ui-react";

class RecipeDetail extends React.Component {
  componentDidMount() {
    let id = this.props.routeProps.match.params.id;
    this.props.recipe(id);
  }

  handleLike = () => {
    this.props.favoriteRecipe(
      this.props.clickedRecipe[0],
      this.props.currentUser
    );
  };

  render() {
    return (
      <div>
        {this.props.clickedRecipe[0] ? (
          <div>
            {this.props.currentUser ? (
              <Popup
                trigger={
                  <Icon
                    onClick={this.handleLike}
                    name="heart"
                    color="red"
                    size="large"
                    circular
                  />
                }
                content="Add Me to Your Favorites"
                position="top left"
              />
            ) : (
              <> </>
            )}
            <div>{this.props.clickedRecipe[0].title}</div>
            <img src={`${this.props.clickedRecipe[0].image}`}></img>
            <div>
              Preparation Minutes:{" "}
              {this.props.clickedRecipe[0].preparationMinutes}
              Cooking Minutes: {this.props.clickedRecipe[0].cookingMinutes}
            </div>
            <div>{this.props.clickedRecipe[0].summary}</div>{" "}
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
      dispatch(fetchingUserClickedRecipe(id));
    },
    favoriteRecipe: (recipe, user) => {
      dispatch(favoritingRecipe(recipe, user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail);
