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
        if(user.message){
          dispatch(errorHandling(user.message[0]))
        } else {
          dispatch(login(user));
        }
      })
  }
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

function errorHandling(error) {
  return { type: "ERROR", payload: error}
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
  return { type: "SELECTED_INGREDIENT", payload: value };
}

function userDeselectedIngrdient(ingredient) {
  return { type: "DESELECTED_INGREDIENT", payload: ingredient}
}

function userClearAllIngredients(){
  return { type: "CLEAR_ALL_INGREDIENTS"}
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

// fetching from API the specific recipe
function fetchingUserClickedRecipe(id) {
  return dispatch => {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_APIKEY}`
    )
      .then(res => res.json())
      .then(recipe => {
        dispatch(fetchedUserClickedRecipe(recipe));
      })
  }
}

function fetchedUserClickedRecipe(recipe) {
  return { type: "FETCHED_USER_CLICKED_RECIPE", payload: recipe };
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
                dispatch(favoriteUserRecipe(favRecipe))
            })
        })
  }
}

function favoriteUserRecipe(favoritedRecipe) {
  return { type: "FAVORITE_A_RECIPE", payload: favoritedRecipe };
}

function unfavoritingUserRecipe(recipe, user){
  let recipe_id = user.favorites.find(rec => rec.db_id === recipe.id).id
  let favorited = {recipe_id: recipe_id, user_id: user.user.id, favorited: false}
    fetch("http://localhost:3000/user_recipes/destroy", {
      method: "POST",
      headers: {
          "Content-Type" : "application/json",
          "Accept" : "application/json"
      },
      body: JSON.stringify(favorited)})
      return { type: "UNFAVORITE_A_RECIPE", payload: recipe_id }
}


//add params that API accepts like: diets, meal types, cuisines, or intolerances
function fetchingRandomRecipe() {
  return dispatch => {
    fetch(
      `https://api.spoonacular.com/recipes/random?number=1&apiKey=${process.env.REACT_APP_APIKEY}`
    )
      .then(res => res.json())
      .then(recipe => {
        dispatch(fetchedUserClickedRecipe(recipe["recipes"][0]));
      })
  }
}


export {
  signingUp,
  loggingIn,
  fetchingIngredients,
  changeSearchText,
  userSelectedIngredients,
  userDeselectedIngrdient,
  userClearAllIngredients,
  fetchingUserSelectedIngredients,
  resetRedirect,
  fetchingUserClickedRecipe,
  favoritingRecipe,
  unfavoritingUserRecipe,
  fetchingRandomRecipe
}

//make a POST for favs
//vegetarian, vegan, glutenFree, dairyFree, weightWatcherSmartPoints, lowFodmap, preparationMinutes, cookingMinutes, sourceUrl, spoonacularSourceUrl, spoonacularScore, creditsText, sourceName, title, db_id, servings, readyInMinutes, image, summary, instructions