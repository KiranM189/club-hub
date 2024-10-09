const mysql=require("mysql2");
const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors());
app.use(express.json());

const pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"KiranM786@#",
    database:"ISA"
},(err,result)=>{
    if(err) 
        console.log(err)
    else    
        console.log(result)
})

app.post('/login',(req,res)=>{
    const user_name=req.body.email;
    const password=req.body.password;
    const command=`SELECT * FROM login WHERE user_name=? AND password=?`;
    pool.query(command,[user_name,password],(err,result)=>{
        if(err)
            console.log(err)
        else{
            if(result==0){
                console.log("user_not_present")
                res.send("user_not_present")
            }
            else{
                console.log("user_present")
                res.send("user-present")
            }
            console.log("excuted") 
        }
    })
})

app.listen(5050,()=>{
    console.log("Listening on port 5050...");
})