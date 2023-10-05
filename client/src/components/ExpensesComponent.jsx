import { Link } from "react-router-dom";
import auth from "../utils/auth";

export default function ExpensesComponent({ expenses, budget }) {
  const calculateRemainingBudget = () => {
    if (!expenses || expenses.length === 0) {
      return budget; // If no expenses, remaining budget is the same as the initial budget
    }

    // Calculate the total expense amount by summing up all expense amounts
    const totalExpenseAmount = expenses.reduce(
      (total, item) => total + item.amount,
      0
    );

    // Calculate the remaining budget by subtracting the total expense amount from the initial budget
    const remainingBudget = budget - totalExpenseAmount;

    return remainingBudget;
  };

  const remainingBudget = calculateRemainingBudget();
  const formatDate = (date) => {
    const options = { year: 'numeric', day: 'numeric', month: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const loopTest = () => {
    if (!expenses) {
      // Return some default content or loading indicator when expenses are undefined
      return <p>Loading expenses...</p>;
    }

    return expenses.map((item) => (
      <Link
        to={`/${auth.getProfile().data.username.username}/${item._id}`}
        className="expense-row"
        key={item._id}
      >
        <p>
          - <span className="amount-money">{item.amount}</span>
        </p>
        <p>{item.name}</p>
        <p>{item.description}</p>
        <p>{formatDate(item.createdAt)}</p>
      </Link>
    ));
  };

  return (
    <div>
      <div className="description-container">
        <h3>Amount</h3>
        <h3>Name</h3>
        <h3>Description</h3>
        <h3>Date</h3>
      </div>
      <div className="expenses-loop">{loopTest()}</div>
      <div className="remaining-balance mb-3">
        <h3>
          Remaining Balance: $ <span>{remainingBudget<0 ?(
            <span id="exceeded">
              Budget exceeded!
            </span>
          ):(
            <span>{remainingBudget}</span>
          )}</span>
        </h3>
      </div>
    </div>
  );
}
