import React from "react";
import { connect } from "react-redux";
import { fetchingUserClickedRecipe, favoritingRecipe } from "../redux/actions";
import {  OverlayTrigger, Button, Tooltip } from "react-bootstrap";

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

  renderTooltip(props) {
    return <Tooltip {...props}>Add to Favorites</Tooltip>;
  }

  render() {
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
              <Button variant="success"> Add to Favs </Button>
            </OverlayTrigger>
            ) : (
              <span> </span>
            )}
            <div className="img-container">
              <img className="card-img-top" src={`${this.props.clickedRecipe[0].image}`}></img>
              <div className="text-block">
                <h3>{this.props.clickedRecipe[0].title}</h3>
              </div>
            </div>
            {/* <div className="text-center">{this.props.clickedRecipe[0].title}</div> */}
            <div>
              Preparation Minutes:{" "}
              {this.props.clickedRecipe[0].preparationMinutes}
              <p>Cooking Minutes: {this.props.clickedRecipe[0].cookingMinutes}</p>
            </div>
            // wite func that set innerHTML to this div
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
