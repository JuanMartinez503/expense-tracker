import { useState } from "react";
import { createExpense } from "../utils/API";
import Auth from "../utils/auth";
export default function AddExpense() {
  const [amount, setAmount]=useState()
  const [name, setName]= useState()
  const [description, setDescription]=useState()
  async function handleNewExpenses(e) {
    e.preventDefault()
    const token= Auth.loggedIn() ? Auth.getToken() : null 
    const newExpense = {
      amount,name, description, username:Auth.getProfile().data.username.username
    }
    try {
      const response = await createExpense(newExpense,token)
      if (response.ok){
        console.log('new expense was created');
      } 
    } catch (err) {
      console.log("there was an error",err);
    }

  }

  return (
    <div>
      <form action="" onSubmit={handleNewExpenses} className="expenses-form">
        <h4 className="text-center mb-3">Add Expense</h4>

        <div className="text-center expenses-form-input">
          <input value={amount} onChange={(e)=>setAmount(e.target.value)} type="number" placeholder="Amount..." />
          <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name..." />
          <input value={description} onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Description..." />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
}
