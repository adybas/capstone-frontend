  function signingUp({first_name, last_name, username, password}){
    // const {first_name, last_name, username, password} = form
    return (dispatch) => {
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify({first_name, last_name, username, password})
        }).then(res => res.json())
          .then(user => {
            dispatch(login(user))
        })
    }
  }

  function loggingIn(){ //fetch to find user in DB
    return (dispatch) => {
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify({})
        }).then(res => res.json())
          .then(user => {
            dispatch(login(user))
        })
    }
  }
  
  function login(user){
    return { type: 'LOGIN', payload: user  } 
  }

  function fetchedIngredients(ingredients) {
    return {type: "FETCHED_INGREDIENTS", payload: ingredients}
  }
  
  function fetchingIngredients() {
    return (dispatch) => {
      fetch("http://localhost:3000/ingredients")
      .then(res => res.json())
      .then(ingredients => {
        dispatch(fetchedIngredients(ingredients))
      })
    }
  }

  function changeSearchText(value) {
    return { type: "CHANGE_SEARCH_TEXT", payload: value };
  }

  function userSelectedIngredients(value) {
    return { type: "SELECTED_INGREDIENTS", payload: value };
  }
  

  export {login, signingUp, loggingIn, fetchingIngredients, changeSearchText, userSelectedIngredients}
  