export default function AddExpense() {
  return (
    <div>
      <form action="" className="expenses-form">
      <h4 className="text-center mb-3">Add Expense</h4>

       <div className="w-100 text-center">
       <input type="number" placeholder="Amount..." />
        <input type="text" placeholder="Name..." />
        <input type="text" placeholder="Description..." />
       </div>
        <button type="submit" className="btn btn-primary">
          Add Expense
        </button>
      </form>
    </div>
  );
}
