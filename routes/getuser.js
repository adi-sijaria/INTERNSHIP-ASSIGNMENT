const express=require('express')
const router=express.Router()
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const connection=require("../connection");
router.get('/',(req,res)=>{
   
    if (req.session.user) {
        // User is authenticated; send user information
        res.json({ username: req.session.user.username });
      } else {
        res.status(401).json({ error: 'Unauthorized' });
      }
    
    

})
module.exports=router