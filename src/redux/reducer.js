import {combineReducers} from "redux"

let initialState = {
  searchText: "",
  ingredients: [],
  selectedIngredients: [],
  disabled: false,
  currentUser: null,
  userIngredientRecipes: [],
  redirect: false,
  clickedRecipe: [],
  error: null
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

const selectedButtonsReducer = (state = initialState.disabled, action) => {
  switch (action.type) {
    case "SELECTED_INGREDIENT":
      return true
    case "DESELECTED_INGREDIENT":
      return false
    case "CLEAR_ALL_INGREDIENTS":
      return false
    default:
      return state
  }
}

const fetchedIngredientRecipesReducer = (state = initialState.userIngredientRecipes, action) => {
  switch (action.type) {
    case "FETCHED_SELECTED_RECIPES":
      return state = action.payload
    default:
      return state
  }
}

const redirectReducer = (state = initialState.redirect, action) => {
  switch (action.type) {
    case "FETCHED_SELECTED_RECIPES":  
      return true
    // case "FETCHED_USER_CLICKED_RECIPE":
    //   return true
    case "LOGIN":
      return true
    case "RESET_REDIRECT":
      return false
    default:
      return state
  }
}

//= initialState.currentUser
      // let newState = {...state, currentUser: {...state.currentUser, user: action.payload}}
      // return newState.currentUser
function currentUserReducer(state = initialState.currentUser, action){
  switch (action.type) {
    case "LOGIN":
      return state = action.payload
    case "FAVORITE_A_RECIPE":
      return {...state, favorites: [...state.favorites, action.payload]}
    case "UNFAVORITE_A_RECIPE":
      return {...state, favorites: state.favorites.filter(recipe => recipe.id !== action.payload)}
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

const errorReducer = (state = initialState.error, action) => {
  switch (action.type) {
    case "ERROR":
      return state = action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  ingredients: ingredientsReducer,
  searchText: searchTextReducer,
  selectedIngredients: selectedIngredientsReducer,
  disabled: selectedButtonsReducer,
  userIngredientRecipes: fetchedIngredientRecipesReducer,
  redirect: redirectReducer,
  clickedRecipe: fetchedUserClickedRecipe,
  error: errorReducer
})

export default rootReducer