import { Link} from "react-router-dom";
import auth from "../utils/auth";

export default function ExpensesComponent({ expenses }) {
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
          -<span className="amount-money">{item.amount}</span>
        </p>
        <p>{item.name}</p>
        <p>{item.description}</p>
        <p>{item.createdAt}</p>
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
          Remaining Balance: $ <span>100</span>
        </h3>
      </div>
    </div>
  );
}
