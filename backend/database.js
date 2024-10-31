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
    database:"club_hub",
    port: "3306"
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

app.post('/signin', (req, res) => {
    const { email, password } = req.body;
    const query = `SELECT * FROM users WHERE email = ? AND password = ?`;
    pool.query(query, [email, password], (error, results) => {
        if (error) {
            console.log(err)
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (results.length > 0) {
            console.log("user in database")
        res.status(200).json({ message: 'Sign-in successful', user: results[0] });
        } else {
        res.status(401).json({ error: 'Invalid email or password' });
        }
    });
});

app.post('/signup',(req, res) =>{
    const { email, password } = req.body;
    const query = `INSERT INTO users (email,password) VALUES (?,?)`;
    pool.query(query, [email, password], (error, results) => {
        if (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                return res.status(400).json({ error: 'Email already exists. Please use a different email. Or sign up instead' });
            }
            console.log(error);
            return res.status(500).json({ error: 'Internal server error' });
        } else {
            res.status(200).json({ message: 'Sign-in successful', user: { email } }); 
        }
    });
});

app.listen(5050,()=>{
    console.log("Listening on port 5050...");
})