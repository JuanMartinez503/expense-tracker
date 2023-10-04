import { useParams } from "react-router-dom";

export default function Expenses() {
  const {username,expenseId}=useParams()
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
        <input type="number" placeholder="this holds the amount" />
        <input type="text" placeholder="this holds the name" />
        <input type="text" />
      </div>
      <div className="update-delete-btn text-center mt-2">
        <button className="btn btn-warning">Update</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}
