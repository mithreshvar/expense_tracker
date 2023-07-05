let mongoose = require("mongoose")

let expenseSchema = mongoose.Schema({
    title: { type: String },
    amount: { type: Number },
    date: { type: String },
})

module.exports = mongoose.model("expenses", expenseSchema)

