export const createUser = (user) => {
    return fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  };
  export const login = (user) => {
    return fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  };
  export const getSingleUser=(username,token)=>{
    return fetch(`/api/users/${username}`,{
      method:'GET',
      headers:{
        'Content-Type':"application/json",
        authorization:`Bearer ${token}`
      }
      
    })
  }
