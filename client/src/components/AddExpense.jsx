export default function AddExpense() {
  return (
    <div>
      <form action="" className="expenses-form">
        <h4 className="text-center mb-3">Add Expense</h4>

        <div className="text-center expenses-form-input">
          <input type="number" placeholder="Amount..." />
          <input type="text" placeholder="Name..." />
          <input type="text" placeholder="Description..." />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
}
