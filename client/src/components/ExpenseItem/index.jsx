/* eslint-disable react/prop-types */
import { useState } from 'react'
import ExpenseDate from '../ExpenseDate'
import './ExpenseItem.css'
export default function ExpenseItem ({date, title, amount}) {
    const [titleName, setTitleName] = useState(title)

    function handleUpdate() {
        setTitleName("Update");
    }

    return(
        <div className='expense-item'>            
            <ExpenseDate date={date} />
            {/* title and amount */}
            <div className="expense-item__description">
                <h2>{titleName}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
            <button type='button' onClick={handleUpdate} > Update </button>
        </div>
    )
}