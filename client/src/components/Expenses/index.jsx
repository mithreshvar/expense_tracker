/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ExpenseItem from "../ExpenseItem";
import './Expenses.css'

const Expenses = ({newExpense}) => {
    // let date = new Date();
    // const expenses = [ 
    //     {
    //         amount: 100,
    //         title: 'New Tv'
    //     },
    //     {
    //         amount: 400,
    //         title: 'Fridge'
    //     },
    //     {
    //         amount: 150,
    //         title: 'Oven'
    //     },
    //     {
    //         amount: 200,
    //         title: 'Heater'
    //     },
    // ]

    const [expenses, setExpenses] = useState([]);

    useEffect(()=>{
        setExpenses([...expenses, ...newExpense]);
    },[newExpense])

    useEffect(()=>{
        (async function () {
            try {
                let data = await fetch('http://localhost:3000/expense/get');
                let json = await data.json();

                if (data.ok) {
                    setExpenses(json)
                }
                else {
                    console.log(json.error)
                }
            }
            catch(err){
                console.log(err.message)
            }
        })()
    },[])

    return(
        <div className="expenses">
            {expenses.map ( (item, index)=> <ExpenseItem date={item.date} amount={item.amount} title={item.title} key={index} />)}
        </div>
    )
}

export default Expenses;