import { useState } from 'react'
import './App.css'
import Expenses from './components/Expenses'
import NewExpenseForm from './components/NewExpenseForm'

function App() {
   const [newExpense, setNewExpense] = useState([])
   function addExpense (value) {
        setNewExpense(value)
   }

    return (
        <> 
            <NewExpenseForm addExpense={addExpense}/>
            <Expenses newExpense={newExpense}/>
        </>
    )
}

export default App
