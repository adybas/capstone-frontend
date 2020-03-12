import {combineReducers} from "redux"

function currentUserReducer(state = null, action){
  switch (action.type) {
    case "LOGIN":
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({
  value: currentUserReducer
})

export default rootReducer