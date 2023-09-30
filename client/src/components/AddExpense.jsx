
export default function AddExpense(){
return (
    <div>
        <form action="" className="expenses-form">
            <input type="number" placeholder="Amount..." /><input type="text" placeholder="Name..." /><input type="text" placeholder="Description..." />
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
)
}