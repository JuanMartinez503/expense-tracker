import React, { useState, useEffect } from "react";
import { createExpense } from "../utils/API";
import Auth from "../utils/auth";

export default function AddExpense() {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [createdAt, setCreatedAt] = useState(new Date().toISOString().split("T")[0]); // Initialize with current date
  const [expenseCreated, setExpenseCreated] = useState(null);
  

  async function handleNewExpenses(e) {
    e.preventDefault();
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    const newExpense = {
      amount,
      name,
      createdAt,
      description,
      username: Auth.getProfile().data.username.username,
    };

    try {
      const response = await createExpense(newExpense, token);
      if (response.ok) {
        setExpenseCreated("New expense was created");
        setAmount("");
        setDescription("");
        setName("");
        setCreatedAt(new Date().toISOString().split("T")[0]); // Reset createdAt to current date

        setTimeout(() => {
          setExpenseCreated(null);
        }, 2000);
      }
    } catch (err) {
      console.log("There was an error", err);
    }
  }

  // This effect will update the createdAt state when the component mounts
  useEffect(() => {
    setCreatedAt(new Date().toISOString().split("T")[0]);
  }, []);

  return (
    <div className="text-center">
      <h3 className="text-center mb-3 text-white">Add Expense</h3>
      <div className="mb-3">*Required</div>
      {expenseCreated && (
        <div className="alert text-center alert-primary">{expenseCreated}</div>
      )}

      <form action="" className="expenses-form" onSubmit={handleNewExpenses}>
        <div className="expenses-form-input">
          <label htmlFor="amount">*Amount:</label>
          <input
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="..."
            required
          />
        </div>
        <div>
          <label htmlFor="name">*Name:</label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="..."
            required
          />
        </div>
        <div>
          <label htmlFor="description"> Description:</label>
          <input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="..."
          />
        </div>
        <div>
          <label htmlFor="createdAt">Date:</label>
          <input
            id="createdAt"
            type="date"
            value={createdAt}
            onChange={(e) => setCreatedAt(e.target.value)}
          />
        </div>
        <div className="text-center w-100">
          <button
            type="submit"
            className="mt-3 btn btn-primary expenses-form-btn"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
