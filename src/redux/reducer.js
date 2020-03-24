import {combineReducers} from "redux"

let initialState = {
  searchText: "",
  ingredients: [],
  selectedIngredients: [],
  currentUser: null,
  userIngredientRecipes: [],
  redirect: false,
  favorites: [],
  clickedRecipe: [],
}

const searchTextReducer = (state = initialState.searchText, action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TEXT":
      return action.payload
    default:
      return state;
  }
};

const ingredientsReducer = (state = initialState.ingredients, action) => {
  switch (action.type) {
    case "FETCHED_INGREDIENTS":
      return action.payload
    default:
      return state
  }
}

const selectedIngredientsReducer = (state = initialState.selectedIngredients, action) => {
  switch (action.type) {
    case "SELECTED_INGREDIENT":
      return [...state, action.payload]
    case "DESELECTED_INGREDIENT":
      return [...state].filter(ing => ing !== action.payload)
    case "CLEAR_ALL_INGREDIENTS":
      return [...state] = []
    default:
      return state
  }
}

const fetchedIngredientRecipesReducer = (state = initialState.userIngredientRecipes, action) => {
  switch (action.type) {
    case "FETCHED_SELECTED_RECIPES":
      return [...state, action.payload].flat()
    default:
      return state
  }
}

const redirectReducer = (state = initialState.redirect, action) => {
  switch (action.type) {
    case "FETCHED_SELECTED_RECIPES":  
      return true
    case "LOGIN":
      return true
    case "RESET_REDIRECT":
      return false
    default:
      return state
  }
}

const favoriteRecipesReducer = (state = initialState.favorites, action) => {
  switch (action.type) {
    case "FAVORITE_A_RECIPE":
      return [...state, action.payload].flat()
    case "UNFAVORITE_A_RECIPE":
      return [...state].filter(recipe => recipe !== action.payload)
    default:
      return state
  }
}

//= initialState.currentUser
function currentUserReducer(state = initialState.currentUser, action){
  switch (action.type) {
    case "LOGIN":
      // let newState = {...state, currentUser: {...state.currentUser, user: action.payload}}
      // return newState.currentUser
      return state = action.payload
    case "LOGOUT":
      return state = null
    default:
      return state
  }
}

const fetchedUserClickedRecipe = (state = initialState.clickedRecipe, action) => {
  switch (action.type) {
    case "FETCHED_USER_CLICKED_RECIPE":
      let newState = [...state, action.payload].flat()
      return newState.filter(recipe => recipe.id === action.payload.id)
    default:
      return state
  }
}

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  ingredients: ingredientsReducer,
  searchText: searchTextReducer,
  selectedIngredients: selectedIngredientsReducer,
  userIngredientRecipes: fetchedIngredientRecipesReducer,
  redirect: redirectReducer,
  favoriteRecipes: favoriteRecipesReducer,
  clickedRecipe: fetchedUserClickedRecipe
})

export default rootReducer