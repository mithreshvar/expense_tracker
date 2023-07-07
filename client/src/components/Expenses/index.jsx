/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import image from "../../assets/no-record-found.png";
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
                    console.log(expenses)
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
            {!expenses.length && <img src={image} alt="No records found" width={"500px"} height={"300px"} style={{alignSelf: "center"}}/>}
        </div>
    )
}

export default Expenses;