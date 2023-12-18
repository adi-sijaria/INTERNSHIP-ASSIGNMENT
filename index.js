const express = require('express');
const app = express();
const port = 3000; // Choose any available port
const registerapi=require("./routes/register")
const loginapi=require("./routes/login")
const getuser=require("./routes/getuser")
const connection=require('./connection')
const session=require("express-session")
app.get('/', (req, res) => {
  res.send('Hello, this is your API!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connection.connect((err)=>{
    if(err) throw err;
    console.log("DATAbASE CONNECTED!")

})
});
app.use(session({
    secret:"aditya",
    saveUninitialized:true,
    resave:true,
    cookie:{
        httpOnly:true,
        maxAge:3600000,
        secure:true
    }
}))
app.use("/register",registerapi);
app.use("/login",loginapi);
app.use("/getuser",getuser);