const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

app.post('/register',(req,res)=>{
    const {username,password} = req.body;
    res.json({requestData:{username,password}});
});


app.listen(4000);

//mongodb://localhost:27017