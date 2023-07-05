import './NewExpensesForm.css'
export default function NewExpenseForm ( ) {
    return(
        <div className='new-expense'>
            <form>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type='text' />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type='text' />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type='date' />
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button>Cancel</button>
                    <button>Add Expense</button>
                </div>
            </form>
        </div>
    )
}