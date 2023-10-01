import { Link } from "react-router-dom";
export default function ExpensesComponent() {
    const loopTest = () => {
      const data = [
        { amount: "$100", name: "Expense 1", description: "Description 1", date: "2023-09-29" },
        { amount: "$200", name: "Expense 2", description: "Description nAFDJJFAKDKSKDSMMADVMDSKDCSKKCKSXC KCSKKCSSKKCSKKCSKJCJDSCJJCJKCKKCKdsckkckkd", date: "2023-09-30" },
        { amount: "$50", name: "Expense 3", description: "Description 3", date: "2023-10-01" },
        { amount: "$75", name: "Expense 4", description: "Description 4", date: "2023-10-02" },
      ];
  
      return data.map((item, index) => (
        <Link to="/:userId/:expenseId" className="expense-row" key={index}>
          <p>-<span className="amount-money">{item.amount}</span></p>
          <p>{item.name}</p>
          <p>{item.description}</p>
          <p>{item.date}</p>
          
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
                <h3>Remaining Balance: $ <span>100</span></h3>
            </div>
      </div>
    );
  }
  