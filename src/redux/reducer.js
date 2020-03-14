import {combineReducers} from "redux"

let initialState = {
  searchText: "",
  ingredients: []
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
  debugger
  switch (action.type) {
    case "FETCHED_INGREDIENTS":
      return action.payload
    default:
      return state
  }
}


function currentUserReducer(state = null, action){
  switch (action.type) {
    case "LOGIN":
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({
  value: currentUserReducer,
  ingredients: ingredientsReducer,
  searchText: searchTextReducer
})

export default rootReducer
