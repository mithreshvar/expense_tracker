let express = require('express')
let Expense = require('../models/expense')
let router = express.Router()
let path = require('path')

router.post('/expense/create', createExpense)
router.get('/expense/get', getExpenses)
router.patch('/expense/edit/:id')
router.delete('/expense/delete/:id')

module.exports = router

async function createExpense(req, res) {

    try{
        console.log(req.body)
        let {title, amount, date} = req.body

        let emptyFields = []

        if (!title) {
            emptyFields.push("title")
        }
        if (!amount) {
            emptyFields.push("amount")
        }
        if (!date) {
            emptyFields.push("date")
        }

        if (emptyFields.length > 0) {
            return res.status(400).json({ error: 'Requires all fields ', emptyFields })
        }

        let newExpense = new Expense({
            title,
            amount,
            date
        })
        await newExpense.save()
        res.json("Expense created")
    }
    catch(err) {
        console.log(err)
    }

}

async function getExpenses (req, res){
    try{
        let data = await Expense.find();
        res.status(200).json(data);
    }
    catch(err) {
        console.log(err)
    }
}