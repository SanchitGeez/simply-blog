const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User =require('./models/User');
const bcrypt = require('bcrypt');

app.use(cors());
app.use(express.json());



const salt = bcrypt.genSaltSync(10);


mongoose.connect('mongodb://127.0.0.1:27017/blogdb');

app.post('/register',async (req,res)=>{
    const {username,password} = req.body;
    try {
        const userDoc = await User.create({username,password:bcrypt.hashSync(password,salt)});
        res.json(userDoc);
    } catch (error) {
        res.status(400).json(error);
    }
    
});


app.listen(4000);

//mongodb://localhost:27017