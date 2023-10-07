import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import auth from "../utils/auth";
import { singleExpense, updateExpense, deleteExpense } from "../utils/API";

export default function Expenses() {
  const { username, expensesId } = useParams();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  
  const [expense, setExpense] = useState({}); // Initialize to null
  const token = auth.loggedIn() ? auth.getToken() : null;

  useEffect(() => {
    async function fetchSingleExpense() {
      try {
        const response = await singleExpense(expensesId, token);
        if (response.ok) {
          const data = await response.json();
          
          setExpense(data);

          // Set the initial state for name, amount, and description
          setName(data.name || "");
          setAmount(data.amount || "");
          setDescription(data.description || "");
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchSingleExpense();
  }, []);

  async function handleUpdatedExpense() {
    const updatedExpense = { name, amount, description };
    try {
      const response = await updateExpense(updatedExpense, expensesId, token);
      if (response.ok) {
        console.log("Expense was updated successfully");
        window.location.replace(`/profile/${auth.getProfile().data.username.username}`);
      }
    } catch (err) {
      console.error(err);
    }
  }
  async function handleDeleteExpense() {
    try {
      const response = await deleteExpense(username, expensesId, token);
      if (response.ok) {
        console.log("Expense was deleted successfully");
        window.location.replace(`/profile/${auth.getProfile().data.username.username}`);
      }
    } catch (err) {
      console.error(err);
    }
  }

  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleAmount = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
  };
  const handleDescription = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  return (
    <div>
      <div>
        <div className="description-container">
          <h3>Amount</h3>
          <h3>Name</h3>
          <h3>Description</h3>
        </div>
      </div>

      <div className="expense-update">
        {!expense ? (
          <div>Loading...</div>
        ) : (
          <>
            <input type="number" value={amount} onChange={handleAmount} />
            <input type="text" value={name} onChange={handleName} />
            <input
              type="text"
              value={description}
              onChange={handleDescription}
            />
          </>
        )}
      </div>

      <div className="update-delete-btn text-center mt-2">
        <button
          className="btn btn-warning"
          onClick={() => handleUpdatedExpense()}
        >
          Update
        </button>
        <button
          className="btn btn-danger"
          onClick={() => handleDeleteExpense()}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
