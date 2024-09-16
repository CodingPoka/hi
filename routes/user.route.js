

const express=require('express');
const { getHome, invalidRoute, serverError, getAllUser, createUser, updateUser, deleteUser, getOneUser } = require('../controller/user.controller');

const router=express.Router();



router.get('/',getHome);
router.get('/user/:id',getOneUser);
router.get('/user',getAllUser);
router.post('/user',createUser);
router.put('/user/:id',updateUser);
router.delete('/user/:id',deleteUser);

router.use(invalidRoute);
router.use(serverError);





module.exports=router;