//allows use of express and cors
const express = require ('express');
const cors = require ('cors');
const mongoose = require("mongoose")
//requiring the routers
const exerciseRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')


//allows use of enviorment in dotenv
require("dotenv").config();

//to create express
const app = express();
//allow access to dotenv
const port = process.env.PORT;

//middlewhere - connection between data, apps and the user!
app.use(cors());
//allows parse of json
app.use(express.json());
//for the routs
//what will appear after the basic url / users or /exercise
//it needs to know what to do if there is a /users hence /usersRouter
app.use('/exercise', exerciseRouter)
app.use('/users', usersRouter)


const uri = process.env.ATLUS;


//connects to DB
mongoose.connect(uri,{
    //if there was something to add it would go here!
});

const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("MonogDb db connection established")
})



//starts server listening on ports
app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`)
    
})