const express=require('express')
const router=express.Router()
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const connection=require("../connection");
router.get('/',(req,res)=>{
   console.log(req.session.user,"got user");
    if (req.session) {
        // User is authenticated; send user information
        res.json({ username: req.session });
      } else {
        res.status(401).json({ error: 'Unauthorized' });
      }
    
    

})
module.exports=router