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
  export const findAllExpenses=(username,token)=>{
    return fetch(`/api/users/${username}`,{
      method:'GET',
      headers:{
        'Content-Type':"application/json",
        authorization:`Bearer ${token}`
      },
      
    })
  }
  export const getSingleUser=(username,token)=>{
    return fetch(`/api/users/${username}`,{
      method:'GET',
      headers:{
        'Content-Type':"application/json",
        authorization:`Bearer ${token}`
      },
      
    })
  }
  export const updateBudget = (username, token, budget) => {
    return fetch(`/api/users/${username}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ budget }), // Wrap the budget in an object
    });
  };
  export const createExpense =(expense,token)=>{
    return fetch("/api/expenses",{
      method:"POST",
      headers:{"Content-Type":"application/json",
    authorization:`Bearer ${token}`
  },
  body:JSON.stringify(expense)
    })
  }

