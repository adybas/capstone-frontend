import {combineReducers} from "redux"

let initialState = {
  searchText: "",
  ingredients: [],
  selectedIngredients: [],
  currentUser: null,
  userIngredientRecipes: [],
  redirect: false
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
    case "SELECTED_INGREDIENTS":
      return [...state, action.payload]
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
    case "RESET_REDIRECT":
      return false
    default:
      return state
  }
}


function currentUserReducer(state = initialState.currentUser, action){
  switch (action.type) {
    case "LOGIN":
      return state = action.payload
    case "LOGOUT":
      return state = null
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
  redirect: redirectReducer
})

export default rootReducer
