import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import auth from "../utils/auth";
import { singleExpense } from "../utils/API";

export default function Expenses() {
  const { username, expensesId } = useParams();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  console.log(expensesId);
  const [expense, setExpense] = useState({}); // Initialize to null
  const token = auth.loggedIn() ? auth.getToken() : null;

  useEffect(() => {
    async function fetchSingleExpense() {
      try {
        const response = await singleExpense(expensesId, token);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setExpense(data);

          // Set the initial state for name, amount, and description
          setName(data.name|| "");
          setAmount(data.amount || "");
          setDescription(data.description || "");
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchSingleExpense();
  }, []);

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
      <form action="">
        <div className="expense-update">
          {!expense ? (
            <div>Loading...</div>
          ) : (
            <>
              <input type="number" value={amount} onChange={handleAmount}/>
              <input type="text" value={name} onChange={handleName}/>
              <input type="text" value={description} onChange={handleDescription} />
            </>
          )}
        </div>

        <div className="update-delete-btn text-center mt-2">
          <button className="btn btn-warning">Update</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </form>
    </div>
  );
}
