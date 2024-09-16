


const mongoose=require('mongoose');
//creating schema
const userSchema= new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
})

//creating model

const mongoModel= mongoose.model("user",userSchema);

module.exports=mongoModel;