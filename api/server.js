const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User =require('./models/User');
const Post =require('./models/Post');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const fs = require('fs')
const multer = require('multer');
const uploadMiddleware = multer({dest:'uploads/'})



app.use(cors({credentials:true,origin:'http://localhost:3000'})); 
app.use(express.json());
app.use(cookieParser());
app.use('/uploads',express.static(__dirname+'/uploads'));

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
            res.cookie('token',token).json({
                id:userDoc._id,
                username,
            });
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

app.post('/logout',(req,res)=>{
    res.cookie('token','').json('okk');
})

app.post('/post',uploadMiddleware.single('file'),async (req,res)=>{
    //adding extention to the files being uploaded in uploads folder
    const {originalname,path}=req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length-1];
    const newPath = path+'.'+ext;
    fs.renameSync(path,newPath);

    const {token}=req.cookies;
    jwt.verify(token,secret,{},async (err,info)=>{
        if(err) throw err;

        //adding to db 
        const {title,summary,content} = req.body;
        const postDoc = await Post.create({
            title,
            summary,
            content,
            cover:newPath,
            author:info.id
        })

        res.json(postDoc);
    });

    



});


app.get('/post',async (req,res)=>{
    res.json(await Post.find().populate('author',['username']).sort({createdAt:-1}));
});

app.get('/post/:id',async(req,res)=>{
    const {id}=req.params;
    const postDoc = await Post.findById(id).populate('author',['username']);
    res.json(postDoc);
})


app.listen(4000);

//mongodb://localhost:27017