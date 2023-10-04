import { useState, useEffect } from "react";
import ExpensesComponent from "../components/expensesComponent";
import AddExpense from "../components/AddExpense";
import Auth from "../utils/auth";
import { getSingleUser,updateBudget,findAllExpenses } from "../utils/API";

export default function Profile() {
  const [budget, setBudget] = useState();
  const [userInfo, setUserInfo] = useState(null);
  const currentUser = Auth.getProfile().data.username.username;
  console.log(Auth.getProfile());
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  
  useEffect(() => {
    async function fetchSingleUser() {
      try {
        const response = await getSingleUser(currentUser, token);
        if (response.ok) {
          const data = await response.json();
          setUserInfo(data);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchSingleUser();
  }, [currentUser,token]);

  
  async function handleUpdateBudget(){
  
    try {
    const response = await updateBudget(username,token,budget)
        if(response.ok){
            console.log("the budget was updated");
            
        }
    } catch (err) {
        console.error('There was a mistake updating the budget', err.message)
    }
    
  }
  
  console.log(userInfo);

  // Access the username property of userInfo or provide a default value
  const username = userInfo ? userInfo.username : "";

  return (
    <div>
      <div className="budget-container">
        <form onSubmit={handleUpdateBudget}>
          <h2>Enter your budget!</h2>
          <input
            type="number"
            id="budget"
            placeholder="Budget..."
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />

          <button className="btn btn-warning">Update</button>
        </form>
      </div>
      <div className="welcome-container mt-3">
        <div className="text-center">
          <h3 className="text-left  ">
            Current Budget: $<span className="budget-price">{userInfo?.budget}</span>
          </h3>
        </div>

        <div className="text-center">
          <h3>Welcome, {username}!</h3>
        </div>
      </div>
      <div className="expenses-container">
        <ExpensesComponent />
      </div>
      <div className="adding-expense">
        <AddExpense />
      </div>
    </div>
  );
}
