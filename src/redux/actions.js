// signing up for the first time
function signingUp({ first_name, last_name, username, password }) {
  return dispatch => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ first_name, last_name, username })
    })
      .then(res => res.json())
      .then(user => {
        dispatch(login(user));
      });
  };
}

//logging into the app again
function loggingIn({ username, password }) {
  //fetch to find user in DB
  return dispatch => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ username })
    })
      .then(res => res.json())
      .then(user => {
        dispatch(login(user));
      });
  };
}

function login(user) {
  return { type: "LOGIN", payload: user };
}

function fetchedIngredients(ingredients) {
  return { type: "FETCHED_INGREDIENTS", payload: ingredients };
}

//fetching ingredients stored in db/seed
function fetchingIngredients() {
  return dispatch => {
    fetch("http://localhost:3000/ingredients")
      .then(res => res.json())
      .then(ingredients => {
        dispatch(fetchedIngredients(ingredients));
      });
  };
}

function changeSearchText(value) {
  return { type: "CHANGE_SEARCH_TEXT", payload: value };
}

function userSelectedIngredients(value) {
  return { type: "SELECTED_INGREDIENTS", payload: value };
}

//fetching to API for 2 recipes
function fetchingUserSelectedIngredients(ingredientsString) {
  return dispatch => {
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsString}&number=2&limitLicense=false&ignorePantry=true&apiKey=${process.env.REACT_APP_APIKEY}`
    )
      .then(res => res.json())
      .then(ingredients => {
        dispatch(fetchedUserRecipes(ingredients));
      });
  };
}

function fetchedUserRecipes(recipes) {
  return { type: "FETCHED_SELECTED_RECIPES", payload: recipes };
}

function resetRedirect() {
  return { type: "RESET_REDIRECT" };
}

function favoritingRecipe({vegetarian, vegan, glutenFree, dairyFree, weightWatcherSmartPoints, lowFodmap, preparationMinutes, cookingMinutes, sourceUrl, spoonacularSourceUrl, spoonacularScore, creditsText, sourceName, title, id, servings, readyInMinutes, image, summary, instructions}, user) {
  return (dispatch) => {
    fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
          "Content-Type" : "application/json",
          "Accept" : "application/json"
      },
      body: JSON.stringify({vegetarian, vegan, glutenFree, dairyFree, weightWatcherSmartPoints, lowFodmap, preparationMinutes, cookingMinutes, sourceUrl, spoonacularSourceUrl, spoonacularScore, creditsText, sourceName, title, db_id: id, servings, readyInMinutes, image, summary, instructions})
      }).then(res => res.json())
      .then( favRecipe => {
      let favorited = {recipe_id: favRecipe.id, user_id: user.user.id, favorite: true}
          fetch("http://localhost:3000/user_recipes", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body: JSON.stringify(favorited)
            }).then(res => res.json())
              .then(favoritedRecipe => {
                dispatch(favoriteUserRecipe(favoritedRecipe))
            })
        })
  }
}

// fetching from API the specific recipe
function fetchingUserClickedRecipe(id) {
  return dispatch => {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_APIKEY}`
    )
      .then(res => res.json())
      .then(recipe => {
        dispatch(fetchedUserClickedRecipe(recipe));
      });
  };
}

function favoriteUserRecipe(favoritedRecipe) {
  return { type: "FAVORITE_A_RECIPE", payload: favoritedRecipe };
}

function unfavoriteUserRecipe(recipe) {
  return { type: "UNFAVORITE_A_RECIPE", payload: recipe };
}

function fetchedUserClickedRecipe(recipe) {
  return { type: "FETCHED_USER_CLICKED_RECIPE", payload: recipe };
}

export {
  signingUp,
  loggingIn,
  fetchingIngredients,
  changeSearchText,
  userSelectedIngredients,
  fetchingUserSelectedIngredients,
  resetRedirect,
  fetchingUserClickedRecipe,
  favoritingRecipe
};

//make a POST for favs
//vegetarian, vegan, glutenFree, dairyFree, weightWatcherSmartPoints, lowFodmap, preparationMinutes, cookingMinutes, sourceUrl, spoonacularSourceUrl, spoonacularScore, creditsText, sourceName, title, db_id, servings, readyInMinutes, image, summary, instructions