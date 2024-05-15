require("dotenv").config();

const express = require('express')
const cors = require('cors');
const mongoose = require("mongoose");
const register = require("./routes/register")
const login = require("./routes/login")

const adzunajob = require('./routes/adzunajob')
const app =  express();

app.use(express.json())   // Express application to parse incoming requests with JSON payloads.
app.use(cors());

// Use Adzuna routes
app.use('/serpapi-job-search', adzunajob);
app.use('/api/register',register);
app.use('/api/login',login);

app.get("/",(req,res)=>{
    res.send('welcome to our online shop')
})
const port = process.env.PORT || 5000
const uri = process.env.DB_URL;

// mongoose.connect(uri,{
//     useNewUrlParser: true,
//     useUnifiedTopology:true,
// }).then(()=> console.log("Mongodb connection successfull"))
// .catch((err)=> console.error(err));


app.listen(port,console.log(`server running on port ${port}`))