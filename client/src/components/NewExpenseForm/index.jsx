/* eslint-disable react/prop-types */
import { useRef } from 'react';
import './NewExpensesForm.css'
export default function NewExpenseForm ({addExpense}) {

    const titleRef = useRef()
    const amountRef = useRef()
    const dateRef = useRef()

    function handleCancel () {
        titleRef.current.value = ''
        amountRef.current.value = ''
        dateRef.current.value = ''
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const data = {
            "title": titleRef.current.value,
            "amount": amountRef.current.value,
            "date": dateRef.current.value
        }
        
        try{
            let response = await fetch('http://localhost:3000/expense/create', {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json"}
            })
            if (response.ok) {
                handleCancel()
                addExpense([data])
            }
        }
        catch(err) {
            console.log(err.message)
        }
    }

    return(
        <div className='new-expense'>
            <form onSubmit={handleSubmit}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type='text' ref={titleRef} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type='text' ref={amountRef}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type='date' ref={dateRef}/>
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='button' onClick={handleCancel}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        </div>
    )
}