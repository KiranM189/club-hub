const mysql=require("mysql2");
const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors());
app.use(express.json());

const pool=mysql.createPool({
    host:"10.30.201.241",
    user:"root",
    password:"root",
    database:"club_hub"
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


app.post('/form', (req, res) => {
    const { username, about, firstName, lastName, srn, gender, contact, campus, year, specialization } = req.body;
    const command = `INSERT INTO student(srn, username, about, first_name, last_name, gender, contact, campus, year_of_graduation, specialization) 
                     VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    pool.query(command, [srn, username, about, firstName, lastName, gender, contact, campus, year, specialization], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Internal server error");
        }
        
        console.log(result);
        return res.status(200).send("Data inserted successfully");
    });
    
});
app.listen(5050,()=>{
    console.log("Listening on port 5050...");
})