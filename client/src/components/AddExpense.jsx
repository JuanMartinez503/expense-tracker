export default function AddExpense() {
  return (
    <div>
      <form action="" className="expenses-form">
      <h4 className="text-center mb-3">Add Expense</h4>

        <input type="number" placeholder="Amount..." />
        <input type="text" placeholder="Name..." />
        <input type="text" placeholder="Description..." />
        <button type="submit" className="btn btn-primary">
          Add Expense
        </button>
      </form>
    </div>
  );
}
