const mysql=require("mysql2");
const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors());
app.use(express.json());

const pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"#Mky*SSq@L2103$",
    database:"club_hub",
    port: "3306"
},(err,result)=>{
    if(err) 
        console.log(err)
    else    
        console.log(result)
})



// app.post('/form', (req, res) => {
//     const { username, about, firstName, lastName, srn, gender, contact, campus, year, specialization } = req.body;
//     const command = `INSERT INTO student(srn, username, about, first_name, last_name, gender, contact, campus, year_of_graduation, specialization) 
//                      VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
//     pool.query(command, [srn, username, about, firstName, lastName, gender, contact, campus, year, specialization], (err, result) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).send("Internal server error");
//         }
        
//         console.log(result);
//         return res.status(200).send("Data inserted successfully");
//     });
// });

app.post('/signin', (req, res) => {
    const { email, password } = req.body;
    const query = `SELECT * FROM users WHERE email = ? AND password = ?`;
    
    pool.query(query, [email, password], (error, results) => {
      if (error) {
        console.log('Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' }); // Send JSON response
      }
  
      if (results.length > 0) {
        console.log("User found in database");
        return res.status(200).json({ message: 'Sign-in successful' }); // Success with JSON message
      } else {
        console.log("User not found or wrong password");
        return res.status(401).json({ error: 'User/Password not found' }); // Unauthorized error
      }
    });
  });
  

app.post('/signup',(req, res) =>{
    const { username, about, firstName, lastName, srn, gender, contact, email, password, campus, year, specialization } = req.body;
    const query = `INSERT INTO users (email,password) VALUES (?,?)`;
    const command = `INSERT INTO users(srn, username, about, first_name, last_name, gender, contact, campus, year_of_graduation, specialization, email, password) 
    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    pool.query(command, [srn, username, about, firstName, lastName, gender, contact,  campus, year, specialization, email, password], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({error: 'Duplicate Entry'});
        }
        return res.status(200).send("Data inserted successfully");
    });
});

app.get('/clubs', (req, res) => {
    console.log('Listening');
    const query = 'SELECT * FROM club'; 
    pool.query(query, (err, results) => { 
        if (err) 
            throw err; 
        res.json(results); 
    });
})

app.listen(5050,()=>{
    console.log("Listening on port 5050...");
})