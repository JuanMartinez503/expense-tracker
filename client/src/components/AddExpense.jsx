import { useState } from "react";
import { createExpense } from "../utils/API";
import Auth from "../utils/auth";
export default function AddExpense() {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  async function handleNewExpenses() {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    const newExpense = {
      amount,
      name,
      createdAt:new Date(createdAt), 
      description,
      username: Auth.getProfile().data.username.username,
    };
    try {
      const response = await createExpense(newExpense, token);
      if (response.ok) {
        console.log("new expense was created");
        setAmount("");
        setDescription("");
        setName("");
        setCreatedAt("");
      }
    } catch (err) {
      console.log("there was an error", err);
    }
  }

  return (
    <div
      className="text-center
    "
    >
      <h3 className="text-center mb-3 text-white">Add Expense</h3>
      <div className="mb-3">*Required</div>

      <form action="" className="expenses-form">
        <div className="text-center expenses-form-input">
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="*Amount..."
          />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="*Name..."
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Description..."
          />
          <input type="date" 
          value={createdAt}
          onChange={(e)=>setCreatedAt(e.target.value)}
          />
        </div>
      </form>
      <button
        type="button"
        onClick={() => handleNewExpenses()}
        className="btn btn-primary"
      >
        Add
      </button>
    </div>
  );
}
