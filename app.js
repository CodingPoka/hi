const express=require('express');
const cors = require('cors');
const userRouter=require(".//routes/user.route");

const connectdb=require('./config/db');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


app.use(userRouter);



connectdb();

module.exports=app;