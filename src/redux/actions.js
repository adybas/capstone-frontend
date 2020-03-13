  function signingUp(form){
    debugger
    const {first_name, last_name, username, password} = form
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
  
  function login(user){
    return { type: 'LOGIN', payload: user  } 
  }

  export {login, signingUp}
  