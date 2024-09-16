

const user=require("../models/user.model");
const {v4:uuidv4}=require("uuid");

const path=require('path');
exports.getHome=(req,res)=>{
    res.sendFile(path.join(__dirname,"../viwes/index.html"));
}


exports.invalidRoute=(req,res)=>{
    res.status(404).json({
        message: "Route not found"
    })
}


exports.serverError=(req,res)=>{
    res.status(404).json({
        message: "Server Error"
    })
}

//getalluser
exports.getAllUser=async (req,res)=>{
   try{
     const users = await user.find();
     res.status(202).send(users);
   }catch(error){
      res.status(404).send(error.message);
   }
}

//get oneuser
exports.getOneUser=async (req,res)=>{
     try{
        const id=req.params.id;
        const users= await user.findOne({_id:id}).select({name:1, _id:0, age:1});
        res.status(201).send(users);
     }catch(error){
         res.status(405).send(error.message);
     }
}

//createUser

exports.createUser = async (req,res)=>{

    try{
        const newUser= new user({
            id:uuidv4(),
            name:req.body.name,
            age:Number(req.body.age)

        })
        await newUser.save();
        res.status(201).json(newUser)
    }catch(error){
        res.status(500).send(error.message);

    }
   
}

//updateuser

exports.updateUser = async (req,res)=>{
    try{
      const id=req.params.id;

      const users= await user.findByIdAndUpdate({_id:id},{$set:{name: req.body.name, age:req.body.age}},{ new : user});
      res.status(201).send(
        {
            message: "Update successfully",
            data : users
        }
      )
    }catch(error){
      res.send(error.message);
    }
}

//delete user

exports.deleteUser = async (req,res)=>{

    try{
   const id=req.params.id;

   const users= await user.deleteOne({_id:id});
   res.status(201).send({
    message : "delete successfull",
    data : users
   })

    }catch(error){
       res.status(408).send({
        message: "Delete Unsuccessfull",
        message : error.message
       })
    }

}
