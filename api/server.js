const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User =require('./models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());


const salt = bcrypt.genSaltSync(10);
const secret = 'ynkyep6uwh'


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

app.post('/login',async (req,res)=>{
    const {username,password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk =bcrypt.compareSync(password, userDoc.password);
    // res.json(passOk);
    if(passOk){
        //logged in
        jwt.sign({username,id:userDoc._id},secret,{},(err,token)=>{
            if(err) throw err;
            res.cookie('token',token).json('ok')
        });
    }else{
        res.status(400).json('wrong credentials');
    }
});

//to check if cookie if valid
app.get('/profile', (req,res)=>{
    const {token}=req.cookies;
    jwt.verify(token,secret,{},(err,info)=>{
        if(err) throw err;
        res.json(info);
    });
    // res.json(req.cookies);
});


app.listen(4000);

//mongodb://localhost:27017