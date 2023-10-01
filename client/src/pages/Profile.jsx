import { useState } from "react"
import ExpensesComponent from "../components/expensesComponent"
import AddExpense from "../components/AddExpense"
export default function Profile(){
const [budget, setBudget ]= useState()
    return(
        <div>
            <div className="budget-container">
     
                <form action="">
                    <h2>Enter your budget!</h2>
                <input type= "number" id="budget"
                placeholder="Budget..."
                value={budget}
                onChange={e=>setBudget(e.target.value)}/>
                
                <button className="btn btn-warning">Update</button>
                </form>
               
          
       
            </div>
            <div className="welcome-container mt-3">
                <div className="text-center">
                <h3 className="text-left  ">Current Budget: $<span className="budget-price">{'100'}</span></h3>
               </div>

                <div className="text-center">
                    <h3>Welcome,user</h3>
                </div>
                
                </div>
            <div className="expenses-container">
            <ExpensesComponent />
            </div>
            <div className="adding-expense">
                <AddExpense />
            </div>
        
        </div>
    )
}