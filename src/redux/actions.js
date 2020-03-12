  function login(user){
    return { type: 'LOGIN', payload: user  } 
  }

  export {login}