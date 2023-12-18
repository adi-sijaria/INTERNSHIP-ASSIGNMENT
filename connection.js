const mysql=require('mysql2');
const connection =mysql.createConnection({
    host:"localhost",
    database:"task",
    user:'root',
    password:'root'
});
module.exports=connection

