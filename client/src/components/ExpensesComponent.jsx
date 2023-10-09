import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

export default function ExpensesComponent({ expenses, budget }) {
  const [showWarning, setShowWarning] = useState(false);

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
    const dateObj = new Date(date);
    const day = dateObj.getDate()+1;
    const month = dateObj.getMonth() + 1; // Adding 1 because months are zero-based
    const year = dateObj.getFullYear();
  
    // Ensure day and month have two digits (e.g., '01' instead of '1')
    const formattedDay = day.toString().padStart(2, '0');
    const formattedMonth = month.toString().padStart(2, '0');
  
    // Format the date as 'DD-MM-YYYY'
    return `${formattedMonth}-${formattedDay}-${year}`;
  };
  

  useEffect(() => {
    if (remainingBudget < budget * 0.1 && remainingBudget > 0) {
      // Show the warning message
      setShowWarning(true);

      // Set a timeout to hide the message after, for example, 5 seconds
      const timeoutId = setTimeout(() => {
        setShowWarning(false);
      }, 5000); // 5000 milliseconds (5 seconds)

      // Clean up the timeout when the component unmounts or when showWarning changes
      return () => clearTimeout(timeoutId);
    }
  }, [remainingBudget, budget]);

  const loopTest = () => {
    if (!expenses) {
      // Return some default content or loading indicator when expenses are undefined
      return <p>Loading expenses...</p>;
    }
  
    // Sort expenses by createdAt in ascending order (oldest first)
    const sortedExpenses = expenses.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  
    return sortedExpenses.map((item) => (
      <Link
        to={`/profile/${auth.getProfile().data.username.username}/${item._id}`}
        className="expense-row"
        key={item._id}
      >
        <p>
          - <span className="amount-money">{item.amount ? item.amount.toLocaleString() : 'N/A'}</span>
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
          Remaining Balance: ${' '}
          <span>
            {remainingBudget < 0 ? (
              <span id="exceeded">Budget exceeded!</span>
            ) : (
              <span>{remainingBudget ? remainingBudget.toLocaleString():'N/A'}</span>
            )}
          </span>
        </h3>
        {showWarning && (
          <p className='mt-4 text-center warning alert alert-warning'>
            Your remaining budget is less than 10% of the initial budget.
          </p>
        )}
      </div>
    
    </div>
  );
}
