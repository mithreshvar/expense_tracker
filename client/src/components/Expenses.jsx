import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

const Expenses = () => {
    let date = new Date();
    const EXPENSES = [ 
        {
            amount: 100,
            title: 'New Tv'
        },
        {
            amount: 400,
            title: 'Fridge'
        },
        {
            amount: 150,
            title: 'Oven'
        },
        {
            amount: 200,
            title: 'Heater'
        },
    ]
    return(
        <div className="expenses">
            {EXPENSES.map ( (item, index)=> <ExpenseItem date={date} amount={item.amount} title={item.title} key={index} />)}
        </div>
    )
}

export default Expenses;