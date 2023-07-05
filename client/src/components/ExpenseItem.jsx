/* eslint-disable react/prop-types */
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
export default function ExpenseItem ({date, title, amount}) {

    return(
        <div className='expense-item'>            
            <ExpenseDate date={date} />
            {/* title and amount */}
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
        </div>
    )
}