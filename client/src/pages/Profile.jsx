import React, { useState, useEffect } from "react";
import ExpensesComponent from "../components/ExpensesComponent";
import AddExpense from "../components/AddExpense";
import Auth from "../utils/auth";
import { getSingleUser, updateBudget } from "../utils/API";

export default function Profile() {
  const [budget, setBudget] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const currentUser = Auth.getProfile().data.username.username;
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
  }, [userInfo]);

  async function handleUpdateBudget(e) {
    e.preventDefault();
    try {
      const response = await updateBudget(currentUser, token, budget);
      if (response.ok) {
        console.log("The budget was updated");
        // You can update the userInfo here if needed
      }
    } catch (err) {
      console.error("There was a mistake updating the budget", err.message);
    }
  }
  

  // Access the username property of userInfo or provide a default value
  const username = userInfo ? userInfo.username : "";

  return (
    <div>
      <div className="budget-container">
        <form onSubmit={handleUpdateBudget}>
          <h2 >Enter your budget!</h2>
          <input
            type="number"
            id="budget"
            placeholder="Budget..."
            value={budget || ""}
            onChange={(e) => setBudget(e.target.value)}
          />
          <button className="btn btn-warning" type="submit">
            Update
          </button>
        </form>
      </div>
      <div className="welcome-container mt-3">
        <div className="text-center">
          <h3 className="text-left  ">
            Current Budget: $
            <span className="budget-price">{userInfo?.budget.toLocaleString()}</span>
          </h3>
        </div>

        <div className="text-center">
          <h3>Welcome, {username}!</h3>
        </div>
      </div>
      {userInfo?.expenses.length===0 && userInfo.expenses ? (
        <h2 className="text-center dark-bg p-3 m-3">No Expenses!</h2 >

    
      ): (     <div className="expenses-container">
      <ExpensesComponent expenses={userInfo?.expenses} budget={userInfo?.budget} />
    </div>
      )}
    
      <div className="adding-expense">
        <AddExpense />
      </div>
    </div>
  );
}
