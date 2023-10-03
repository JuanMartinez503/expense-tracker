import { useState,useEffect } from "react"
import ExpensesComponent from "../components/expensesComponent"
import AddExpense from "../components/AddExpense"
import Auth from "../utils/auth"
import { getSingleUser } from "../utils/API"
export default function Profile(){
const [budget, setBudget ]= useState()
const [userInfo, setUserInfo]=useState()
useEffect(()=>{
    const currentUser= Auth.getProfile().data.username.username
const token = Auth.loggedIn()? Auth.getToken():null
console.log(token);
    async function fetchSingleUser(){
         const response = await getSingleUser(currentUser,token)
         if (response.ok){
            const data= await response.json()
            setUserInfo(data)
         } else{
            console.error('there was am error')
         }

    }
    fetchSingleUser()
    console.log(userInfo);
}

,

[])

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
                    <h3>Welcome, {Auth.getProfile().data.username.username}!</h3>
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