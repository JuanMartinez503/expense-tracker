import { useState } from "react"
import ExpensesComponent from "../components/expensesComponent"
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
               <div >
                <h2 className="text-center">Your Budget is: $<span>{'100'}</span></h2>
               </div>
                
       
            </div>
            <div className="expenses-container">
            <ExpensesComponent />
            </div>
        </div>
    )
}