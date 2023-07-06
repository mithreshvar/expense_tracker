/* eslint-disable react/prop-types */
import './ExpenseDate.css'
export default function ExpenseDate ({date}) {
    const d = new Date(date)
    const day = d.getDate()
    const month = d.toLocaleDateString('US-en', {month: 'long'})
    const year = d.getFullYear()
    return(
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    )
}
