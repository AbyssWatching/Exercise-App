//allows use of express and cors
const express = require ('express');
const cors = require ('cors');
const mongoose = require("mongoose")


//allows use of enviorment in dotenv
require("dotenv").config();

//to create express
const app = express();
const port = process.env.PORT;

//middlewhere
app.use(cors());
//allows parse of json
app.use(express.json());


const uri = process.env.ATLUS;


//connects to DB
mongoose.connect(uri, {
    //useNewURLParser deals with updates to mongo deprication
   // useNewURLParser: true, useCreateIndex: true
});

const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("MonogDb db connection established")
})

//starts server listening on ports
app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`)
    
})