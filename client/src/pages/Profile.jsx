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
               <div className="text-center">
                <h3 className="text-left  ">Current Budget: <br />$ <span className="budget-price">{'100'}</span></h3>
               </div>
                
       
            </div>
            <div className="expenses-container">
            <ExpensesComponent />
            </div>
            <div className="adding-expense">
                <AddExpense />
            </div>
            <div className="remaining-balance">
                <h3>Remaining Balance: $ <span>100</span></h3>
            </div>
        </div>
    )
}