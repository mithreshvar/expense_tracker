const express = require('express');
const mongoose = require("mongoose");
const path = require('path')
let cors = require("cors");
const routes = require('./router/router')
const app = express();

//! Middleware

    //? TO change the data in the incoming request into JSON format
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(cors())

    //? To connect the routes to the express application
    app.use((req, res, next) => {
        console.log(req.path, req.method)
        next()
    })
    app.use(routes)

app.use(
    express.static(path.join(__dirname, "../client"))
);
    
// Catch all requests that don't match any route
app.get("*", (req, res) => {
    res.sendFile(
        path.join(__dirname, "../client/index.html")
    );
});

//! DB connection
mongoose.connect("mongodb://127.0.0.1:27017/expense_tracker" , {    // same as "mongodb://localhost:27017/expense_tracker"
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => console.log('CONNECTED TO DB'))

app.listen(3000, ()=> {
    console.log('Server running on port : 3000')
})