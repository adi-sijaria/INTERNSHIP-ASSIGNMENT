const express=require('express')
const router=express.Router()
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')


const secretKey='1234';
const connection=require("../connection");
router.post('/', (req, res) => {
const session=require("express-session")

const { email, password } = req.body;
connection.query(
  'SELECT * FROM users WHERE email = ?',
  [email],
  (error, results) => {
    // console.log(results,"results")
    if (error) throw error;
    if (results.length === 0) {
      res.status(401).json({ message: 'User not found' });
    } else {
        //user found
        const user = results[0];
        console.log(user,"user")
        req.session.user=user
        req.session.save();
    //   console.log(user.password,"user");
    //   console.log(password,"user");
      bcrypt.compare(password, user.password, (err, result) => {
    //    console.log(result)
        if (err) throw err;
        if (result) {
          const token = jwt.sign(
            { id: user.id, username: user.email },
            secretKey,
            
            { expiresIn: '15h' }
          );
          console.log(token)
          res.json({ token });
        } else {
          res.status(401).json({ message: 'Invalid credentials' });
        }
      });
    }
  }
);
  

})

module.exports=router
